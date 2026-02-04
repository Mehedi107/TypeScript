console.log("Hello World, I will complete this course successfully and become a Next level Web Developer!");

const logUser = ( name: string, age: number, role: 'admin' | 'user' | 'guest' ) => {
  return {
    name, age, role
  }
}

const user1 = logUser('Max', 20, 'admin')

console.log(user1);

type Person = {
  name: string,
  address: string,
  hairAndEyeColor: string, 
  incomeAndExpense: string, 
  hobbies: string,
  familyMembers: number,
  job: string,
  skills: string[], 
  marital: string,
  status: boolean,
  friends: string[]
}

interface IBook {
  name: string,
  author: string,
  pages: number,
}

interface IMagazine {
  name: string,
  issueNumber: number,
  monthly: boolean
}

type UnionBookAndMagazine = IBook | IMagazine

const magazine: UnionBookAndMagazine = {
  name: 'Max',
  monthly: true,
  issueNumber: 247
}

const book: UnionBookAndMagazine = {
  name: 'Robert',
  author: 'Robin',
  pages: 500,
}

type IntersectionBookAndMagazine = IBook & IMagazine

const bookAndMagazine = {
  name: 'Robert',
  author: 'Robin',
  pages: 500,
  monthly: true,
  issueNumber: 247
}

// Task 5: Function Type

const reverseString = (input: string): string => {
  return input.split('').reverse().join('')
} 

console.log(reverseString('Hello'))

// Task 6: Spread and Rest Operators, Destructuring

const someOfArbitraryNumber = (...num: number[]): number => {
  return num.reduce((sum, n) => sum + n, 0);
}

// Task 7: Type Assertion and Narrowing
const returnStringOrNumber = (input: string | number): string | number => {
  if(typeof input === 'string') {
    return input.length
  } else {
    return input * input;
  }
}

// Task 8: Intersection Types
type User = {
  name: string,
  email: string,
}

type Admin = {
  adminLevel: number
}

type AdminUser = User & Admin

const describeAdmin = (user: AdminUser): string => {
  return `My name is ${user.name}, my email is ${user.email} and my admin level is ${user.adminLevel}.`
}

const result11 = describeAdmin({name:"Max", email: 'x@gmail.com', adminLevel: 1})

// Task 9: Optional Chaining

type Employee = {
  id: string,
  name: string,
  address?: {
    city?: string
  }
}

const getEmployeeCity = (employee: Employee): string | undefined => {
  return employee?.address?.city
}

const employeeObj: Employee = {
  id: '01',
  name: 'Jon',
  address: {
    city: 'New York'
  }
}

const employee1 = getEmployeeCity(employeeObj)

// Task 10: Nullish Coalescing

const getDisplayName = (name: string | null | undefined): string => {
  return name ?? 'Anonymous';
}

const n = getDisplayName('Max')
const n2 = getDisplayName(null)
const n3 = getDisplayName(undefined)

// Task 11: Unknown Type
const processData = (data: unknown) => {
  if(typeof data === 'string') {
    return data.toUpperCase()
  }else if(typeof data === 'number') {
    return data * data;
  }else {
    return 'Something else data'
  }
}

const res1 = processData('data')
const res2 = processData(10)
const res3 = processData(true)

// Task 12: Never Type
const handleError = (message: string): never => {
  throw new Error(message)
} 

// Task 13: Generics with Functions and Interfaces
const removeDuplicates = <T>(items: T[]): T[] => {
  return [...new Set(items)]
}

const nums = removeDuplicates([1, 2, 2, 3, 4, 4])

const strings = removeDuplicates(["a", "b", "a", "c"])

const booleans = removeDuplicates([true, false, true])

// Task 14: Asynchronous TypeScript and Type Aliases
type User3 = {
  name: string,
  age: number,
}
const fetchUserData = async (): Promise<User3> => {
  return new Promise((res, rej) => {
    setTimeout(() =>{
      return res({
        name: 'max',
        age: 20,
      })
    },1000)
  })
}

const getUser2 = async () => {
  const user = await fetchUserData()

  console.log(user.name);
  console.log(user.age);
}

getUser2()

// Task 15: Type Guards
const isString = (value: unknown): value is string => {
  return typeof value === "string"
}

const printUpperCase = (value: unknown): void => {
  if (isString(value)) {
    console.log(value.toUpperCase())
  } else {
    console.log("Not a string")
  }
}

printUpperCase("hello")
printUpperCase(10)
printUpperCase(true)

// Task 16: Utility Types and Keyof Constraints
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key]
}

