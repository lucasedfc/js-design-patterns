class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach((e) => {
            e.refresh(data);
        })
    }
}

class ItemsSubject extends Subject {
    constructor() {
        super();
        this.data = [];
    }

    add(item) {
        this.data.push(item);
        this.notify(this.data);
    }
}

class HtmlElementObserver {
    constructor(element) {
        this.element = element;
    }

    refresh(data) {
        this.element.innerHTML = data.reduce((acum, elem) => {
            return acum + `<p>
                            ${elem}
                        </p>`
        }, "")
    }
}

class Observer {
    constructor(fn) {
        this.fn = fn;
    }

    refresh(data) {
        this.fn(data);
    }
}

const items = new ItemsSubject();
const div1Observer = new HtmlElementObserver(document.querySelector('#div1'));
const div2Observer = new HtmlElementObserver(document.querySelector('#div2'));

const div3Observer = new Observer((data) => {
    document.querySelector('#div3').innerHTML = data.length;
})

items.subscribe(div1Observer);
items.subscribe(div2Observer);
items.subscribe(div3Observer);


function add() {
    const name = document.querySelector('#txtName').value;
    items.add(name);
}