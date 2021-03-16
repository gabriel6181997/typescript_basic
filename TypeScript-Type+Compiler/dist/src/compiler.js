"use strict";
function echo(message, name) {
    if (message) {
        return message;
    }
    return;
}
let implicitAny;
implicitAny = 'implicitAny';
// let nullableMessage: string | null = echo('hi');
// let undefinedableMessage: string | undefined = undefined;
let onlyNull = null;
let onlyUndefined = undefined;
// if(nullableMessage) {
//   nullableMessage.toUpperCase();
// }
// echo.call(null, 'h1');
