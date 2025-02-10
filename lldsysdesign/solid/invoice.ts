import { Product } from "./order";

export class Invoice{
    generateInvoice(products:Product[],amount:number){
        console.log(`
Invoice Data: ${new Date().toString()}
---------------------------------
Product Name\tPrice
        `);

        products.forEach((product)=>{
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