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

let data: Record<string, string | number>;

data = {
  entry1: 1,
  entry2: '2'
}

enum Role {
  Admin, // 0
  Editor, // 1
  Guest // 2
}

let role: Role = 0;

role = Role.Guest