/**
 * Object 1day-types
 */
let errorObj: string = {} // error!!!
let errorObj: number = {} // error!!!
let errorObj: boolean = {} // error!!!
let errorObj: any[] = {} // error!!!

let badData = { id: 1, name: "Farrukh"}; // bad
let badData: any = { id: 1, name: "Farrukh"}; // bad
let data: { id: number, name: string } = { id: 1, name: "Farrukh" }; // good

// best
export interface IUserData {
    id: number;
    name: string;
}
// all properties are required
let data: IUserData = {
    id: 1,
    name: "Farrukh"
};

// Optional Properties (?)
interface IUserData {
    id: number;
    name: string;
    email?: string
}

// Readonly properties
interface IReadOnlyUserData {
    readonly id: number;
    readonly name: string;
    readonly email: string;
}
let userData: IReadOnlyUserData = {
    id: 1,
    name: "Farrukh",
    email: "mfarrukhjon@gmail.com"
};
// userData.name = "John Doe"; // Error!!!

const { email, name, id }: IUserData = data;


// Interface arrays
let users: IUserData[] = [{id: 1, name: "Farrukh"}];
