"use strict";
// type addFunc = (num1: number, num2: number) => number; //この書き方のほうが好ましい
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    nickName: 'Quilla'
};
// const human: Human = {
//   name: 'Quill',
//   age: 38,
//   greeting(message: string){
//     console.log(message);
//   }
// }
class Developer {
    constructor(age, experience, name) {
        this.age = age;
        this.experience = experience;
        this.name = name;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
const user = new Developer(38, 3);
if (user.name) {
    user.name.toUpperCase();
}
console.log(user.name);
