import { Queue } from '../../util/DataStructures/Queue.js';
import { sleepAsync } from '../../util/BasicFunctions.js';
import { Config } from '../../util/Config.js';
import { Logger } from '../../util/Logger.js';
import { HR } from './hr.js';
import { KitchenEmployee } from './employee.js';

export class KitchenArea {
    dishOrderQueue1; // = guestAreaQueue1
    dishOrderQueue2; // = guestAreaQueue2
    availablePastryChefsQueue;
    availableNormalChefsQueue;
    logger;
    hr;
    preparedMealQueue;

    constructor (restaurantQueue1, restaurantQueue2, preparedMealQueue) {
        this.dishOrderQueue1 = restaurantQueue1;
        this.dishOrderQueue2 = restaurantQueue2;
        this.preparedMealQueue = preparedMealQueue;
        this.logger = Logger.getInstance("kitchen");
        this.hr = new HR();
        this.initAvailableWorkers();

    }

    initAvailableWorkers() {
        this.availablePastryChefsQueue = new Queue(2000);
        this.availableNormalChefsQueue = new Queue(2000);
        for (let i=0; i<this.hr.employees.length; i++) {
            if (this.hr.employees[i].type == 'pastry') {
                this.availablePastryChefsQueue.push(this.hr.employees[i]);
            }
            if (this.hr.employees[i].type == 'normal') {
                this.availableNormalChefsQueue.push(this.hr.employees[i]);
            }
        }
    }

    async work () {
        await sleepAsync(3000);
        this.consoleLog('Kitchen starts working with a short delay to wait for the first couple of dishOrders');
        let emptyCounter = 0;
        while (emptyCounter < 20) {
            let order = this.messageListener();
            if (order) {
                emptyCounter = 0;
                await this.dishOrderDistribution(order);                   
            } else {
                await sleepAsync(1000);
                emptyCounter++;
            }
        }
        this.consoleLog('Kitchen stops for today.');
    }

    async dishOrderDistribution(order) {
        let availableChefPromise = null;
        if (order.menuItem.type == 'sweet') {
            availableChefPromise = this.getAvailableChef('pastry');
        }
        if (order.menuItem.type == 'normal') {
            availableChefPromise = this.getAvailableChef('normal');              
        }
        await availableChefPromise;
        availableChefPromise.then((value) => {
            let availableChef = value; //átírható?
            this.consoleLog("Chef " + availableChef.name + " has started on " + order.menuItem.name);
            this.foodPreparation (order, availableChef);
            return true;            
        })
    }

    async foodPreparation (order, chef) {
        order.status = 'preparation started';
        await chef.prepareingDish(order.menuItem.name);
        this.finished(order, chef);
    }
    
    finished(order, chef) {
        if (chef.type == 'pastry') {
            this.availablePastryChefsQueue.push(chef);
        }
        if (chef.type == 'normal') {
            this.availableNormalChefsQueue.push(chef);          
        }
        order.status = 'prepared';
        order.meal = order.menuItem.name;
        this.preparedMealQueue.push(order);
        this.consoleLog("Chef " + chef.name + " has finished " + order.menuItem.name + " preparation and goes to the end of the queue and waits for the next task");
    }
      
    messageListener () { //consume food order
        let order = null;
        if (Math.random() < 0.5) {
            try {
                order = this.dishOrderQueue1.poll();
                this.consoleLog(`Receiving from Queue1: ${order.menuItem.name}`);
                order.status = 'received';
                return order;
            } catch (e) {
                this.consoleLog(`Queue1: ${e.message}`);
            }
        } else {
            try {
                order = this.dishOrderQueue2.poll();
                this.consoleLog(`Receiving from Queue2: ${order.menuItem.name}`);
                order.status = 'received';
                return order;
            } catch (e) {
                this.consoleLog(`Queue2: ${e.message}`);
            }
        }
        return order;
    }

    async getAvailableChef(type) { //message listener, consume queue
        let availableChef = null;
        while (!availableChef) {
            if (type == 'pastry') {
                try { //átírható?
                    availableChef = this.availablePastryChefsQueue.poll();
                }
                catch (e) {
                    this.consoleLog(`AvailablePastryChefsQueue: ${e.message}`);
                    await sleepAsync(1000);
                }
            }
            if (type == 'normal') {
                try { //átírható?
                    availableChef = this.availableNormalChefsQueue.poll();
                }
                catch (e) {
                    this.consoleLog(`AvailableNormalChefsQueue: ${e.message}`);
                    await sleepAsync(1000);
                }
            }
        }
        this.consoleLog("Available chef found");
        return availableChef;
    }


    consoleLog(message) {
        let decoratedMessage = Config.getTemplatingColours('FgCyan') + "Kitchen: " + Config.getTemplatingColours('FgBlue')+ message + Config.getTemplatingColours('Reset') ;
        console.log(decoratedMessage);
        this.logger.log(decoratedMessage);
    }

}

//test:
// let KitchenArea1 = new KitchenArea();
// KitchenArea1.work();
