interface IStrategy {
    login(user: string, password: string): boolean,
}

class LoginContext {
    private strategy: IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements IStrategy {
    login(user: string, password: string): boolean {
        console.log('Trying logging with database');
        
        if (user === 'admin' && password === 'pwd123') {
            return true;
        }

        return false;
    }
}

class LoginServiceStrategy implements IStrategy {
    login(user: string, password: string): boolean {
        console.log('Trying logging with external service');
        
        if (user === 'admin' && password === 'pwd123') {
            return true;
        }

        return false;
    }
}

class LoginWithGoogleStrategy implements IStrategy {
    login(user: string, password: string): boolean {
        console.log('Trying logging with Google');
        
        if (user === 'admin' && password === 'pwd123') {
            return true;
        }

        return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy);
console.log(auth.login("admin","pwd123"));

auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login("admin","pwd123"));

auth.setStrategy(new LoginWithGoogleStrategy());
console.log(auth.login("admin","pwd123"));
