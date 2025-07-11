let names: Array<string> = ['max', 'john'];

type DataStore<T> = {
  [key: string]: T;
};

const store: DataStore<string | boolean> = {
  fName: 'Max',
  isAdult: false,
};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge(1, 2);
const namesArr = merge('Mehedi', 'Max');
const mixValue = merge(5, 'Mehedi');

// generic & constraint
function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const obj = mergeObj({ fName: 'Max' }, { lName: 'Amini' });

console.log(obj);
