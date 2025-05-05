// type assertion
let text: any;

text = 'string';
text as string;

text = 123;
text as number;

// interface
interface withRole {
  role: string;
  hours: number;
}

interface withRoleExtend extends withRole {
  company: string;
}

const worker: withRoleExtend = {
  role: 'Admin',
  hours: 5,
  company: 'Concord',
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Generics
type GenericArr<T> = Array<T>;

// const str: string[] = ['x', 'y', 'z']
const str: GenericArr<string> = ['x', 'y', 'z'];

// const num: number[] = [1, 2, 3]
const num: GenericArr<number> = [1, 2, 3];

// const bool: boolean[] = [true, false, true]
const bool: GenericArr<boolean> = [true, false, true];

// Generic with interface
interface Developer<T, Y = null> {
  name: string;
  designation: string;
  computer: {
    brand: string;
    model: string;
    year: string;
  };
  watch: T;
  bike?: Y;
}

const developer: Developer<string, boolean> = {
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

const developer2: Developer<string> = {
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
const addToStudent = <T>(value: T) => {
  const course = 'Next level web development';

  return {
    ...value,
    course,
  };
};

const student1 = addToStudent({
  name: 'xxx',
  age: 20,
  mail: 'x@gmail.com',
});

// Constraints
const studentInfo = <T extends { id: string; email: string }>(data: T) => {
  const course = 'NLWD';
  return {
    ...data,
    course,
  };
};

const student2 = studentInfo({ name: 'YYY', email: 'y@gmail.com', id: '111' });

// Constraint using key of
type Model = {
  name: string;
  year: number;
};

type Model2 = 'name' | 'year';
type Model3 = keyof Model;

const car: Model3 = 'year';

// asynchronous typescript
const newPromise = () => {
  return new Promise<string>((resolve, reject) => {
    const data = 'something';

    if (data) {
      resolve(data);
    } else {
      reject('rejected');
    }
  });
};

const getData = async () => {
  const data = await newPromise();
  console.log(data);
  return data;
};

getData();

// conditional type
type Owner = {
  bike: string;
  car: string;
  cycle: string;
};

type Car<T> = T extends keyof Owner ? true : false;

type hasCar = Car<'bike'>;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// map in typescript
type Area = {
  width: number;
  height: number;
};

type AreaStr = {
  [key in keyof Area]: string;
};

const area: AreaStr = {
  width: '200',
  height: '300',
};

type AreaStr2<T> = {
  [key in keyof T]: T[key];
};

const area2: AreaStr2<{ height: number; weight: string }> = {
  height: 500,
  weight: '300',
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// some utility type script

type Obj = {
  fName: string;
  lName: string;
};

type PersonPick = Pick<Obj, 'fName'>;

type PersonOmit = Omit<Obj, 'fName'>;

type PersonRequired = Required<Obj>;

type PersonPartial = Partial<Obj>;

type PersonReadonly = Readonly<Obj>;

const personReadonly: Partial<Obj> = {
  fName: 'Mehedi',
  lName: 'Hasan',
};

type PersonRecord = Record<string, string>;

const personRecord: PersonRecord = {
  a: 'a',
  b: 'b',
};

type PersonRecord2 = Record<string, unknown>;

const personRecord2: PersonRecord2 = {
  a: 'a',
  b: 50,
};
// tsnd --respawn src/index.ts
