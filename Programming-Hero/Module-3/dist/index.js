"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The animal name is ${this.name} and it's sound is ${this.sound}`);
    }
}
const dog = new Animal('Ben', 'dog', 'Bark');
const cat = new Animal('Puchi', 'cat', 'mew');
cat.makeSound();
