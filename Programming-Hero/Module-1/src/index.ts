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