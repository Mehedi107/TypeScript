"use strict";
let names = ['max', 'john'];
const store = {
    fName: 'Max',
    isAdult: false,
};
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
const namesArr = merge('Mehedi', 'Max');
const mixValue = merge(5, 'Mehedi');
function mergeObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const obj = mergeObj({ fName: 'Max' }, { lName: 'Amini' });
console.log(obj);
