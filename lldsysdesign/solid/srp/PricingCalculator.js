"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingCalculator = void 0;
class PricingCalculator {
    calculatePricing(products) {
        return products.reduce((total, product) => total + product.price, 0);
    }
}
exports.PricingCalculator = PricingCalculator;
