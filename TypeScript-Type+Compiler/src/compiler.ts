function echo(message: string, name: string) :string | undefined{
  if(message){
    return message;
  }
  return;
}

let implicitAny;
implicitAny = 'implicitAny';

// let nullableMessage: string | null = echo('hi');
// let undefinedableMessage: string | undefined = undefined;
let onlyNull: null = null;
let onlyUndefined: undefined = undefined;
// if(nullableMessage) {
//   nullableMessage.toUpperCase();
// }

// echo.call(null, 'h1');
