class Customer extends CustomerUser {
    // Remove getAccessLevel since CustomerUser doesn't have it
    // This prevents the LSP violation
    getRole(){
        console.log("Customer Role");
    }
}

// This will now cause a TypeScript error, which is correct
// getUserAccesslevel(new Customer());