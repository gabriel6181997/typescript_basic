// type addFunc = (num1: number, num2: number) => number; //この書き方のほうが好ましい

interface addFunc {
  (num1: number, num2: number): number; //メソッドを書かない
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Nameable {
  name?: string;
  nickName?: string; // ? = あってもなくてもいい処理
}

const nameable: Nameable = {
  nickName: 'Quilla'
}

interface Human extends Nameable {
  age: number;
  greeting(message: string): void; //メソッドのみに適用な書き方
}

// const human: Human = {
//   name: 'Quill',
//   age: 38,
//   greeting(message: string){
//     console.log(message);
//   }
// }

class Developer implements Human {
  constructor(public age: number, public experience: number, public name?: string){  //? parameter must be written at the end
  }
  greeting(message: string) {
    console.log(message);
  }
}

const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string){
    console.log(message);
  }
}

const user: Human = new Developer(38,3);
if (user.name){
  user.name.toUpperCase()
}
console.log(user.name)
