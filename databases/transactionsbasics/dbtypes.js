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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionTypeEnum = createTransactionTypeEnum;
exports.createTransactionStatusEnum = createTransactionStatusEnum;
const index_1 = require("./index");
function createTransactionTypeEnum(transaction_type_name, typesEnums) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const formattedTypesEnum = typesEnums.map((type) => `'${type}'`).join(',');
            yield index_1.client.query(`
            
            CREATE TYPE ${transaction_type_name} AS ENUM (${formattedTypesEnum});
            
        `);
            console.log('Transaction type enum created');
        }
        catch (err) {
            console.log(err);
            console.log('error in createTransactionTypesEnum');
            process.exit(1);
        }
    });
}
function createTransactionStatusEnum(transaction_status_name, statusEnums) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let formattedStatusEnums = statusEnums.map((status) => `'${status}'`).join(',');
            yield index_1.client.query(`
            
            CREATE TYPE ${transaction_status_name} AS ENUM (${formattedStatusEnums});
            
        `);
            console.log('Transaction status enum created');
        }
        catch (err) {
            console.log(err);
            console.log('error in createTransactionStatusEnum');
            process.exit(1);
        }
    });
}
