import { UserRole } from "@shared/enums/user-role";
import { Friend } from "./friend";

export class User extends Friend {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;

    constructor(userId: number, email: string, role?: any) {
        super();

        this.id = userId;
        this.email = email;
    }
}