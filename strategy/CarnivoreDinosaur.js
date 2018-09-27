import Dinosaur from './Dinosaur';
import CarnivoreEatingBehaviour from './CarnivoreEatingBehaviour';

// a dinosaur that eats meat
export default class CarnivoreDinosaur extends Dinosaur {
  constructor(name) {
    super(name);
    this.setEatingBehaviour(new CarnivoreEatingBehaviour())
  }
}