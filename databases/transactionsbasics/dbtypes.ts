import {client} from './index';

export async function createTransactionTypeEnum(transaction_type_name : string,typesEnums:string[]){
    try{
        
        const formattedTypesEnum = typesEnums.map((type) => `'${type}'`).join(',')
        await client.query(`
            
            CREATE TYPE ${transaction_type_name} AS ENUM (${formattedTypesEnum});
            
        `)
        console.log('Transaction type enum created');
    }
    catch(err){
        console.log(err);
        console.log('error in createTransactionTypesEnum');
        process.exit(1);
    }
}

export async function createTransactionStatusEnum(transaction_status_name : string,statusEnums:string[]){
    try{
        
        let formattedStatusEnums = statusEnums.map((status) => `'${status}'`).join(',');
        
        await client.query(`
            
            CREATE TYPE ${transaction_status_name} AS ENUM (${formattedStatusEnums});
            
        `);
        console.log('Transaction status enum created');
    }
    catch(err){
        console.log(err);
        console.log('error in createTransactionStatusEnum');
        process.exit(1);
    }
}