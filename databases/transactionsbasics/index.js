"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = __importDefault(require("pg"));
const { Client } = pg_1.default;
exports.client = new Client({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'DevPractice18',
    database: 'bankingdb'
});
function createAccount(name, balance) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.client.query('INSERT INTO accounts(name,balance,updated_at) VALUES($1,$2,$3)', [name, balance * 100, new Date()]);
            console.log('Account inserted');
        }
        catch (err) {
            console.log(err);
            process.exit(1);
        }
    });
}
function connectClient(client) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            client.connect();
        }
        catch (err) {
            console.log(err);
            process.exit(1);
        }
    });
}
function createAccountsTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.client.query(`
            begin;
            CREATE TABLE IF NOT EXISTS accounts(
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL CHECK(name ~ '^[A-Za-z]+$'),
                balance integer NOT NULL CHECK(balance > 0),
                created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            commit;
        `);
            console.log('Accounts table created');
        }
        catch (err) {
            console.log(err);
            process.exit(1);
        }
    });
}
function createTransactionsTable(transaction_type_name, transaction_status_name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.client.query(`
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
        catch (err) {
            console.log(err);
            process.exit(1);
        }
    });
}
function createTransfersTable(transaction_status_name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.client.query(`
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
        `);
            console.log('Transfers table created');
        }
        catch (err) {
            console.log(err);
            process.exit(1);
        }
    });
}
function createTables() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //await createTransactionStatusEnum('transaction_status',['pending','failed','completed']);
            //await createTransactionTypeEnum('transaction_type',['deposit','withdrawal','Transfer']);
            //await createAccountsTable();
            //await createTransactionsTable('transaction_type','transaction_status');
            yield createTransfersTable('transaction_status');
        }
        catch (err) {
            console.log(err);
            process.exit(1);
        }
    });
}
function dropquery() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.client.query(`
            DROP TYPE IF EXISTS transaction_status;
            DROP TYPE IF EXISTS transaction_type;
        `);
            console.log('Transaction status enum dropped');
        }
        catch (err) {
            console.log('error in dropquery');
            process.exit(1);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connectClient(exports.client);
            yield createTables();
            //await dropquery();    
            yield exports.client.end();
        }
        catch (err) {
            console.log(err);
            process.exit(1);
        }
        finally {
            console.log('All tasks completed');
        }
    });
}
main();
