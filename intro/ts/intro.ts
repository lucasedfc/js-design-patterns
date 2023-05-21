/**
 * 
 * SINGLETON
 * 
 * The Singleton pattern is useful when you want to ensure that only one instance of a class is created and that it can be easily accessed throughout the application.
It can also be used to control access to shared resources, such as a database connection, to prevent conflicts or data corruption.
The Singleton pattern is implemented by defining a class with a private constructor and a static method that returns the single instance of the class. This method ensures that only one instance is created and that it can be easily accessed by other parts of the application.
 */

class Drink {
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const drink1 = new Drink('water with ts');

console.log(drink1.getName());

// interface
interface Product {
    price: number;
    getPrice(): string
}


// inheritance

class Beer extends Drink implements Product {
    private type: string;
    public price: number;

    constructor(name: string, type: string, price: number) {
            super(name);
            this.type = type;
            this.price = price;
    }

    getPrice(): string {
        return `$${this.price}` 
    }

    getType(): string {
        return this.type;
    }
}

class Snack implements Product {

    public price: number;
    public name: string;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return `The price of this snack is: $${this.price}`;
    }
}

const beer = new Beer('imperial', 'ipa', 8);

console.log(beer.getType().toUpperCase());

const products: Product[] = [
    new Beer('Corona', 'Lager', 10),
    new Snack('chips', 4 ),
    new Beer('Heineken', 'Lager', 7),
    new Snack('Cheetos', 5 ),
];


function getPrices(items: Product[]) {
    for (const item of items) {
        console.log(item.getPrice());
        
    }
}

getPrices(products);