const inputEl = document.querySelector('#user_name') as HTMLInputElement | null; // "!" means the value will not be null.

// if(!inputEl) {
//   throw new Error('User name not found');
// }

console.log(inputEl?.value);