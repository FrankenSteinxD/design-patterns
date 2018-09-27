import IObservable from './IObservable';

export default class Observable extends IObservable {
  constructor() {
    super();
    // events - observers map
    this.observers = {};
  }

  subscribe(event, observer) {
    if (!Array.isArray(this.observers[event])) {
      this.observers[event] = new Array();
    }
    this.observers[event].push(observer);
  }

  unsubscribe(event, observer) {
    this.observers[event] = this.observers[event].filter(oldObserver => oldObserver !== observer) || [];
  }

  notify(event, newValue) {
    this.observers[event].forEach((observer) => {
      observer.update(newValue, event);
    });
  }
}