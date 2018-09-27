import IEatingBehaviour from './IEatingBehaviour';

// plants eating behaviour
export default class HerbivoreEatingBehaviour extends IEatingBehaviour {
  eat() {
    console.log('I eat plants only, I am peaceful\n\n');
  }
}
