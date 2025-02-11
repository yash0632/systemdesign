"use strict";
class Bird {
    fly() {
        console.log("Bird fly");
    }
    makeSound() {
        console.log("Bird sound");
    }
}
class Sparrow extends Bird {
    makeSound() {
        console.log("Sparrow Sound");
    }
    fly() {
        console.log("Sparrow flying");
    }
}
class Penguin extends Bird {
    fly() {
        throw new Error('Penguin cannot fly');
    }
    makeSound() {
        console.log('Penguin Sound');
    }
}
function makeBirdFly(bird) {
    bird.fly();
}
makeBirdFly(new Bird());
