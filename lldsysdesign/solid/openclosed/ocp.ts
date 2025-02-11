//Open-Closed Principle
//Open to extensions Closed to Modifications in functions using dependency injection

interface IPaymentProcessor{
    processPayment(amount: number): void;
}

class PaymentProcessor{

    processor : IPaymentProcessor

    constructor(paymentProcessor:IPaymentProcessor){
        this.processor = paymentProcessor;
    }


    processPayment(amount: number){
        this.processor.processPayment(amount);
    }
}

class CreditCardProcessor implements IPaymentProcessor{
    processPayment(amount: number){
        console.log(`Processing payment with credit card: ${amount}`);    
    }
}

class PaypalProcessor implements IPaymentProcessor{
    processPayment(amount: number){
        console.log(`Processing payment with paypal: ${amount}`);    
    }
}


const creditCardProcessor = new CreditCardProcessor();
const paypalProcessor = new PaypalProcessor();

const processor = new PaymentProcessor(paypalProcessor);


processor.processPayment(100);

//