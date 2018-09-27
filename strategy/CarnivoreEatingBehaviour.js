import IEatingBehaviour from './IEatingBehaviour';

// meat eating behaviour
export default class CarnivoreEatingBehaviour extends IEatingBehaviour {
  eat() {
    console.log('I eat meat\n\n');
  }
}
