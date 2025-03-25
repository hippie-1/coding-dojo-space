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

    async prepareingDish(foodId) { //template method design patter - all subclasses follows this template, the abstract methods must be implemented in subclasses
        await this.#gatheringIngredients(foodId);
        await this.#cleaningIngredients(foodId);
        await this.#slicingIngredients(foodId);
        await this._blendingIngredients(foodId); //protected (_ char shows it) because it cannot be invoked publicly only this class or the subclassess can call it       
        await this._heatTreatment(foodId); //protected (_ char shows it) because it cannot be invoked publicly only this class or the subclassess can call it       
        await this.#servingFoodOnAPlate(foodId); 
        await this.#servingFoodToGuest(foodId);
    }
    async #gatheringIngredients(foodId) { //private method since the food can be prepared by colling the public preparingDish only
        await sleepAsync(1000);
        this.consoleLog(this.name +" doing : " + foodId + ", Gathering Ingredients from Pantry");
    }
    async #cleaningIngredients(foodId) {
        await sleepAsync(2000);
        this.consoleLog(this.name +" doing : " + foodId + ", Cleaning ingredients");
    }
    async #slicingIngredients(foodId) {
        await sleepAsync(2000);
        this.consoleLog(this.name +" doing : " + foodId + ", Slicing ingredients");
    }

    async _blendingIngredients(foodId) {
        throw new Error('Subclasses must implement the _blendingIngredients method.');
    } //abstract and protected method, must be overriden in sublasses (note: no abstrac modifier in js, but it should be an absract method here)

    async _heatTreatment(foodId) {
        throw new Error('Subclasses must implement the _heatTreatment method.');
    } //abstract and protected method, must be overriden in subclasses (note: no abstrac modifier in js, but it should be absract method here)

    async #servingFoodOnAPlate(foodId) {
        await sleepAsync(1000);
        this.consoleLog(this.name +" doing : " + foodId + ", Serving food on a plate");
    }
    async #servingFoodToGuest(foodId) { //decoratior pattern, some other things added beside the food
        await sleepAsync(1000);
        this.consoleLog(this.name +" doing : " + foodId +  ", is ready to serve to guest with cutlery and napkins");
    }

    consoleLog(message) {
        let decoratedMessage = Config.getTemplatingColours('FgGreen') + "Employee: " + Config.getTemplatingColours('FgYellow')+ message + Config.getTemplatingColours('Reset') ;
        console.log(decoratedMessage);
        this.#logger.log(decoratedMessage);
    }

}

export class NormalChef extends KitchenEmployee {

    constructor (id, name) {
        super(id, name);
        this.type = 'normal';
    }
    
    async _blendingIngredients(foodId) {
        await sleepAsync(3000);
        this.consoleLog(this.name +" doing : " + foodId +  ", Marinating meat and seasoning garnishes ");
    } 
    async _heatTreatment(foodId) {
        await sleepAsync(4000);
        this.consoleLog(this.name +" doing : " + foodId + ", Grilling meat and cooking side dishes ");
    }

}

export class PastryChef extends KitchenEmployee {

    constructor (id, name) {
        super(id, name);
        this.type = 'pastry';
    }

    async _blendingIngredients(foodId) {
        await sleepAsync(3000);
        this.consoleLog(this.name +" doing : " + foodId + ", Beating eggs, sugaring, kneading yeast dough ");
    } 
    async _heatTreatment(foodId) {
        await sleepAsync(4000);
        this.consoleLog(this.name +" doing : " + foodId + ", Baking ");
    }
}
/*
let akos = new NormalChef(0, 'Akos');
let klaudia = new PastryChef(1, 'Klaudia');

akos.prepareingDish(18);
klaudia.prepareingDish(126);
*/