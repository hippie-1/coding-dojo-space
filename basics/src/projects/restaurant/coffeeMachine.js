export class Coffee {
    constructor () {}

    makingCoffee () {
        this.#placingCup();
        this.#grindingCoffee();
        this.#brewingWater();
        this.#brewingCoffee();
        this._addingFilling();
        this.#servingCoffee();
        this.#takingTheCup();
    }

    #placingCup() {
        console.log('Placing a cup under the coffe machine');
    }

    #grindingCoffee() {
        console.log('Now the coffebeans are griding.')
    }
    #brewingWater() {
        console.log('Now water is brewing.')
    }
    #brewingCoffee() {
        console.log('Now the coffe is brewing.')
    }
    #servingCoffee() {
        console.log('Coffee is ready, please remove your cup.')
        console.log('Take a cookie and water, if you want.')
    }
    #takingTheCup() {
        console.log('Tray is empty. Ready for a new order.')
    }
}

export class Espresso extends Coffee {
    constructor() {
        super();
    }
    _addingFilling() {}
}
export class Cappuccino extends Coffee {
    constructor() {
        super();
    }
    _addingFilling() {
        console.log('Adding milkfoam');
    }
    
}
export class IrishCoffee extends Coffee {
    constructor() {
        super();
    }
    _addingFilling() {
        console.log("Adding Bailey's");
    }
    
}
export class Mocchaccino extends Coffee {
    constructor() {
        super();
    }
    _addingFilling() {
        console.log("Adding cocoa");
    }

}

// let irishCoffee = new IrishCoffee();
// irishCoffee.makingCoffee();
let espresso = new Espresso();
espresso.makingCoffee();
