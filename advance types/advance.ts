type DataStore = {
  [prop: string]: number | boolean;
};

let store: DataStore = {};

// Record type example
// let store2: Record<string, number | boolean>;

//...

store.id = 5;
store.ok = false;
store.name = 'max';

//////////////////////////////////////////////
// Constant type

const role = ['admin', 'user', 'guest'] as const;
role.push('max');
