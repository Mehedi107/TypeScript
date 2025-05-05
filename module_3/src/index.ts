// Object Oriented Typescript
class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: string
  ) {}

  detail() {
    console.log(`This is ${this.brand} car.`);
  }
}

const bmw = new Car('BMW', 'Phantom', '2020');
console.log(bmw);
bmw.detail();
