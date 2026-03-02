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