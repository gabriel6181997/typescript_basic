import _ from 'lodash';
console.log(_.shuffle([1, 2, 3, 4]));
var myApp;
(function (myApp) {
    const hello = 'hello in namespace';
    myApp.name = 'Quill';
})(myApp || (myApp = {}));
const hello = myApp.name;
let nameable;
// let name: string;
// function name() {}
var name;
(function (name) {
})(name || (name = {}));
// class name {}
// interface name {}
// type name {}
(function (name) {
    name.first = 'Peter';
})(name || (name = {}));
