class SingletonTS {

    private static instance: SingletonTS;
    public random: number;

    private constructor() {
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS {
        if(!this.instance) {
            this.instance = new SingletonTS();
        }

        return this.instance;
    }

}

/***
 * 
 * 
 When you can type your instance propertie you can avoid this can of assignment
SingletonTS.instance = null

With a private constructor you cant avoid the new instance
const singletonTs = new SingletonTS();

 */

const singleton = SingletonTS.getInstance();
const singletonTwo = SingletonTS.getInstance();
console.log(singleton);
console.log(singletonTwo);
console.log(singleton === singletonTwo);

