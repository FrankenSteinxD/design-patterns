import Observer from './Observer';

export default class WaterLevelAlert extends Observer {
  constructor() {
    super();
  }

  update(level) {
    if (level >= 80) {
      console.log(`Water level (${level}%) is awesome.\n`);
    } else if (level >= 40) {
      console.log(`Water level (${level}%) is not bad.\n`);
    } else {
      console.log(`Water level (${level}%) is very bad, you need to re-fill the tank.\n`);
    }
  }
}