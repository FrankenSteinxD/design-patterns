import IObserver from './IObserver';

export default class Observer extends IObserver {
  update(newValue, event) {
    console.log(`${event} was updated with value ${newValue.toString()}`);
  }
}