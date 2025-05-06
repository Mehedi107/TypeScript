// Object Oriented Typescript
class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: string
  ) {}

  detail() {
    console.log(`This is ${this.brand} car.`);
  }
}

const bmw = new Car('BMW', 'Phantom', '2020');
// console.log(bmw);
// bmw.detail();

///////////////////////////////////////////
// inheritance
class ParentClass {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class Student extends ParentClass {
  constructor(name: string, email: string) {
    super(name, email);
  }

  studentInfo() {
    console.log('He is a student.');
  }
}

class Teacher extends ParentClass {
  subject: string;

  constructor(name: string, email: string, subject: string) {
    super(name, email);
    this.subject = subject;
  }

  teacherInfo() {
    console.log('He is a teacher.');
  }
}

const student = new Student('Mehedi', 'mehedi@gmail.com');
const teacher = new Teacher('John', 'John@gmail.com', 'English');

////////////////////////////////////////////////
// type guard
const sum = (p1: string | number, p2: string | number) => {
  if (typeof p1 === 'number' && typeof p2 === 'number') {
    console.log(p1 + p2);
  } else {
    console.log(p1.toString() + p2.toString());
  }
};

sum(1, 2);
sum(1, '2');

/////////////////////////////////////////////
// in guard

type regularUser = {
  name: string;
};

type adminUser = {
  name: string;
  role: 'admin';
};

const checkUser = (user: regularUser | adminUser) => {
  if ('role' in user) {
    console.log('This is admin user');
  } else {
    console.log('this is regular user');
  }
};

checkUser({ name: 'hasan' });

/////////////////////////////////////////////
// private, readonly and public in class
class BankAccount {
  readonly id: string;
  public userName: string;
  private _balance: number;
  protected _code: number;

  constructor(id: string, userName: string, _balance: number, _code: number) {
    this.id = id;
    this.userName = userName;
    this._balance = _balance;
    this._code = _code;
  }

  getBalance() {
    console.log(this._balance);
  }
}

const acc1 = new BankAccount('1', 'X', 25, 111);
acc1.getBalance();

///////////////////////////////////////////////
// getter and setter
class BankAccount2 {
  readonly id: string;
  public userName: string;
  private _balance: number;
  protected _code: number;

  constructor(id: string, userName: string, _balance: number, _code: number) {
    this.id = id;
    this.userName = userName;
    this._balance = _balance;
    this._code = _code;
  }

  get balance() {
    return this._balance;
  }

  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const acc2 = new BankAccount2('2', 'Y', 50, 123);
console.log('getter>>>>>>>>>>>>', acc2.balance);
acc2.deposit = 50;

//////////////////////////////////////////
// static in class
class Counter {
  static count: number = 0;

  increment() {
    return (Counter.count = Counter.count + 1);
  }

  decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

const instance1 = new Counter();
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.decrement());
