// String
const str: string = 'hello mehedi!';

// Tuple
const data: [string, number, boolean] = ['mehedi', 30, true];

// Reference type --> object
const data2: {
  company: 'Space X'; // literal type
  fName: string;
  lName?: string;
  age: number;
  isValid: boolean;
} = {
  company: 'Space X',
  fName: 'Mehedi',
  lName: 'Hasan',
  age: 30,
  isValid: true,
};

// function
function add(num1: number, num2: number) {
  return num1 + num2;
}
add(5, 6);

const arrowFunc = (num1: number, num2: number): number => num1 + num2;

// array
const arr: number[] = [1, 3, 5, 6, 5];

const newArr: number[] = arr.map((num: number): number => num * num);

// spread and rest operator
const obj1 = {
  name: 'mehedi',
  job: 'teacher',
  age: 20,
};
const obj2 = {
  fName: 'hasan',
  occupation: 'student',
};

const obj3 = {
  ...obj1,
  ...obj2,
};

const arr2: string[] = ['Akash', 'Bappy'];
const arr3: string[] = [];
arr3.push(...arr2);

// rest operator
const greeting = (...friends: string[]) => {
  friends.forEach(frnd => console.log(frnd));
};
greeting('mehedi', 'akash');
