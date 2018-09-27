import IEatingBehaviour from './IeatingBehaviour';

// plants and meat eating behaviour
export default class OmnivoreEatingBehaviour extends IEatingBehaviour {
  eat() {
    console.log('I eat plants, and meat :D\n\n');
  }
}