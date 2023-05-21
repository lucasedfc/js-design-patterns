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

class Observer {
    constructor(fn) {
        this.fn = fn;
    }

    refresh(data) {
        this.fn(data);
    }
}

const s = new Subject();
const o1 = new Observer(d=> {
    console.log('observer 1', d);
})

const o2 = new Observer(d => {
    document.querySelector('#div1').innerHTML = d;
});

const o3 = new Observer(d => {
    document.querySelector('#div2').innerHTML = d.split("").reverse().join("");
});

s.subscribe(o1);
s.subscribe(o2);
s.subscribe(o3);


s.unsubscribe(o1);
function change() {
    s.notify(document.querySelector('#myText').value)
}