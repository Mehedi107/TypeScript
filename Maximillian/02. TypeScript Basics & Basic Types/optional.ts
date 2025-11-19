// Optional Values & TypeScript
function greet(msg?: string) {
  console.log(msg)
}
greet()

type user = {
  name: 'max',
  age: 50,
  role?: 'admin' | 'guest',
}

// Nullish Coalescing Operator (it will check only "undefined" or "null" value not falsy value)
const input = '';

const didProvideInput = input ?? false;