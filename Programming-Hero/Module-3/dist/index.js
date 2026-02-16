"use strict";
// ✅ 3-1: Class and object
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The animal name is ${this.name} and it's sound is ${this.sound}`);
    }
}
const dog = new Animal('Ben', 'dog', 'Bark');
const cat = new Animal('Puchi', 'cat', 'mew');
cat.makeSound();
// ✅ 3-2: Inheritance in OOP
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
}
class Teacher extends Person {
    constructor(name, age, designation) {
        super(name, age);
        this.designation = designation;
    }
}
const student1 = new Student('Mehedi', 10, '11586');
const teacher1 = new Teacher('Max', 20, 'Teacher');
teacher1.getInfo();
// type guard
const getValue = (p1, p2) => {
    if (typeof p1 === 'number' && typeof p2 === 'number') {
        console.log(p1 + p2);
    }
    else {
        console.log(p1.toString() + p2.toString());
    }
};
getValue(5, 6);
getValue(5, '6');
const seeTypeOfUser = (user) => {
    if ('role' in user) {
        return 'This is Admin user';
    }
    else {
        return 'This is regular user';
    }
};
console.log(seeTypeOfUser({ name: 'Mehedi' }));
console.log(seeTypeOfUser({ name: 'Mehedi', role: 'admin' }));
// ✅ 3-4: Type guard using instance of
class Animal2 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log('I am making sound');
    }
}
class Dog extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log('I am Barking');
    }
}
class Cat extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeMew() {
        console.log('I am Mewing');
    }
}
const dog2 = new Dog('Tom', 'Dog');
const cat2 = new Cat('Jerry', 'Cat');
const isDog = (animal) => animal instanceof Dog;
const isCat = (animal) => animal instanceof Cat;
const getAnimal = (animal) => {
    if (isDog(animal)) {
        console.log('I am Dog');
    }
    else if (isCat(animal)) {
        console.log('I am Cat');
    }
    else {
        console.log('I am an Animal');
    }
};
getAnimal(dog2);
getAnimal(cat2);
// ✅ 3-5: Access modifiers
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    addBalance(newBalance) {
        this.balance = this.balance + newBalance;
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount('111', 'Max', 100);
// console.log('Balance: ', account.balance);
// account.balance = 200
// console.log('Modified Balance: ', account.balance);
console.log('Balance: ', account.getBalance());
account.addBalance(200);
console.log('New Balance: ', account.getBalance());
