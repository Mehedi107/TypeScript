const inputEl = document.querySelector('#user_name');

if(!inputEl) {
  throw new Error('User name not found');
}

console.log(inputEl.value);