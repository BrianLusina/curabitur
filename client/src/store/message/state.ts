import { Message } from "./types";

export default interface MessageState {
    username: string;
    messages: Message[];
}