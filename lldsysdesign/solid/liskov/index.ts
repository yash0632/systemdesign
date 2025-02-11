class BaseBird{
    makeSound(){};
}


class Bird extends BaseBird{
    fly(){
        console.log("Bird fly");
    }

    makeSound(){
        console.log("Bird sound");
    }
}

class Sparrow extends Bird{
    

    fly(){
        console.log("Sparrow flying");
    }

    makeSound(){
        console.log("Sparrow sound");
    }

}

class Penguin extends BaseBird{
    

    makeSound(){
        console.log('Penguin Sound');
    }
}


function makeBirdFly(bird : Bird){
    bird.fly();
}

makeBirdFly(new Sparrow());
//Liskov -> a parent class should be replacesable by its child class

