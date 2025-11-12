console.log('Hello world!')

let userName: string;

userName = 'Max';

let userAge = 18;

function sum (a: number, b = 5) {
  console.log(a+b);
}

sum(10)
sum(10, 10)
sum("10")