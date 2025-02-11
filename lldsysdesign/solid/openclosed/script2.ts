import { Question } from "./script";

class BooleanQuestion{
    description:string
    constructor(description:string){
        this.description = description;
    }

    printQuestionChoices(){
        console.log(`1. True`);
        console.log(`2. False`);
    }
}

class MultipleChoiceQuestion {
    description: string
    options: string[]
    constructor(description:string,options:string[]){
        this.description = description;
        this.options = options;
    }

    printQuestionsChoices(){
        this.options.forEach((option,index)=>{
            console.log(`${index + 1}. ${option}`)
        })
    }
}


class TextQuestions{
    description: string
    constructor(description:string){
        this.description = description;
    }

    printQuestionChoices(){
        console.log(`Answer:__________________________________________`);
    }
}

class RangeQuestions{
    description: string
    constructor(description:string){
        this.description = description;
    }

    printQuestionChoices(){
        console.log('Minimum: ___________');
        console.log('Maximum: ___________');
    }
}


function printQues2(questions:Question[]){
    questions.forEach((question)=>{
        
    })
}