"use strict";
// type assertion
let text;
text = 'string';
text;
text = 123;
text;
const worker = {
    role: 'Admin',
    hours: 5,
    company: 'Concord',
};
// const str: string[] = ['x', 'y', 'z']
const str = ['x', 'y', 'z'];
// const num: number[] = [1, 2, 3]
const num = [1, 2, 3];
// const bool: boolean[] = [true, false, true]
const bool = [true, false, true];
const developer = {
    name: 'Mehedi',
    designation: 'developer',
    computer: {
        brand: 'hp',
        model: 'hp13x',
        year: '2022',
    },
    watch: 'apple',
    bike: true,
};
const developer2 = {
    name: 'Mehedi',
    designation: 'developer',
    computer: {
        brand: 'hp',
        model: 'hp13x',
        year: '2022',
    },
    watch: 'apple',
};
// Generic with function
const addToStudent = (value) => {
    const course = 'Next level web development';
    return Object.assign(Object.assign({}, value), { course });
};
const student1 = addToStudent({
    name: 'xxx',
    age: 20,
    mail: 'x@gmail.com',
});
// Constraints
const studentInfo = (data) => {
    const course = 'NLWD';
    return Object.assign(Object.assign({}, data), { course });
};
const student2 = studentInfo({ name: 'YYY', email: 'y@gmail.com', id: '111' });
// tsnd --respawn src/index.ts
