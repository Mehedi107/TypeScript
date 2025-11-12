let hobbies = ['cooking', 'reading'];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = [5, 'Max'];
users = [6, 1];
users = ['Max', 'Anna'];

let numbers: [number, number] // [1, -1];

numbers = [5, 6];
numbers = [5, 8, 7];

let user: {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
} = {
  name: 'Max',
  age: 38,
  hobbies: ['sport', 'cooking'], 
  role: {
    description: 'admin',
    id: 5
  }
}

let val: {} = 'It is a string'; // value can not be "undefined" or "null"
