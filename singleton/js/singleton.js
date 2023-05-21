class Singleton {


    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        console.log('Constructor log');
        this.random = Math.random();
        if (Singleton.instance) {
            console.log('Instance exists');
            return Singleton.instance;
        }

        console.log('Instance doesnt exists');

        Singleton.instance = this;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1.random);
console.log(instance2.random);
console.log(instance1 === instance2);


// problem with javascript
Singleton.instance = null;
/**
 * 
Singleton.instance = false;
 * 
 */
const instance3 = new Singleton();
console.log(instance3.random);
console.log(instance2 === instance3);