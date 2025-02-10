"use strict";
//Single Responsibility Cycle
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("./order");
const PricingCalculator_1 = require("./PricingCalculator");
const invoice_1 = require("./invoice");
const product1 = new order_1.Product('1', 'Laptop', 500);
const product2 = new order_1.Product('2', 'Iphone', 200);
const order = new order_1.Order();
order.addProduct(product1);
order.addProduct(product2);
const pricingCalculator = new PricingCalculator_1.PricingCalculator();
const total = pricingCalculator.calculatePricing(order.getProducts());
console.log(`Total: ${total}`);
const invoice = new invoice_1.Invoice();
invoice.generateInvoice(order.getProducts(), total);
order.processPayment();
