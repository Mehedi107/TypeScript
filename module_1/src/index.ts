// String
const text: string = 'hello mehedi!';

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

const arrowFunc = (num1: number, num2: number) => num1 + num2;
