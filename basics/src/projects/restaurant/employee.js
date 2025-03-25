import { sleepAsync } from '../../util/BasicFunctions.js';

export class KitchenEmployee {
    id;
    name;
    type;;

    constructor (id, name) {
        this.id = id;
        this.name = name;
    }

    async prepareingDish(foodId) { //template method design patter - all subclasses follows this template, the abstract methods must be implemented in subclasses
        this.#gatheringIngredients(foodId);
        this.#cleaningIngredients(foodId);
        this.#slicingIngredients(foodId);
        this._blendingIngredients(foodId); //protected (_ char shows it) because it cannot be invoked publicly only this class or the subclassess can call it       
        this._heatTreatment(foodId); //protected (_ char shows it) because it cannot be invoked publicly only this class or the subclassess can call it       
        this.#servingFoodOnAPlate(foodId); 
        this.#servingFoodToGuest(foodId);
    }
    async #gatheringIngredients(foodId) { //private method since the food can be prepared by colling the public preparingDish only
        await sleepAsync(1000);
        console.log("FoodId: " + foodId + ", Gathering Ingredients from Pantry");
    }
    async #cleaningIngredients(foodId) {
        await sleepAsync(1000);
        console.log("FoodId: " + foodId + ", Cleaning ingredients");
    }
    async #slicingIngredients(foodId) {
        await sleepAsync(1000);
        console.log("FoodId: " + foodId + ", Slicing ingredients");
    }

    async _blendingIngredients(foodId) {
        throw new Error('Subclasses must implement the _blendingIngredients method.');
    } //abstract and protected method, must be overriden in sublasses (note: no abstrac modifier in js, but it should be an absract method here)

    async _heatTreatment(foodId) {
        throw new Error('Subclasses must implement the _heatTreatment method.');
    } //abstract and protected method, must be overriden in subclasses (note: no abstrac modifier in js, but it should be absract method here)

    async #servingFoodOnAPlate(foodId) {
        await sleepAsync(1000);
        console.log("FoodId: " + foodId + ", Serving food on a plate");
    }
    async #servingFoodToGuest(foodId) { //decoratior pattern, some other things added beside the food
        await sleepAsync(1000);
        console.log("Food (FoodId: " + foodId + "), is ready to serve to guest with cutlery and napkins");
    }

}

export class NormalChef extends KitchenEmployee {

    constructor (id, name) {
        super(id, name);
        this.type = 'normal';
    }
    
    async _blendingIngredients(foodId) {
        await sleepAsync(1000);
        console.log("FoodId: " + foodId + ", Marinating meat and seasoning garnishes ");
    } 
    async _heatTreatment(foodId) {
        await sleepAsync(1000);
        console.log("FoodId: " + foodId + ", Grilling meat and cooking side dishes ");
    }

}

export class PastryChef extends KitchenEmployee {

    constructor (id, name) {
        super(id, name);
        this.type = 'pastry';
    }

    async _blendingIngredients(foodId) {
        await sleepAsync(1000);
        console.log("FoodId: " + foodId + ", Beating eggs, sugaring, kneading yeast dough ");
    } 
    async _heatTreatment(foodId) {
        await sleepAsync(1000);
        console.log("FoodId: " + foodId + ", Baking ");
    }
}

let akos = new NormalChef(0, 'Akos');
let klaudia = new PastryChef(1, 'Klaudia');

akos.prepareingDish(18);
klaudia.prepareingDish(126);
