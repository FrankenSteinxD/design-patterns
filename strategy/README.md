# Strategy Pattern
In this example we want to create a dinosaur class, but dinosaurs follows different eating behaviours, Cornivore dinosaurs eat meat, Herbrivore dinosaurs eat plants, Omnivore ones eat both plants and meat.

### UML Diagram
![Strategy Pattern UML Diagram](https://imgur.com/M61Nvwx.jpg)

### Example notes
In this example I created an extra two different classed, `CarnivoreDinosaur` and `HerbivoreDinosaur`, they extends the `Dinosaur` but they change the eating behaviour in the constructor to the propper one.

You can delete them and create dinosaurs from the father class `Dinosaur` directly and then set the object's eating behaviour.