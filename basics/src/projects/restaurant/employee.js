import { sleepAsync } from '../../util/BasicFunctions.js';
import { Config } from '../../util/Config.js';
import { Logger } from '../../util/Logger.js';


export class KitchenEmployee {
    id;
    name;
    type;
    #logger;

    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.#logger = Logger.getInstance("employee");
    }

    async prepareingDish(order) { //template method design patter - all subclasses follows this template, the abstract methods must be implemented in subclasses
        this.#gatheringIngredients(order).then((value) => 
            this.#cleaningIngredients(order)).then((value) => 
                this.#slicingIngredients(order)).then((value) => 
                    this._blendingIngredients(order)).then((value) => 
                        this._heatTreatment(order)).then((value) => 
                            this.#servingFoodOnAPlate(order));

/*
        await this.#cleaningIngredients(order);
        await this.#slicingIngredients(order);
        await this._blendingIngredients(order); //protected (_ char shows it) because it cannot be invoked publicly only this class or the subclassess can call it       
        await this._heatTreatment(order); //protected (_ char shows it) because it cannot be invoked publicly only this class or the subclassess can call it       
        await this.#servingFoodOnAPlate(order); 
*/
        }
    async #gatheringIngredients(order) { //private method since the food can be prepared by colling the public preparingDish only
        await sleepAsync(1000);
        this.consoleLog(this.name +" doing: " + order.id + ', ' + order.menuItem.name + ", Gathering Ingredients from Pantry");
    }
    async #cleaningIngredients(order) {
        await sleepAsync(2000);
        this.consoleLog(this.name +" doing: " + order.id + ', ' + order.menuItem.name + ", Cleaning ingredients");
    }
    async #slicingIngredients(order) {
        await sleepAsync(2000);
        this.consoleLog(this.name +" doing: " + order.id + ', ' + order.menuItem.name + ", Slicing ingredients");
    }

    async _blendingIngredients(order) {
        throw new Error('Subclasses must implement the _blendingIngredients method.');
    } //abstract and protected method, must be overriden in sublasses (note: no abstrac modifier in js, but it should be an absract method here)

    async _heatTreatment(order) {
        throw new Error('Subclasses must implement the _heatTreatment method.');
    } //abstract and protected method, must be overriden in subclasses (note: no abstrac modifier in js, but it should be absract method here)

    async #servingFoodOnAPlate(order) {
        await sleepAsync(1000);
        this.consoleLog(this.name +" doing: " + order.id + ', ' + order.menuItem.name + ", Serving food on a plate");
    }
    consoleLog(message) {
        let decoratedMessage = Config.getTemplatingColours('FgGreen') + "Employee: " + Config.getTemplatingColours('FgYellow')+ message + Config.getTemplatingColours('Reset') ;
        console.log(decoratedMessage);
        this.#logger.log(message);
    }
}

export class NormalChef extends KitchenEmployee {

    constructor (id, name) {
        super(id, name);
        this.type = 'normal';
    }
    
    async _blendingIngredients(order) {
        await sleepAsync(3000);
        this.consoleLog(this.name +" doing: " + order.id + ', ' + order.menuItem.name +  ", Marinating meat and seasoning garnishes ");
    } 
    async _heatTreatment(order) {
        await sleepAsync(4000);
        this.consoleLog(this.name +" doing: " + order.id + ', ' + order.menuItem.name + ", Grilling meat and cooking side dishes ");
    }

}

export class PastryChef extends KitchenEmployee {

    constructor (id, name) {
        super(id, name);
        this.type = 'pastry';
    }

    async _blendingIngredients(order) {
        await sleepAsync(3000);
        this.consoleLog(this.name +" doing: " + order.id + ', ' + order.menuItem.name + ", Beating eggs, sugaring, kneading yeast dough ");
    } 
    async _heatTreatment(order) {
        await sleepAsync(4000);
        this.consoleLog(this.name +" doing: " + order.id + ', ' + order.menuItem.name + ", Baking ");
    }
}
/*
let akos = new NormalChef(0, 'Akos');
let klaudia = new PastryChef(1, 'Klaudia');

akos.prepareingDish(18);
klaudia.prepareingDish(126);
*/