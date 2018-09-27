import Observable from './Observable';

export default class WaterTank extends Observable {
  constructor(initialLevel) {
    super();
    this.level = initialLevel;
  }

  setLevel(level) {
    this.level = level;
    this.notify('level', this.level);
  }
}