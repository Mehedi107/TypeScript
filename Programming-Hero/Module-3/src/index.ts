// ✅ 3-1: Class and object

class Animal {
  constructor(public name: string, public species: string, public sound: string) {}

  makeSound() {
    console.log(`The animal name is ${this.name} and it's sound is ${this.sound}`);
  }
}

const dog = new Animal('Ben', 'dog', 'Bark')
const cat = new Animal('Puchi', 'cat', 'mew')

cat.makeSound()

// ✅ 3-2: Inheritance in OOP

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

class Student extends Person {
  studentId: string;

  constructor(name: string, age: number, studentId: string) {
    super(name, age);
    this.studentId = studentId;
  }
}

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, designation: string) {
    super(name, age);
    this.designation = designation;
  }
}

const student1 = new Student('Mehedi', 10, '11586')
const teacher1 = new Teacher('Max', 20, 'Teacher')

teacher1.getInfo()

// ✅ 3-3: Type guard using typeof & in

type AlphaNumeric = string | number;

// type guard
const getValue = (p1: AlphaNumeric, p2: AlphaNumeric) => {
  if(typeof p1 === 'number' && typeof p2 === 'number') {
    console.log(p1 + p2);
  }else {
    console.log(p1.toString() + p2.toString());
  }
}

getValue(5, 6)
getValue(5, '6')

// type in guard

type User = {
  name: string
}

type AdminUser = {
  name: string,
  role: string,
}

const seeTypeOfUser = (user: User | AdminUser): string => {
  if('role' in user) {
    return 'This is Admin user';
  }else {
    return 'This is regular user';
  }
}

console.log(seeTypeOfUser({name: 'Mehedi'}));
console.log(seeTypeOfUser({name: 'Mehedi', role: 'admin'}));