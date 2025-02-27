import pg from 'pg'
import {createTransactionStatusEnum,createTransactionTypeEnum} from './dbtypes'


const {Client} = pg
export const client = new Client({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'DevPractice18',
    database: 'bankingdb'
})

async function createAccount(name:string,balance:number){
    try{
        await client.query('INSERT INTO accounts(name,balance,updated_at) VALUES($1,$2,$3)',[name,balance * 100,new Date()]);
        console.log('Account inserted');
    }
    catch(err : any){
        console.log(err);
        process.exit(1);
    }
}


async function beginTransaction(){
    try{
        await client.query()
    }
    catch(err){

    }
    
}


async function connectClient(client:pg.Client){
    try{
        client.connect();
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

async function createAccountsTable(){
    try{
        
        await client.query(`
            begin;
            CREATE TABLE IF NOT EXISTS accounts(
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL CHECK(name ~ '^[A-Za-z]+$'),
                balance integer NOT NULL CHECK(balance > 0),
                created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            commit;
        `)
        console.log('Accounts table created');
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
    
}

async function createTransactionsTable(transaction_type_name:string,transaction_status_name:string){
    try{
        await client.query(`
            begin;
            CREATE TABLE IF NOT EXISTS transactions(
                id SERIAL PRIMARY KEY,
                account_id integer REFERENCES accounts(id),
                amount integer NOT NULL CHECK(amount > 0),
                type ${transaction_type_name} NOT NULL,
                status ${transaction_status_name} NOT NULL,
                updated_at TIMESTAMPTZ NOT NULL 
            );
            commit;
        `);
        console.log('Transactions table created');
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}


async function createTransfersTable(transaction_status_name:string){
    try{
        await client.query(`
            begin;
            CREATE TABLE IF NOT EXISTS transfers(
                id SERIAL PRIMARY KEY,
                from_account_id integer REFERENCES accounts(id),
                to_account_id integer REFERENCES accounts(id),
                amount integer NOT NULL CHECK(amount > 0),
                status ${transaction_status_name} NOT NULL,
                updated_at TIMESTAMPTZ NOT NULL
            );
            commit;
        `)
        console.log('Transfers table created');
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

async function createTables(){
    try{
        await createTransactionStatusEnum('transaction_status',['pending','failed','completed']);
        await createTransactionTypeEnum('transaction_type',['deposit','withdrawal','Transfer']);
        await createAccountsTable();
        await createTransactionsTable('transaction_type','transaction_status');
        await createTransfersTable('transaction_status');
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
async function dropquery(){
    try{
        await client.query(`
            DROP TYPE IF EXISTS transaction_status;
            DROP TYPE IF EXISTS transaction_type;
        `)
        console.log('Transaction status enum dropped');
    }
    catch(err){
        console.log('error in dropquery');
        process.exit(1);
    }
}

async function main(){
    try{
        await connectClient(client);
        //await createTables();
        //await dropquery();    
        
        await client.end();
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
    finally{
        console.log('All tasks completed');
    }
}

main();