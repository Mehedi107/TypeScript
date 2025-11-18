// Function return type
function add(a: number, b: number): number {
  return a + b;
}

// Void types (means it returns nothing)
function log(message: string): void {
  console.log(message);
}

// "Never" types (means it will not return anything)
function logAndThrow(message: string) {
  console.log(message);
  throw new Error(message);
}