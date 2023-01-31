export class Friend {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    avatar: string;
    online: boolean;

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    get onlineStatusText(){
        if (this.online) {
            return 'Active'
        }
        return 'Offline';
    }
}   