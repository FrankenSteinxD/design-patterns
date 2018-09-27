import Dinosaur from './Dinosaur';
import CarnivoreDinosaur from './CarnivoreDinosaur';
import HerbivoreDinosaur from './HerbivoreDinosaur';
import HerbivoreEatingBehaviour from './HerbivoreEatingBehaviour';

const dino = new Dinosaur('Velociraptor');
dino.eat();

const alioramus = new CarnivoreDinosaur('Alioramus');
alioramus.eat();

const albertosaurus = new HerbivoreDinosaur('Albertosaurus');
albertosaurus.eat();

console.log('now converting Velociraptor to a herbivore dinosaur to spread peace');
dino.setEatingBehaviour(new HerbivoreEatingBehaviour());
console.log('After converting it:\n');
dino.eat();