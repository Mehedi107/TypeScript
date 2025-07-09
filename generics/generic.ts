let names: Array<string> = ['max', 'john'];

type DataStore<T> = {
  [key: string]: T;
};

const store: DataStore<string | boolean> = {
  fName: 'Max',
  isAdult: false,
};
