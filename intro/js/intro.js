// first order function
function sum(a, b) {
    return a + b;
}

console.log(sum(3, 4));

// higher order function
function operation(fn, a, b) {
    return (fn(a, b))
}

console.log(operation(sum, 5, 11));

// arrow function
const resp = operation((a, b) => a * b, 5, 5);
console.log(resp);


//foreach inmutable

const names = ['jim', 'angela', 'toby'];

names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));
console.log(names);
names.sort(); // mutable

console.log(names);

// map mutable

const namesUpper = names.map((n) => n.toUpperCase());

console.log(namesUpper);

// reduce - accumulation

const numbers = [5, 4, 7, 1, 10];

/**
 const total = numbers.reduce((acum, number) => {
     return acum + number;
 }, 0);
**/
 const total = numbers.reduce((acum, number) => acum + number, 0);

console.log(total);


// POO
// Class

class Drink {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return `The name of the drink is ${this.name}`;
    }
    
}

// functional

function Drink2(name) {
    this.name = name;
    this.getName = function() {
        return `The name of the drink is ${this.name}`;        
    }
}

const drink = new Drink('water');

console.log(drink.getName());

const drink2 = new Drink2('soda');

console.log(drink2.getName());


// inheritance

class Beer extends Drink {
    constructor(name, type) {
        super(name);
        this.type = type;
    }

    getName() {
        return super.getName() + ' beer';
    }
}

const beer = new Beer('imperial', 'ipa');
console.log(beer.getName());