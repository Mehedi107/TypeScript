function greet(name: string): string {
  return `Hello ${name}`
}

console.log(greet('Mehedi'));

//✅ type annotation and inference
let str: string = 'Mehedi'
let bol: boolean = false

let value = Math.random() > 0.5 ? 10 : "5";