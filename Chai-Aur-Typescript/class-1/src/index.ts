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

