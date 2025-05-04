"use strict";
// String
const str = 'hello mehedi!';
// Tuple
const data = ['mehedi', 30, true];
// Reference type --> object
const data2 = {
    company: 'Space X',
    fName: 'Mehedi',
    lName: 'Hasan',
    age: 30,
    isValid: true,
};
// function
function add(num1, num2) {
    return num1 + num2;
}
add(5, 6);
const arrowFunc = (num1, num2) => num1 + num2;
// array
const arr = [1, 3, 5, 6, 5];
const newArr = arr.map((num) => num * num);
// spread and rest operator
const obj1 = {
    name: 'mehedi',
    job: 'teacher',
    age: 20,
};
const obj2 = {
    fName: 'hasan',
    occupation: 'student',
};
const obj3 = Object.assign(Object.assign({}, obj1), obj2);
const arr2 = ['Akash', 'Bappy'];
const arr3 = [];
arr3.push(...arr2);
// rest operator
const greeting = (...friends) => {
    friends.forEach(frnd => console.log(frnd));
};
greeting('mehedi', 'akash');
// object destructing
const person = {
    fName: 'Hasan',
    age: 50,
    occupation: 'Stock Holder',
};
const { age, occupation, fName } = person;
// array destructuring
const friends = [
    'Monica',
    'Rachel',
    'Phebe',
    'Ross',
    'Josh',
    'Tokyo',
];
const [a, , bestFriend, ...rest] = friends;
console.log(rest);
