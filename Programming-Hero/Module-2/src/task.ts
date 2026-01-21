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

const reverseString = (input: string): string => {
  return input.split('').reverse().join('')
} 

console.log(reverseString('Hello'))