let names: Array<string> = ['max', 'john'];

type DataStore<T> = {
  [key: string]: T;
};

const store: DataStore<string | boolean> = {
  fName: 'Max',
  isAdult: false,
};

function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge(1, 2);
const namesArr = merge('Mehedi', 'Max');
