class Animal {
  constructor(name) {
    this._name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

const dog = new Dog('doggy');
console.log(dog._name);
