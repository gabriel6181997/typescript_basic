let hasValue = true; //true or false
let count = 11;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello : string;
hello = 'hello';

const person: {
  name : string;
  age: number;
  gender: string;
} = {
  name: 'Jack',
  age: 21,
  gender: 'Male'
}

console.log(person.gender)

const person2: object = { //基本的にこれは使いません！keyを指定できないので
  name: 'Sam',
  age: 21,
}

const person3 ={
  name:{
    first: 'Alan',
    last: 'Smith'
  },
  age: 21
}
console.log(person3);

const fruits = ['Apple', 'Banana', 'Grape'];
const book:[string, number, boolean] = ['business', 1500, false];
book.push(21); //これOK！
// console.log(book[3]); //でも、最終参照の時厳しい

enum CoffeeSize  { //型になっている (列挙型)
  SHORT,
  TALL = 'TALL',
  GRANDE = 1,
  VENTI
}

const coffee = {
  hot:true,
  size: CoffeeSize.TALL
}
coffee.size =CoffeeSize.SHORT;

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {}
anything.faijfi = 'faijfi'
let banana = 'banana';
banana = anything;

let unionType: number | string= 10; //number and string are OKAY union型
// unionType.toUppercase(); //Error occurs
unionType = 'hello'
unionType.toUpperCase() //No error
let unionTypes: (number | string)[] = [21,'hello']

type ClothSize = 'small' | 'medium' | 'large' // alias
const apple = 'apple'  //Literal型（決まったしか扱えない、今回の場合Appleしか入れられません）
let clothSize : ClothSize = 'large';

const cloth : {  //Union + Literal Type
  color: string;
  size: ClothSize
} = {
  color:'white',
  size:'medium'
}

function add(num1: number, num2: number) :number{
  return num1 + num2
}

function sayHello():void {
  console.log('Hello!')
}

function sayBye():undefined{  //Undefined is not used!
  console.log('Bye!');
  return;
}

console.log(sayHello());
let tmp: undefined; //Undefined is not used
// let tmpNull: null = undefined;

const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber = (number: number): number => number *2;
// const tripleNumber = (num: number) => number = num => num * 3;

function doubleAndHandle(num: number, cb: (num: number)=> number): void {  //Callback Function
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
  return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;

if(typeof unknownInput === 'string'){
  text = unknownInput
}

function error(message: string): never{  //never = 決して返さない
  throw new Error(message);
}
console.log(error('This is an error'));
