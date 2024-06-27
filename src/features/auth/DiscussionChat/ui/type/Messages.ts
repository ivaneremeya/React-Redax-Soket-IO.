export interface IMessage {
    id: number;
    anonym: boolean;
    createdAt: string;
    text: string;
    user: {
        fio: string;
        username: string;
        id: number;
        previewImage: {
            id: number;
            name: string;
            url: string;
        } | null;
    };
}