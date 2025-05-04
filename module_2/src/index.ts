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

// tsnd --respawn src/index.ts
