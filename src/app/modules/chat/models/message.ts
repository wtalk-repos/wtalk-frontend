import { Friend } from "@shared/models/friend";

export class Message {
    id?:number;
    text: string;
    receiver: Friend;
    receiverId: number;

    constructor(props?: Message) {
        if (props) {
            Object.assign(this, props);
        }
    }
}