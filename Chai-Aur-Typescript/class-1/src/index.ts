function greet(name: string): string {
  return `Hello ${name}`
}

console.log(greet('Mehedi'));

//✅ type annotation and inference
let str: string = 'Mehedi'
let bol: boolean = false

let value = Math.random() > 0.5 ? 10 : "5";

// ✅ union and any type
let value2: string | number = '5'
const apiRequestStatus: 'pending' | 'success' | 'error' = "success"

let arr = [1,4,6,7]
let currentValue;

for(let a of arr) {
  if(a === 4) {
    currentValue = a
    break
  }
}
console.log(currentValue);

// ✅ type narrowing

type value = string | number

function getValue(input: value) {
  if(typeof input === 'string') {
    console.log(`The value is string type.`);
  }
  console.log(`The value is number type.`);
}

function serveChai(msg?: string): string {
  if(msg) {
    return `Serving ${msg} chai`
  }
  return `Serving chai without message.`
}

function orderChai(size: 'small'|'medium'|'large'):string {
  if(size === 'small') return `Small tea...`
  if(size === 'medium') return `medium tea...`
  if(size === 'large') return `large tea...`

  return `No size selected for tea`
}

class MilkTea {
  server() {
    return `Serving milk tea.`
  }
}

class BlackTea {
  server() {
    return `Serving black tea.`
  }
}

function serveTea(teaType: MilkTea | BlackTea) {
  if(teaType instanceof MilkTea) {
    return `${teaType.server()}`
  }
  
  return `${teaType.server()}`
}

// ✅ In TypeScript, an interface is used to define the structure (shape) of an object. It tells TypeScript what properties an object should have and what their types are.

interface User {
  name: string,
  age?: number,
  greet?(): string,
}

const user1: User = {
  name: "Mehedi",
  age: 40,
}
const user2: User = {
  name: "Safa",
  greet() {
    return `Hello ${this.name}`
  }
}

interface Add {
  (a: number, b: number): number
}

const add: Add = (a, b) => a + b

// Extending Interfaces (Inheritance)

interface Animal {
  name: string,
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Tommy",
  breed: "Germen Shepherd"
}

// Simple rule:
// Use interface → for objects & class structure
// Use type → for unions, complex types

// ✅ objects

type Person = {
  name: string,
  age: number,
  address: string,
  married?: boolean
}

const p1: Person = {
  name: "Mehedi",
  age: 10,
  address: 'Dhaka',
  married: false
}

const p2: Partial<Person> = {
  name: 'Mehedi',
  age: 10
}

const p3: Partial<Person> = {
  name: 'Mehedi',
  age: 10
}

const p4: Omit<Person, "married"> = {
  name: "mahdi",
  address: 'dhaka',
  age: 10
}

const p5: Pick<Person, 'name'> = {
  name: "Mehedi",
}

// ✅ Interface

interface IUser {
  name: string;
  age: number;
  city?: string
}

const u1: IUser = {
  name: 'Mehedi',
  age: 20
}

interface IAdd {
  (a: number, b: number): number
}

const sum: IAdd = (a, b) => a + b;

// ✅ simple task

interface IPost {
  id: string;
  title: string;
  description: string;
}



// Write a function to print post title

const postObj: IPost = {
  id: '01',
  title: 'First post title',
  description: 'Vivamus lacinia lacus vel neque egestas, vitae volutpat purus dapibus. Nullam nec ultricies erat. Etiam ac urna metus. Sed cursus libero id ullamcorper interdum. Donec non urna et erat vehicula porttitor. Vivamus a sagittis dolor. Nulla facilisi. Cras euismod orci at felis cursus, vel vulputate sapien suscipit.'
}

const allPost: IPost[] = [
  {
    id: '01',
    title: 'First post title',
    description: 'Vivamus lacinia lacus vel neque egestas, vitae volutpat purus dapibus. Nullam nec ultricies erat. Etiam ac urna metus. Sed cursus libero id ullamcorper interdum. Donec non urna et erat vehicula porttitor. Vivamus a sagittis dolor. Nulla facilisi. Cras euismod orci at felis cursus, vel vulputate sapien suscipit.'
  },
  {
    id: '02',
    title: 'First post title',
    description: 'Vivamus lacinia lacus vel neque egestas, vitae volutpat purus dapibus. Nullam nec ultricies erat. Etiam ac urna metus. Sed cursus libero id ullamcorper interdum. Donec non urna et erat vehicula porttitor. Vivamus a sagittis dolor. Nulla facilisi. Cras euismod orci at felis cursus, vel vulputate sapien suscipit.'
  },
  {
    id: '03',
    title: 'First post title',
    description: 'Vivamus lacinia lacus vel neque egestas, vitae volutpat purus dapibus. Nullam nec ultricies erat. Etiam ac urna metus. Sed cursus libero id ullamcorper interdum. Donec non urna et erat vehicula porttitor. Vivamus a sagittis dolor. Nulla facilisi. Cras euismod orci at felis cursus, vel vulputate sapien suscipit.'
  },
]

const printPostTitle = (post: IPost) => {
  console.log(post.title);
}

// ✅ Generics

function returnValue<T> (value: T): T {
  return value;
}

const res1 = returnValue<string>('50')
const res2 = returnValue<number>(10)
const res3 = returnValue<boolean>(true)
const res4 = returnValue(true)


function getFirstElement<T>(element: T[]) {
  return element[0]
}

const el = [1,2,3]
const el2 = ['a','b','c']