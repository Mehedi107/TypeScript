"use strict";
const course = "Next level web development";
console.log(course);
// Basic Data Types
///////////////////
let a = 'Mehedi';
let b = 10;
let c = undefined;
let d = null;
let e = ["a", 'b', 'c'];
let f = [2, 3, 4];
let g = ['Mehedi', 20];
let h = false;
// Reference types (object)
///////////////////////////
const user = {
    firstName: 'Mehedi',
    lastName: 'Hasan',
    isMarried: false,
    company: 'Mehedi Mart'
};
// 1-6 Function in typescript
/////////////////////////////
function sum(a, b = 5) {
    return a + b;
}
let obj = {
    fName: 'Mehedi',
    lName: 'hasan',
    sum() {
        return `My full name is ${this.fName + ' ' + this.lName}`;
    }
};
let arr = ['a', 'b', 'c'];
let newArr = arr.map((item) => item);
// 1-7 Spread and Rest Operator
///////////////////////////////
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
arr1.push(...arr2);
let obj1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};
let obj2 = {
    key4: 'value4',
    key5: 'value5',
    key6: 'value6'
};
let obj3 = Object.assign(Object.assign({}, obj1), obj2);
function showAllFriends(...friends) {
    return friends;
}
// 1-8 Destructuring in typescript
let obj4 = {
    key1: 'value1',
    key2: 'value2',
    key3: {
        innerKey1: 'innerValue1',
        innerKey2: 'innerValue2',
        innerKey3: 'innerValue3',
    }
};
let { key1, key3: { innerKey2: ik3 } } = obj4;
let arr3 = ['andy', 'blue', 'cham', 'dove', 'evo', 'frog', 'goal'];
let [idx1, idx2, ...rest] = arr3;
let user1 = {
    age: 50,
    job: 'teacher',
    name: 'mehedi',
};
let add = (n1, n2) => n1 + n2;
let developer = "Frontend";
let fullStackWebDeveloper = {
    fSkills: ['HTML', 'CSS', 'JS'],
    bSkills: ['Node', 'Express', 'Mongo']
};
