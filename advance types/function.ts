//////////////////////////////////////
// function overloads

function getLength(val: string): string;
function getLength(val: any[]): number;

function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    return `${val.length} words`;
  }

  return val.length;
}

const numberOfWords = getLength('is this will work?');
const numberOfWords2 = getLength(['Hello', 'Mehedi']);

// TypeScript-এ function overloads মানে হলো — একটি ফাংশনের একাধিক version বা রূপ define করা যায়, যেগুলো বিভিন্ন ধরণের parameter নেয়, কিন্তু একই ফাংশনের নাম থাকে। এটা মূলত TypeScript-এর একটি সুবিধা, যা JavaScript-এ নেই।

// 🎯 কেন এটা দরকার?
// যখন একটি ফাংশন ভিন্ন ভিন্ন input টাইপ অনুযায়ী ভিন্ন আচরণ করবে।

// TypeScript-এ টাইপ safety বজায় রাখতে সাহায্য করে।

// Developer experience উন্নত করে (code completion, IntelliSense ইত্যাদি ভালোভাবে কাজ করে)।
