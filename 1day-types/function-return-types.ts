import { IUserData } from "./object-types";
import { User } from "./classes";

function getUser(): string | number | boolean {
    return "Farrukh"
}

function getUser(): { id: number, name: string } {
    return { id: 1, name: "Farrukh" };
}

function getUser(): IUserData {
    return { id: 1, name: "Farrukh" };
}

function getUser(): User {
    return new User(1, "Farrukh");
}

function getUsers(): Array<IUserData> | Array<User> | IUserData[] {
    return [{id: 1, name: "Farrukh"}, new User(1, "Farrukh")];
}