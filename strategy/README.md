# Strategy Pattern
In this example we want to create a dinosaur class, but dinosaurs follow different eating behaviours, Cornivore dinosaurs eat meat, Herbivore dinosaurs eat plants, Omnivore ones eat both plants and meat.

### UML Diagram
![Strategy Pattern UML Diagram](https://imgur.com/M61Nvwx.jpg)

### Example notes
In this example I created an extra two different classes, `CornivoreDinosaur` and `HerbivoreDinosaur`, they extend the `Dinosaur` class but they change the eating behaviour in the constructor to the propper one.

You can delete them and create dinosaurs from the father class `Dinosaur` directly and then set the object's eating behaviour, so

```javascript
const cornivore = new CornivoreDinosaur('Sam');
```

is same as

```javascript
const dino = new Dinosaur('Sam');
dino.setEatingBehaviour(new CornivoreEatingBehaviour());
```

### For Practicing
Implement a flying method, some dinosaurs can fly, some can't.