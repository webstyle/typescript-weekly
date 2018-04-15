/**
 * Strings
 */
let str: string = "some string";
let text: string = `
Multi line text
`;
let strAny = "string without";

let emptyString: string = "";
let emptyStr: string = '';
let emptyMultiLineStr: string = ``;

let username: string = "Farrukh";
let age = 21;
let greeting: string = `Hello, I'm ${username} and I ${age} years old`;
console.log(greeting);


/**
 * Numbers
 */
let num: number = 1;
let float: number = 1.1;
let decimal: number = 6;
let minus: number = -1;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let parseNumber: number = Number("123");

/**
 * Boolean
 */
let taskDone: boolean = true;
let taskReviewed: boolean = false;


/**
 * Any
 */
let anyNum: any = 1;
let anyString: any = "any string";
let anyBoolean: any = true;
// ...


/**
 * Array
 */
let strArray: string[] = ['some', 'string', 'in', 'array'];
let numArray: number[] = [1,2,3,4,5,6];
let bolArray: boolean[] = [true, false];
let anyArray: any[] = ['string', 1, true];
let stringsArray: Array<string> = ["some", "string", "in", "array"];
let arrayWithoutType: [] = [1,2]; // Error!!!!
// ...


// OR types
let numOrString: number | string | boolean = 1;