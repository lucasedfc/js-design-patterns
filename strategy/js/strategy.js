/**
 * STRATEGY
The Strategy pattern is useful when you need to dynamically select one of several algorithms to solve a problem at runtime.
It can also be used to encapsulate complex algorithms, eliminate unnecessary conditional statements in the code, and modularize the code.
Each strategy class is responsible for its own implementation logic and is not tightly coupled to other parts of the application.

*/

class SaleContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(amount) {
        return this.strategy.calculate(amount);
    }

}


class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount) {
        return amount + (amount * this.tax);
    }
}

class DiscountSaleStrategy {
    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount) {
        return amount + (amount * this.tax) - this.discount;;
    }
}


class ForeignSaleStrategy {


    getDollarPrice() {
        return 500;
    }

    calculate(amount) {
        return amount * this.getDollarPrice();
    }


}

const regularSale = new RegularSaleStrategy(0.21);
const discountSale = new DiscountSaleStrategy(0.21, 5);
const foreignSale = new ForeignSaleStrategy();

const sale = new SaleContext(regularSale);

console.log(sale.calculate(100));

sale.setStrategy(discountSale);

console.log(sale.calculate(100));

sale.setStrategy(foreignSale);

console.log(sale.calculate(100));
