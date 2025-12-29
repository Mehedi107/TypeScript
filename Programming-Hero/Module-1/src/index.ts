const course: string = "Next level web development";

console.log(course);

// Basic Data Types
///////////////////

let a : string = 'Mehedi';
let b : number = 10;
let c : undefined = undefined;
let d : null = null;
let e : string[] = ["a", 'b', 'c'];
let f : number[] = [2,3,4];
let g : [string, number] = ['Mehedi', 20]; 
let h : boolean = false;


// Reference types (object)
///////////////////////////

const user : {
  firstName: string,
  lastName: string,
  isMarried: boolean,
  readonly company: string,
  // company : 'Mehedi Mart', // literal type
} = {
  firstName: 'Mehedi',
  lastName: 'Hasan',
  isMarried: false,
  company: 'Mehedi Mart'
}

// 1-6 Function in typescript
/////////////////////////////

function sum(a: number, b: number = 5): number {
  return a + b;
}

let obj = {
  fName: 'Mehedi',
  lName: 'hasan',
  sum(): string {
    return `My full name is ${this.fName + ' ' + this.lName}`
  } 
}

let arr = ['a', 'b', 'c'];
let newArr: string[] = arr.map((item: string): string => item);

// 1-7 Spread and Rest Operator
///////////////////////////////

let arr1: string[] = ['a', 'b', 'c'];
let arr2: string[] = ['d', 'e', 'f'];

arr1.push(...arr2);

let obj1 = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
}

let obj2 = {
  key4: 'value4',
  key5: 'value5',
  key6: 'value6'
}

let obj3 = {
  ...obj1,
  ...obj2
}

function showAllFriends(...friends: string[]): string[] {
  return friends;
} 

// 1-8 Destructuring in typescript

let obj4 = {
  key1: 'value1',
  key2: 'value2',
  key3: {
    innerKey1: 'innerValue1',
    innerKey2: 'innerValue2',
    innerKey3: 'innerValue3',
  }
}

let {key1, key3: {innerKey2: ik3}} = obj4;

let arr3 = ['andy', 'blue', 'cham', 'dove', 'evo', 'frog', 'goal'];

let [idx1, idx2, ...rest] = arr3

// 1-9 Type alias in typescript
///////////////////////////////

type User = {
  name: string,
  age: number,
  job: string
}

let user1: User = {
  age: 50,
  job: 'teacher',
  name: 'mehedi',
}

type Add = (num1: number, num2: number) => number;

let add: Add = (n1, n2) => n1 + n2;

// 1-10 Union and Intersection types
///////////////////////////////////

type WebDeveloper = 'Frontend' | 'Backend';

let developer: WebDeveloper = "Frontend";

type FrontendSkills = {
  fSkills: ['HTML', 'CSS', 'JS']
}

type BackendSkills = {
  bSkills: ['Node', 'Express', 'Mongo']
}

type FullStackSkills = FrontendSkills & BackendSkills;

let fullStackWebDeveloper: FullStackSkills = {
  fSkills: ['HTML', 'CSS', 'JS'],
  bSkills: ['Node', 'Express', 'Mongo']
}

// 1-11 Ternary, optional chaining & nullish coalescing operator

const age: number = 17;
const isAdult = age >= 18 ? true : false;
console.log({isAdult})

const user2 = null;
const isAuthenticated = user2 ?? 'Guest';
console.log({isAuthenticated})

const user3 = {
  name: 'mehedi',
  age: 20,
  address: {
    presentAddress: 'Dhaka'
  }
}
const isPermanentAddress = user3?.address?.permanentAddress ?? 'N/A';
console.log({isPermanentAddress})

// 1-12 Never,unknown and nullable type

const throwCustomError = (msg: string): never => {
  throw new Error(msg)
}
// throwCustomError('This is from custom error')

const showData = (value: unknown) => {
  if(typeof value === 'string') {
    console.log("It's a string")
  } else if(typeof value === 'number') {
    console.log("It's a number")
  }else {
    console.log('Not valid')
  }
}
showData(10)


