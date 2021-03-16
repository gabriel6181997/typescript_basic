import axios from 'axios';
import _, {hello} from 'lodash';
type hi = hello;
console.log(_.shuffle([1,2,3,4])
)
namespace myApp {
  const hello = 'hello in namespace';
  export const name = 'Quill';
  export interface Nameable {
    name: string;
  }
}

const hello = myApp.name;
let nameable: myApp.Nameable["name"]

// let name: string;
// function name() {}
// enum name {}
// class name { }
// interface name {
//   first():void;
// }
// interface name {
//   first():number;
// }
// let tmp: name;
// type name {}
// namespace name {
//   export const first: string = 'Peter';
// }
