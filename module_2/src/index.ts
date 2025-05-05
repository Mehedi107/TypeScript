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
// const data = getData();
// console.log(data);

// tsnd --respawn src/index.ts
