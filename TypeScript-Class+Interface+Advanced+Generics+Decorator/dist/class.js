"use strict";
class Person {
    // readonly id: number =32;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.id =31;
        // this.name = 'hee';
        // this.id=30;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
// let person2: Person;
// const quill = new Person('Quill',38);
// quill.incrementAge();
// console.log(quill.id)
// quill.greeting();
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am a teacher who teaches ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
    static getInstance() {
        if (Teacher.instance)
            return;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
// const teacher = new Teacher('Gabriel', 38,'Math');
// console.log(teacher.subject);
// teacher.subject = 'Music';
// teacher.greeting();
// console.log(Person.species);
// console.log(Person.isAdult(38));
// console.log(Teacher.species);
// console.log(Teacher.isAdult(38));
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
