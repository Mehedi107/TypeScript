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
// 1-11 Ternary, optional chaining & nullish coalescing operator
const age = 17;
const isAdult = age >= 18 ? true : false;
console.log({ isAdult });
const user2 = null;
const isAuthenticated = user2 !== null && user2 !== void 0 ? user2 : 'Guest';
console.log({ isAuthenticated });
const user3 = {
    name: 'mehedi',
    age: 20,
    address: {
        presentAddress: 'Dhaka'
    }
};
// const isPermanentAddress = user3?.address?.permanentAddress ?? 'N/A';
// console.log({isPermanentAddress})
// 1-12 Never,unknown and nullable type
const throwCustomError = (msg) => {
    throw new Error(msg);
};
// throwCustomError('This is from custom error')
const showData = (value) => {
    if (typeof value === 'string') {
        console.log("It's a string");
    }
    else if (typeof value === 'number') {
        console.log("It's a number");
    }
    else {
        console.log('Not valid');
    }
};
showData(10);
///////////////////////////////////////
// 2-1: Type assertion / type narrowing
let value;
value = 'Max';
value = 20;
// (value as string).includes
// (value as number)
const kgToGm = (value) => {
    if (typeof value === 'string') {
        const convertedValue = +value * 1000;
        return `The value is: ${convertedValue}`;
    }
    if (typeof value === 'number') {
        return value * 1000;
    }
};
const result1 = kgToGm('5');
const result2 = kgToGm(5);
try {
}
catch (error) {
    console.log(error.message);
}
const user4 = {
    name: 'Max',
    age: 20,
    role: 'admin'
};
const rollNumber = [1, 2, 3];
const addNumber = (num1, num2) => num1 + num2;
const user5 = {
    name: 'Max',
    age: 20,
    role: 'admin'
};
const rollNumber2 = [4, 5, 6];
const addNumber2 = (num1, num2) => num1 + num2;
/////////////////////////////////
// 2-3: Introduction to generics
const nameArr1 = ['X', 'Y', 'Z'];
const nameArr2 = ['X', 'Y', 'Z'];
const numArr1 = [1, 2, 3];
const numArr2 = [1, 2, 3];
const boolArr1 = [true, false];
const boolArr2 = [true, false];
const nameArr3 = ['X', 'Y', 'Z'];
const numArr3 = [1, 2, 3];
const boolArr3 = [true, false];
const personObj = [
    { name: 'Max', age: 20 },
    { name: 'John', age: 50 }
];
const personTupleGeneric = ['Max', 10];
const developer1 = {
    name: 'Max',
    designation: 'Frontend Developer',
    age: 50
};
const developer2 = {
    name: 'John',
    designation: 'Backend Developer',
    age: 50,
    role: 'admin'
};
/////////////////////////////
// 2-5 Function with generics
const functionArray = (param) => {
    return [param];
};
const result = functionArray('Bangladesh');
const functionArrayWithGeneric = (param) => {
    return [param];
};
const result3 = functionArrayWithGeneric('Max');
const result4 = functionArrayWithGeneric(10);
const result5 = functionArrayWithGeneric(true);
const result6 = functionArrayWithGeneric({ id: 10, name: 'max' });
const functionArrayWithGenericTuple = (p1, p2) => {
    return [p1, p2];
};
const result7 = functionArrayWithGenericTuple('max', 10);
const result8 = functionArrayWithGenericTuple(true, { id: 1 });
const randGenericFunction = (param) => {
    const course = 'Level 2';
    return Object.assign({ course }, param);
};
const student1 = randGenericFunction({
    id: 1,
    name: 'stu1',
    email: 'stu1@gmail.com',
    isAdult: false
});
const person = {
    name: 'Xen',
    age: 10,
    job: 'student'
};
const person2 = {
    name: 'Hen',
    age: 20,
    isAdult: false
};
const objectWithProperty = (obj, key) => {
    return obj[key];
};
const result9 = objectWithProperty(person, 'name');
const result10 = objectWithProperty(person2, 'isAdult');
///////////////////////////////
// 2-8: Asynchronous typescript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded successfully");
        }, 2000);
    });
};
fetchData().then((data) => {
    console.log(data);
});
const fetchData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data load successfully");
        }, 2000);
    });
};
fetchData1().then((data) => {
    console.log(data);
});
