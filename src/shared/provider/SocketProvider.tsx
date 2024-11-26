import {
    memo,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../api/config";
import { IMessage } from "@/features/auth/DiscussionChat/ui/type/Messages";
import { SocketContext } from "../socketContext";
import { IPetition } from "../socketContext/type/Petition";

interface ConnectSocketProps {
    children: ReactNode;
}

export const SocketProvider = memo((props: ConnectSocketProps) => {
    const { children } = props;

    const socket = useRef<null | Socket>(null);

    const [chatId, setChatId] = useState<number | undefined>(undefined);
    const [messages, setMessages] = useState<IMessage[] | undefined>(undefined);
    const [petitions, setPetitions] = useState<IPetition[] | undefined>(
        undefined,
    );

    useEffect(() => {
        socket.current = io(`${API_BASE_URL}`, {
            auth: {
                token: `${localStorage.getItem('acses')}`,
            },
        });

        socket.current.on("connect", () => {
            socket.current?.on("chat", (data) => {
                setMessages(() => data.messages);
            });
            socket.current?.on("message", (data) => {
                setMessages((prev) => (prev ? [...prev, data] : [data]));
            });
            socket.current?.on("anxiety", (data) =>
                toast.warning(
                    <>
                        <span>Тревога от {data.name}</span>
                        <p>{data.text}</p>
                    </>,
                ),
            );
            socket.current?.on("petitions", (data) => setPetitions(data));

            socket.current?.on("petitions:create:get", (data) => {
                setPetitions((prev) => (prev ? [...prev, data] : [data]));
                toast.success(
                    <>
                        <span>Успешно</span>
                        <p>Вы созздали петицию</p>
                    </>,
                );
            });

            socket.current?.on("petitions:update:get", (data) =>
                setPetitions((prev) =>
                    prev!.map((item) => (item.id === data.id ? data : item)),
                ),
            );

            socket.current?.on("petitions:alreadyChoose", (data) =>
                toast.warning(
                    <>
                        <span>Ошибка</span>
                        <p>Вы уже оставляли свой голос!</p>
                    </>,
                ),
            );
        });

        if (chatId) {
            console.log(chatId, "CHATiD");
            socket.current.emit("chat:get", {
                chatId,
            });
        }

        socket.current.emit("petitions:get");

       

        return () => {
            socket.current?.disconnect();
            setMessages(undefined);
        };
    }, [chatId, setMessages, setPetitions]);

    const sendMessage = useCallback(
        ({ text, anonym }: { text: string; anonym: boolean }) =>
            socket.current?.emit("message:send", {
                message: text,
                anonym,
            }),
        [],
    );

    const sendAnxiety = useCallback(
        (text: string) =>
            socket.current?.emit("anxiety:send", {
                text,
            }),
        [],
    );

    const createPetition = useCallback(
        (title: string, description: string) =>
            socket.current?.emit("petitions:create", {
                title,
                description,
            }),
        [],
    );

    const sendVote = useCallback(
        ({
            id,
            operation,
        }: {
            id: number;
            operation: "increase" | "decrease";
        }) =>
            socket.current?.emit("petitions:update", {
                id,
                operation,
            }),
        [],
    );

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = {
        chatId,
        setChatId,
        messages,
        petitions,
        sendMessage,
        sendAnxiety,
        createPetition,
        sendVote,
    };

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    );
});
