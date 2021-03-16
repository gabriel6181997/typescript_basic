abstract class Person {
  static species = 'Homo sapiens';
  static isAdult(age: number){
    if(age > 17) return true;
    return false;
  }
  // readonly id: number =32;
  constructor(public readonly name: string, protected age: number){
    // this.id =31;
    // this.name = 'hee';
    // this.id=30;
  }
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

// let person2: Person;
// const quill = new Person('Quill',38);
// quill.incrementAge();
// console.log(quill.id)
// quill.greeting();

class Teacher extends Person{
  private static instance: Teacher;

  explainJob(){
    console.log(`I am a teacher who teaches ${this.subject}`)
  }

  get subject():string {
    if(!this._subject){
      throw new Error('There is no subject.')
    }
    return this._subject;
  }

  set subject(value) {
    if(!value){
      throw new Error('There is no subject.')
    }
    this._subject = value;
  }

  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
  }

  static getInstance() {
    if (Teacher.instance) return;
    Teacher.instance =  new Teacher('Quill', 38, 'Math');
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

const teacher = Teacher.getInstance()
const teacher2 = Teacher.getInstance()
console.log(teacher, teacher2)
