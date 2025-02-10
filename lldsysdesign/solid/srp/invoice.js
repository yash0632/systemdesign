"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    generateInvoice(products, amount) {
        console.log(`
Invoice Data: ${new Date().toString()}
---------------------------------
Product Name\tPrice
        `);
        products.forEach((product) => {
            console.log(`
${product.name}\t\t${product.price}
            `);
        });
        console.log(`
-------------------------
            `);
        console.log(`Total: ${amount}`);
    }
}
exports.Invoice = Invoice;
