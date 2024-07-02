// TypeScript Types

// 1. Boolean
let isDone: boolean = false;
console.log(isDone);

// 2. Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

// 3. String
let color: string = "blue";
color = 'red';
console.log(color);

let fullName: string = `Mohd Ajlal`;
let age: number = 21;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

// 4. Array
let list: number[] = [1, 2, 3];
console.log(list);

let list1: Array<number> = [1, 2, 3];
console.log(list1);

// 5. Tuple
let x: [string, number];
x = ["hello", 10];
console.log(x);

// 6. Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

enum Color1 {Red = 1, Green, Blue}
let c1: Color1 = Color1.Green;
console.log(c1);

enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Blue;
console.log(c2);

// 7. Any
let notSure: any = 4;
console.log(notSure);

notSure = "maybe a string instead";
console.log(notSure);

notSure = false;
console.log(notSure);

// 8. Void
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();

// 9. Null and Undefined
let u: undefined = undefined;
console.log(u);

let n: null = null;
console.log(n);

// 10. Never
function error(message: string): never {
    throw new Error(message);
}
// error("Something went wrong");

function infiniteLoop(): never {
    while (true) {
    }
}

// 11. Object
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

// 12. Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);

let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;
console.log(strLength1);

