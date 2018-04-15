import { IUserData } from "./object-types";

function saveUser(id: number, name: string) {
    // ...
}

function saveUser(user: IUserData) {
    // ...
}

function saveUser({ id, name }: IUserData) {
    // ...
}