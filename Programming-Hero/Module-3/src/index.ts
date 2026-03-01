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

// ✅ 3-4: Type guard using instance of

class Animal2 {
  name: string;
  species: String;

  constructor(name: string, species: String) {
    this.name = name
    this.species = species
  }

  makeSound() {
    console.log('I am making sound');
  }
}

class Dog extends Animal2 {
  constructor(name: string, species: String) {
    super(name, species)
  }

  makeBark() {
    console.log('I am Barking');
  }
}

class Cat extends Animal2 {
  constructor(name: string, species: String) {
    super(name, species)
  }

  makeMew() {
    console.log('I am Mewing');
  }
}

const dog2 = new Dog('Tom', 'Dog')
const cat2 = new Cat('Jerry', 'Cat')

const isDog = (animal: Animal2) => animal instanceof Dog;
const isCat = (animal: Animal2) => animal instanceof Cat;

const getAnimal = (animal: Animal2) => {
  if (isDog(animal)) {
    console.log('I am Dog');
  }else if (isCat(animal)) {
    console.log('I am Cat');
  }else {
    console.log('I am an Animal');
  }
}

getAnimal(dog2)
getAnimal(cat2)

// ✅ 3-5: Access modifiers

class BankAccount {
  public readonly id: string;
  public name: string;
  // private balance: number;
  protected balance: number;

  constructor(id: string, name: string, balance: number) {
    this.id = id
    this.name = name
    this.balance = balance
  }

  // addBalance(newBalance: number) {
  //   this.balance = this.balance + newBalance
  // }

  set addBalance(newBalance: number) {
    this.balance += newBalance;
  }

  // getBalance() {
  //   return this.balance;
  // }

  get getBalance() {
    return this.balance
  }
}

const account = new BankAccount('111', 'Max', 100)

// console.log('Balance: ', account.balance);
// account.balance = 200
// console.log('Modified Balance: ', account.balance);

// console.log('Balance: ', account.getBalance());

// account.addBalance(200)


account.addBalance = 50

// console.log('New Balance: ', account.getBalance());
console.log('New Balance: ', account.getBalance);

class StudentBankAccount extends BankAccount {
  test() {
    return this.balance
  }
}
