import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";
import { IMessage } from "@/features/auth/DiscussionChat/ui/type/Messages";
import { IPetition } from "./type/Petition";

export const SocketContext = createContext<{
    chatId: number | undefined;
    messages: undefined | IMessage[];
    petitions: undefined | IPetition[];
    setChatId: React.Dispatch<React.SetStateAction<number | undefined>>;
    sendMessage: ({
        text,
        anonym,
    }: {
        text: string;
        anonym: boolean;
    }) => Socket | undefined;
    sendAnxiety: (text: string) => Socket | undefined;
    createPetition: (title: string, description: string) => Socket | undefined;
    sendVote: ({
        id,
        operation,
    }: {
        id: number;
        operation: "increase" | "decrease";
    }) => Socket | undefined;
} | null>(null);

export const useSocketContext = () => {
    const socketContext = useContext(SocketContext);

    if (socketContext === null) {
        throw new Error("socketContext must be inside a SocketProvider");
    }

    return socketContext;
};
