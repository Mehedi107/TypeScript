type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};

//...

store.id = 5;
store.ok = false;
store.name = 'max';

//////////////////////////////////////////////
// Constant type

const role = ['admin', 'user', 'guest'] as const;
role.push('max');
