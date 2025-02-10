"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.Order = void 0;
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
    removeProduct(productId) {
        const newProducts = this.products.filter((product) => product.productId != productId);
        this.products = newProducts;
    }
    processPayment() {
        console.log(`Processing payment...`);
        console.log('Payment processed successfully!');
        console.log('Added to accounting system!');
        console.log('Email sent to customer!');
    }
    sortProductsByPriceAndDivisibleByTwo() {
        return this.products
            .filter(product => product.price % 2 === 0)
            .sort((a, b) => b.price - a.price);
    }
}
exports.Order = Order;
class Product {
    constructor(productId, name, price) {
        this.name = name;
        this.price = price;
        this.productId = productId;
    }
}
exports.Product = Product;
