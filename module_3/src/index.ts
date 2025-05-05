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
