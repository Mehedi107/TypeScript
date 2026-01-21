// ✅ 2-1: Type assertion / type narrowing

let value: any;

value = 'Max';

value = 20;

// (value as string).includes

// (value as number)

const kgToGm = (value: string | number) => {
  if(typeof value === 'string') {
    const convertedValue = +value * 1000;
    return `The value is: ${convertedValue}`
  }

  if(typeof value === 'number') {
    return value * 1000;
  }
}

const result1 = kgToGm('5') as string;
const result2 = kgToGm(5) as number;

type customError = {
  message: string;
}

try {

} catch(error) {
  console.log((error as customError).message);
}

// ✅ 2-2: Interface, type vs interface

// type

type TUser = {
  name: string,
  age: number,
}

type TUser2 = TUser & {
  role: string
}

const user4: TUser2 = {
  name: 'Max',
  age: 20,
  role: 'admin'
}

type TRollNumber = number[];

const rollNumber: TRollNumber = [1, 2, 3];

type TAdd = (n1: number, n2: number) => number;

const addNumber: TAdd = (num1, num2) => num1 + num2;

// interface

interface IUser {
  name: string,
  age: number,
}

interface IUser2 extends IUser {
  role: string
} 

const user5: IUser2 = {
  name: 'Max',
  age: 20,
  role: 'admin'
}

interface IRollNumber {
  [index: number]: number;
}

const rollNumber2: IRollNumber = [4, 5, 6];

interface IAdd {
  (n1: number, n2:number): number
}

const addNumber2: IAdd = (num1, num2) => num1 + num2;

// ✅ 2-3: Introduction to generics

const nameArr1: string[] = ['X', 'Y', 'Z'];
const nameArr2: Array<string> = ['X', 'Y', 'Z'];
const numArr1: number[] = [1, 2, 3];
const numArr2: Array<number> = [1, 2, 3];
const boolArr1: boolean[] = [true, false];
const boolArr2: Array<boolean> = [true, false];

type GenericType<T> = Array<T>;

const nameArr3: GenericType<string> = ['X', 'Y', 'Z'];
const numArr3: GenericType<number> = [1, 2, 3];
const boolArr3: GenericType<boolean> = [true, false];

type obj  = {name: string, age: number}
const personObj: GenericType<obj> = [
  { name: 'Max', age: 20 },
  { name: 'John', age: 50 }
]

type GenericTuple<X, Y> = [X, Y]
const personTupleGeneric: GenericTuple<string, number> = ['Max', 10 ];

// ✅ 2-4: Generic with Interface

interface GenericInterface<X, Y = null> {
  name: string,
  designation: string,
  age: X,
  role?: Y
}

const developer1: GenericInterface<number> = {
  name: 'Max',
  designation: 'Frontend Developer',
  age: 50
}

const developer2: GenericInterface<number, string> = {
  name: 'John',
  designation: 'Backend Developer',
  age: 50,
  role: 'admin'
}

// ✅ 2-5 Function with generics

const functionArray = (param: string): string[] => {
  return [param]
}

const result = functionArray('Bangladesh')

const functionArrayWithGeneric = <T>(param: T): T[] => {
  return [param]
}

const result3 = functionArrayWithGeneric<string>('Max')
const result4 = functionArrayWithGeneric<number>(10)
const result5 = functionArrayWithGeneric<boolean>(true)
const result6 = functionArrayWithGeneric<object>({id: 10, name: 'max'})

const functionArrayWithGenericTuple = <X, Y>(p1: X, p2: Y): [X, Y] => {
  return [p1, p2]
}

const result7 = functionArrayWithGenericTuple<string, number>('max', 10)
const result8 = functionArrayWithGenericTuple<boolean, object>(true, {id: 1})

// ✅ 2-6: Constraints in typescript

type TStudent = {
  id: number,
  name: string,
  email: string
}

const randGenericFunction = <T extends TStudent>(param: T) => {
  const course = 'Level 2'

  return {
    course,
    ...param
  }
}

const student1 = randGenericFunction({
  id: 1,
  name: 'stu1',
  email: 'stu1@gmail.com',
  isAdult: false
})

// ✅ 2-7 Constraint using key of

type Vehicle = {
  cycle: string,
  bike: string,
  car: string
}

type Vehicle2 = 'cycle' | 'bike' | 'car'; // manual
type Vehicle3 = keyof Vehicle; // automatic

const person = {
  name: 'Xen',
  age: 10,
  job: 'student'
}

const person2 = {
  name: 'Hen',
  age: 20,
  isAdult: false
}

const objectWithProperty = <O, K extends keyof O>(obj: O, key: K) => {
  return obj[key];
}

const result9 = objectWithProperty(person, 'name')
const result10 = objectWithProperty(person2, 'isAdult')

// ✅ 2-8: Asynchronous typescript

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data load successfully")
    }, 2000);
  })
}

fetchData().then((data) => {
  console.log(data)
})

// ✅ 2-9: Conditional types

type ApiResponse<T> = T extends string ? {data: string} : {data: number}

type response1 = ApiResponse<string>
type response2 = ApiResponse<number>

// ✅ 2-10: Mapped types

type Stringify<T> = {
  [K in keyof T]: string;
}

type User1 = {
  name: string,
  age: number
}

type convertedToStringType = Stringify<User1>

// ✅ 2-11 Utility types

type User2 = {
  name: string,
  age?: number,
  email: string,
  contactNo?: string
}

type PartialUser2 = Partial<User2>
type RequiredUser2 = Required<User2>
type PickUser2 = Pick<User2, 'name' | 'age'>
type OmitUser2 = Omit<User2, 'email' | 'contactNo'>

type Obj = {
  a: string,
  b: string,
}

type RecordObj = Record<string, unknown>

const obj5: RecordObj = {
  a: 'aa',
  b: 'bb',
  c: 'cc'
}

type Status = 'Finish' | 'Error' | 'Loading';

type ExcludeType = Exclude<Status, 'Loading'>
type ExtractType = Extract<Status, 'Finish'>

// ➡️ Remove null and undefined
type SafeValue = NonNullable<string | null | undefined>

// ➡️ Get function return type
function getUser() {
  return { name: "Mehedi", age: 24 };
}

type UserReturn = ReturnType<typeof getUser>;


// ➡️ Get function parameter types
type Params = Parameters<(id: number, name: string) => void>;

// ➡️ Extract resolved value from a Promise
type Data = Awaited<Promise<string>>;