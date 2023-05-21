class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${this.name}`;
    }
}


class ProductDecorator {
    
    constructor(productComponent) {
        this.productComponent = productComponent;
    }
    
    getDetail() {
        return this.productComponent.getDetail();
    }
    
}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail() {
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }
}

// decorator 2 
class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent)
        this.price = price;
    }

    getDetail() {
        return super.getDetail() + ` ${this.price}`;
    }
}

// decorator 3

class HTMLProductDecorator extends ProductDecorator {
    getDetail() {
        return `<h1>Product Info</h1>
                <p>
                    ${super.getDetail()}
                </p>`
    }
}

// execution
// component

const productComponent = new ProductComponent('notebook');
console.log(productComponent.getDetail());


// decorator, one component

const commercialInfoComponent = 
    new CommercialInfoProductDecorator(productComponent, 'MacBook Pro', 'Apple');

    console.log(commercialInfoComponent.getDetail());

// decorator 2 with component

const storeProduct = new StoreProductDecorator(productComponent, 1799);

console.log(storeProduct.getDetail());

// decorator 2 with decorator 1

const product = new StoreProductDecorator(commercialInfoComponent, 1799);

console.log(product.getDetail());

// decorator 3 with decorator 2 with decorator 1

const htmlProductDecorator = new HTMLProductDecorator(product);
document.querySelector('#myDiv').innerHTML = htmlProductDecorator.getDetail();