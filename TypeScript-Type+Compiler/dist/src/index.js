"use strict";
let hasValue = true; //true or false
let count = 11;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello;
hello = 'hello';
const person = {
    name: 'Jack',
    age: 21,
    gender: 'Male'
};
console.log(person.gender);
const person2 = {
    name: 'Sam',
    age: 21,
};
const person3 = {
    name: {
        first: 'Alan',
        last: 'Smith'
    },
    age: 21
};
console.log(person3);
const fruits = ['Apple', 'Banana', 'Grape'];
const book = ['business', 1500, false];
book.push(21); //これOK！
// console.log(book[3]); //でも、最終参照の時厳しい
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 1] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 2] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.faijfi = 'faijfi';
let banana = 'banana';
banana = anything;
let unionType = 10; //number and string are OKAY union型
// unionType.toUppercase(); //Error occurs
unionType = 'hello';
unionType.toUpperCase(); //No error
let unionTypes = [21, 'hello'];
const apple = 'apple'; //Literal型（決まったしか扱えない、今回の場合Appleしか入れられません）
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello!');
}
function sayBye() {
    console.log('Bye!');
    return;
}
console.log(sayHello());
let tmp; //Undefined is not used
// let tmpNull: null = undefined;
const anotherAdd = add;
const doubleNumber = (number) => number * 2;
// const tripleNumber = (num: number) => number = num => num * 3;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
