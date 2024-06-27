import { IUser } from "./User";

export interface IPetition {
    id: number;
    users: IUser[];
    count: number;
    title: string;
    description: string;
}
