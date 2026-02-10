class Animal {
  constructor(public name: string, public species: string, public sound: string) {}

  makeSound() {
    console.log(`The animal name is ${this.name} and it's sound is ${this.sound}`);
  }
}

const dog = new Animal('Ben', 'dog', 'Bark')
const cat = new Animal('Puchi', 'cat', 'mew')

cat.makeSound()