class Recipe {
    constructor(options) {
        this.name = options.name;
        this.coffee = options.coffee;
        this.water = options.water;
        this.milk = options.milk;
        this.syrup = options.syrup;
        this.havefoam = options.havefoam;
    }
}

class Ingridients {
    constructor(max,name) {
        this.name = name,
        this.min = 0,
        this.max = max,
        this.current = 0
    }

    addIngridient(payload){//параметр берется извне
        this.current += payload
    }

    checkIngridients(count){
        if(this.current <= count) {
            console.log(`недостаточно ингридиента ${this.name}`)
            return false;
        }
        return true; 
    }

    // должна быть выполнена только после checkIngridients
    decreaseIngridient(count){
        this.current -= count;
    }
}

class CoffeeMachine {
    constructor()
    {
        this.powerOn = false;
        this.recipes = []; // ==  new Array()
        this.coffeeBottle = new Ingridients(1000, "КОФЕ");
        this.waterBottle = new Ingridients(5000, "ВОДА");
        this.milkBottle = new Ingridients(1000, "МОЛОКО");
        this.syrupBottle = new Ingridients(500, "СИРОП");
    }

    switchPower(){
        this.powerOn = !this.powerOn; //метод вкл/выкл переключением.
    }

    /**
     * @param {Recipe} payload - рецепт
     */
    addRecipe(payload){
        this.recipes.push(payload) //метод добавления эл-та в массив
    }

    // recipeName = Recipe.name
    chooseRecipe(recipeName){
        if (this.recipes.length === 0){
            return console.log('Error - нет рецептов'); //break
        }   

        if (!this.powerOn){
            return console.log('нет питания'); //break
        }
        /**
         * currentRecipe примет значение целого рецепта, например: "new Recipe ({
    name: "cappuccino",
    coffee: 50,
    water: 0,
    milk: 200,
    syrup: 0,
    havefoam: true
})"
         */
        const currentRecipe = this.recipes.find(
            (value) => value.name === recipeName
        )

        if (!currentRecipe){
            return console.log('нет рецепта')
        };

        const coffeeIsEnougth = this.coffeeBottle.checkIngridients(currentRecipe.coffee);
        const waterIsEnougth = this.waterBottle.checkIngridients(currentRecipe.water);
        const milkIsEnought = this.milkBottle.checkIngridients(currentRecipe.milk);
        const syrupIsEnought = this.syrupBottle.checkIngridients(currentRecipe.syrup);

        if(!coffeeIsEnougth || !waterIsEnougth || !milkIsEnought || !syrupIsEnought) {
            return
        }

        this.coffeeBottle.decreaseIngridient(currentRecipe.coffee);
        this.waterBottle.decreaseIngridient(currentRecipe.water);
        this.milkBottle.decreaseIngridient(currentRecipe.milk);
        this.syrupBottle.decreaseIngridient(currentRecipe.syrup);


        console.log(`Ваш ${currentRecipe.name} готов`);
    }

    addIngridients(milk, water, syrup, coffee){
        this.coffeeBottle.addIngridient(coffee)
        this.waterBottle.addIngridient(water)
        this.milkBottle.addIngridient(milk)
        this.syrupBottle.addIngridient(syrup)
    }
}

`============================================`

const c = new CoffeeMachine();
c.addRecipe(new Recipe ({
    name: "espresso",
    coffee: 50,
    water: 0,
    milk: 0,
    syrup: 0,
    havefoam: false
}));


c.addRecipe(new Recipe ({
    name: "raf",
    coffee: 50,
    water: 0,
    milk: 300,
    syrup: 10,
    havefoam: true
}));

c.addRecipe(new Recipe ({
    name: "cappuccino",
    coffee: 50,
    water: 0,
    milk: 200,
    syrup: 0,
    havefoam: true
}));

c.addIngridients(1000,1000,1000,1000);
c.switchPower(); 
c.chooseRecipe('ra');




// console.log(c);
// c.switchPower(); 
// console.log(c);

























// const espresso = 

// const cappuccino = 

// const latte = new Recipe ({
//     name: "latte",
//     coffee: 70,
//     water: 30,
//     milk: 200,
//     syrup: 0,
//     havefoam: true
// })

// const raf = 

// const russiano = new Recipe ({
//     name: "russiano",
//     coffee: 150,
//     water: 150,
//     milk: 0,
//     syrup: 0,
//     havefoam: false
// })