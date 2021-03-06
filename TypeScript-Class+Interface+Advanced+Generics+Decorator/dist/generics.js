"use strict";
function copy(value, key) {
    value[key];
    return value;
}
// console.log(copy<string>('hello'));
console.log(copy({ name: 'Quill', age: 38 }, 'name'));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Cherry');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());
const GenericstmpDatabase = {
    id: 3,
    data: [32]
};
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables = ['Tomato', 'Broccoli', 'Asparagus'];
let Genericstmp2;
let Genericstmp3;
let Genericstmp4;
let Genericstmp5;
