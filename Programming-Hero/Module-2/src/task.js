console.log("Hello World, I will complete this course successfully and become a Next level Web Developer!");
var logUser = function (name, age, role) {
    return {
        name: name,
        age: age,
        role: role
    };
};
var user1 = logUser('Max', 20, 'admin');
console.log(user1);
var magazine = {
    name: 'Max',
    monthly: true,
    issueNumber: 247
};
var book = {
    name: 'Robert',
    author: 'Robin',
    pages: 500,
};
var bookAndMagazine = {
    name: 'Robert',
    author: 'Robin',
    pages: 500,
    monthly: true,
    issueNumber: 247
};
var reverseString = function (input) {
    return input.split('').reverse().join('');
};
console.log(reverseString('Hello'));
