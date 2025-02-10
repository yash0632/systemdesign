reat; //Single Responsibility Cycle

import { Product, Order } from "./order";
import { PricingCalculator } from "./PricingCalculator";
import { Invoice } from "./invoice";
import { PaymentProcessor } from "./ProcessPayment";

const product1 = new Product("1", "Laptop", 500);
const product2 = new Product("2", "Iphone", 200);

const order = new Order();

order.addProduct(product1);
order.addProduct(product2);

const pricingCalculator = new PricingCalculator();
const total = pricingCalculator.calculatePricing(order.getProducts());

console.log(`Total: ${total}`);

const invoice = new Invoice();
invoice.generateInvoice(order.getProducts(), total);
const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment();
