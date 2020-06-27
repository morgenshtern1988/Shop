export interface IUser {
    lastName: string;
    firstName: string;
    avatar: string;
    email: string;
    password: string;
    confirmed: boolean;
    removed_at: boolean;
    status:boolean;
    role: boolean;
}
export interface IResetPassword {
    id: string;
    oldPassword: string;
    newPassword: string;
}

