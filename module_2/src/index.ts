// type assertion
let text: any;

text = 'string';
text as string;

text = 123;
text as number;

// interface
interface withRole {
  role: string;
  hours: number;
}

interface withRoleExtend extends withRole {
  company: string;
}

const worker: withRoleExtend = {
  role: 'Admin',
  hours: 5,
  company: 'Concord',
};
// tsnd --respawn src/index.ts
