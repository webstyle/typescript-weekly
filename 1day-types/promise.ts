import {User} from "./classes";

async function getUser(): Promise<User> {
    return new User(1, "Farrukh");
}

async function main() {
    let userPromise: Promise = getUser();
    let userPromise2: Promise<User> = getUser();
    let userData: User = await getUser();
}

