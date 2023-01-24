export class Friend {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    avatar: string;
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}   