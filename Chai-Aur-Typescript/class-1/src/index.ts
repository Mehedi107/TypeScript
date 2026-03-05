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