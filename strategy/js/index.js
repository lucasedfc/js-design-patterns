const data = [
    {
        name: 'Pity Martinez',
        country: 'Argentina',
        info: 'Crazy man',
        img: 'https://media.tycsports.com/files/2020/12/09/161063/a-2-anos-del-gol-del-pity-martinez-a-boca-en-madrie.jpg'

    },
    {
        name: 'Juan Fernando Quintero',
        country: 'Colombia',
        info: 'Quinteroooooooooo',
        img: 'https://www.futbolred.com/files/article_main/uploads/2018/12/10/5c0eea5e5a2eb.jpeg'
    },
    {
        name: 'Lucas Pratto',
        country: 'Argentina',
        info: 'Oso',
        img: 'https://www.clarin.com/img/2019/08/20/tdNOnFXmG_1256x620__1.jpg'

    },
]

class InfoContext {

    constructor(strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((acum, i) => {
            return acum + `
                <div>
                    <h2>${i.name}</h2>
                    <p>${i.country}</p>
                </div>
            <hr>`
        }, "")
    }
}

class DetailedListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((acum, i) => {
            return acum + `
                <div>
                    <h2>${i.name}</h2>
                    <p>${i.country}</p>
                    <p>${i.info}</p>
                </div>
            <hr>`
        }, "")
    }
}

class ListWithImageStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((acum, i) => {
            return acum + `
                <div>
                    <h2>${i.name}</h2>
                    <img width="250px" src="${i.img}">
                </div>
            <hr>`
        }, "")
    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(),
    new ListWithImageStrategy()
];

const info = new InfoContext(new ListStrategy(), data, document.querySelector('#content'));

info.show();

document.querySelector('#slcOptions').addEventListener('change', (event) => {
    const option = event.target.value;
    console.log(option);
    info.setStrategy(strategies[option]);
    info.show();
});