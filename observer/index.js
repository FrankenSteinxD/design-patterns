import WaterTank from './WaterTank';
import WaterLevelAlert from './WaterLevelAlert';

console.log(`
===============================
=          Observer           =
===============================
`);

const tank = new WaterTank(100);

const alert = new WaterLevelAlert();
tank.subscribe('level', alert);

tank.setLevel(85);
tank.setLevel(55);
tank.setLevel(10);

console.log('Unsubscribing the water level alert\n');
tank.unsubscribe('level', alert);

console.log('Changing water level');
tank.setLevel(100);
