
export class Order{
    products : Product[] = [];

    addProduct(product: Product){
        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }

    removeProduct(productId: string){
        const newProducts = this.products.filter((product:Product)=> 
            product.productId != productId
        );
        this.products = newProducts;
    }

    

    

    

    
}

export class Product{
    name : string;
    price : number;
    productId:string;

    constructor(productId:string,name:string,price:number){
        this.name = name;
        this.price = price;
        this.productId = productId;
    }
}

