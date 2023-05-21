interface IComponent {
    getDetail(): string;
}

class ProductComponent implements IComponent {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`;
    }

}

// decorator

abstract class ProductDecorator implements IComponent {
    protected component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }

}

// decorator 1

class CommercialInfoProductDecorator extends ProductDecorator {
    private tradename: string;
    private brand: string;

    constructor(component: IComponent, tradename: string, brand: string) {
        super(component);
        this.brand = brand;
        this.tradename = tradename;
    }

    public getDetail(): string {
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }

}

// decorator2

class StoreProductDecorator extends ProductDecorator {
    private price: number;

    constructor(component: IComponent, price: number) {
        super(component);
        this.price = price;
    }

    public getDetail(): string {
        return super.getDetail() + ` ${this.price}`;
    }
}

class HTMLProductDecorator extends ProductDecorator {
    getDetail(): string {
        return `<h1>Product Info</h1>
        <p>
            ${super.getDetail()}
        </p>
        `
    }
}


const productComponent = new ProductComponent('beer');
console.log( productComponent.getDetail())


// decorator 1

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, 'London Porter', "Fuller's");
console.log(commercialInfoProduct.getDetail());


// decorator2

const storeProduct = new StoreProductDecorator(productComponent, 3211);
console.log(storeProduct.getDetail());


// decorator2 with decorator 1

const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 4322);

console.log(storeProduct2.getDetail());

// decorator3 with decorator2 with decorator 1
const htmlProduct = new HTMLProductDecorator(storeProduct2);

console.log(htmlProduct.getDetail());


/**
 * 
 * 
 * <h1>Product Info</h1> Decorator 3
        <p> Decorator 1           | Decorator 2 
            London Porter Fuller's beer 4322
        </p> Decorator 3
 */