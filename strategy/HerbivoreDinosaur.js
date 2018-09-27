import Dinosaur from './Dinosaur';
import HerbivoreEatingBehaviour from './HerbivoreEatingBehaviour';

// a dinosaur that eats plants only
export default class HerbivoreDinosaur extends Dinosaur {
  constructor(name) {
    super(name);
    this.setEatingBehaviour(new HerbivoreEatingBehaviour());
  }
}