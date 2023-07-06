class CoffeeType {
    constructor(options) {
        this.name = options.name;
        this.coffee = options.coffee;
        this.water = options.water;
        this.milk = options.milk;
        this.syrup = options.syrup;
        this.havefoam = options.havefoam;
    }
}

const espresso = new CoffeeType ({
       name: espresso,
       coffee: 50,
       water: 0,
       milk: 0,
       syrup: 0,
       havefoam: false
})

const cappuccino = new CoffeeType ({
    name: cappuccino,
    coffee: 50,
    water: 0,
    milk: 200,
    syrup: 0,
    havefoam: true
})

const latte = new CoffeeType ({
    name: latte,
    coffee: 70,
    water: 30,
    milk: 200,
    syrup: 0,
    havefoam: true
})

const raf = new CoffeeType ({
    name: raf,
    coffee: 50,
    water: 0,
    milk: 300,
    syrup: 10,
    havefoam: true
})

const russiano = new CoffeeType ({
    name: russiano,
    coffee: 150,
    water: 150,
    milk: 0,
    syrup: 0,
    havefoam: false
})