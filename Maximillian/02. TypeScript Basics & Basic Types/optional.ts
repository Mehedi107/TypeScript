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