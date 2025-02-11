export interface Question{
    type:string,
    description:string,
    options?:string[]
}

export const questions:Question[] = [
    {
        type:'boolean',
        description:'This video is useful'
    },
    {
        type:'tick',
        description:"What is the best programming language right now?",
        options:["JavaScript","TypeScript","Python","Java","C++"]
    },
    {
        type:'Text',
        description:"How to get a job at Google?"
    },
    {
        type:'range',
        description:"what is the speed of the internet?",
    }
]


function printQuiz(questions:Question[]){
    questions.forEach((question)=>{
        console.log(question.description);
        switch(question.type){
            case 'boolean':
                console.log(`-> True`)
                console.log(`-> False`)
                break;
            case 'tick':
                if(question.options){
                    question.options.forEach((option,index)=>{
                        console.log(`${index+1}. ${option}`)
                    })
                }
                break;
            
            case 'Text':
                
                console.log(`Answer:__________________________________________`)
                break;

            case 'range':
                console.log('Minimum: ___________')
                console.log('Maximum: ___________')
                break;

            default:
                break;
            
        }
    })
}

//switch case function always break open closed principle

printQuiz(questions);