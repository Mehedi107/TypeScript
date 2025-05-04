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

// tsnd --respawn src/index.ts
