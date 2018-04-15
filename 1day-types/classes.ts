// Class
export class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

let bad: User = { id: 1, name: "Farrukh" }; // bad
let good: User = new User(1, "Farrukh"); // good