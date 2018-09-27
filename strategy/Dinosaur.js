import OmnivoreEatingBehaviour from './OmnivoreEatingBehaviour';

export default class Dinosaur {
  constructor(name) {
    // default eating behaviour to eating plants and meat
    this.eatingBehavior = new OmnivoreEatingBehaviour(); // IEatingBehaviour

    this.name = name;
  }

  eat() {
    console.log(`My name is ${this.name}:`);
    this.eatingBehavior.eat();
  }

  setEatingBehaviour(eatingBehavior) {
    this.eatingBehavior = eatingBehavior;
  }
}
