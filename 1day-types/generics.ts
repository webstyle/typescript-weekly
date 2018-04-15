import {IUserData} from "./object-types";

function identity<T>(arg: T): T {
    return arg;
}

identity(1);
identity("string");
identity(true);

class PrintData<T> {
    list: T[];
    constructor(list: T[]) {
        this.list = list;
    }
    print() {
        this.list.forEach(item => {
            console.log("Item");
            console.log(item);
        });
    }
}

let numbers: PrintData<number> = new PrintData<number>([1, 2, 3, 4]);
numbers.print();

let users: PrintData<IUserData> = new PrintData<IUserData>([{id: 1, name: "Farrukh"}]);
users.print();

