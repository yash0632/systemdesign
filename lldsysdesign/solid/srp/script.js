import logMessage from './logger.js';


class CalorieTracker{
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0
    }

    trackCalories(calorieCount){
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories){
            logMessage(`max calories exceeded!`)
        }
    }

}
// single responsibility principle -> only one reason to change 
//1 class has different functions responsibilty which caters to different actors of the system
//the changes in one or more functions do not violate the single responsibility principle till it is used by a single system 
// Clean Code

//Classes adheres to SRP
//As long as the software is easy to change and it is not breaking unwanted changes it is a good system


const calorieTracker = new CalorieTracker(2000);

calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);

