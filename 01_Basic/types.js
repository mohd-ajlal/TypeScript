// TypeScript Types
// 1. Boolean
var isDone = false;
console.log(isDone);
// 2. Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
// 3. String
var color = "blue";
color = 'red';
console.log(color);
var fullName = "Mohd Ajlal";
var age = 21;
var sentence = "Hello, my name is ".concat(fullName, ".\nI'll be ").concat(age + 1, " years old next month.");
console.log(sentence);
// 4. Array
var list = [1, 2, 3];
console.log(list);
var list1 = [1, 2, 3];
console.log(list1);
// 5. Tuple
var x;
x = ["hello", 10];
console.log(x);
// 6. Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Blue;
console.log(c2);
// 7. Any
var notSure = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);
// 8. Void
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
// 9. Null and Undefined
var u = undefined;
console.log(u);
var n = null;
console.log(n);
// 10. Never
function error(message) {
    throw new Error(message);
}
// error("Something went wrong");
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
// 12. Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
console.log(strLength1);
