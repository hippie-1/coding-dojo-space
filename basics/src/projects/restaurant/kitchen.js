import { Queue } from '../../util/DataStructures/Queue.js';
import { sleepAsync } from '../../util/BasicFunctions.js';
import { Config } from '../../util/Config.js';
import { Logger } from '../../util/Logger.js';
import { HR } from './hr.js';

export class KitchenArea {
    dishOrderQueue1;
    dishOrderQueue2;
    availablePastryChefsQueue;
    availableNormalChefsQueue;
    logger;
    hr;

    constructor (restaurantQueue1, restaurantQueue2) {
        this.dishOrderQueue1 = restaurantQueue1;
        this.dishOrderQueue2 = restaurantQueue2;
        this.logger = Logger.getInstance("kitchen");
        this.hr = new HR();
        this.initAvailableWorkers();

    }

    initAvailableWorkers() {
        this.availablePastryChefsQueue = new Queue(20);
        this.availableNormalChefsQueue = new Queue(20);
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
            let dish = this.messageListener();
            if (dish) {
                emptyCounter = 0;
                await this.dishOrderDistribution(dish);                   
            } else {
                await sleepAsync(1000);
                emptyCounter++;
            }
        }
        this.consoleLog('Kitchen stops for today.');
    }

    async dishOrderDistribution(dish) {
        let availableChefPromise = null;
        if (dish.type == 'sweet') {
            availableChefPromise = this.getAvailableChef('pastry');
        }
        if (dish.type == 'normal') {
            availableChefPromise = this.getAvailableChef('normal');              
        }
        await availableChefPromise;
        availableChefPromise.then((value) => {
            let availableChef = value; //átírható?
            this.consoleLog("Chef " + availableChef.name + " has started on " + dish.name);
            this.foodPreparation (dish, availableChef);
            return true;            
        })
    }

    async foodPreparation (dish, chef) {
        let workingHard = sleepAsync(dish.estPrepTimeInMiliSec);
        await workingHard;
        workingHard.then((value) => {
            this.finished(dish.name, chef);
        });
    }
    
    finished(dishName, chef) {
        if (chef.type == 'pastry') {
            this.availablePastryChefsQueue.push(chef);
        }
        if (chef.type == 'normal') {
            this.availableNormalChefsQueue.push(chef);          
        }       
        this.consoleLog("Chef " + chef.name + " has finished " + dishName + " preparation and goes to the end of the queue and waits for the next task");
    }
      
    messageListener () { //consume food order
        let dish = null;
        if (Math.random() < 0.5) {
            try {
                dish = this.dishOrderQueue1.poll();
                this.consoleLog(`Receiving from Queue1: ${dish.name}`);
            } catch (e) {
                this.consoleLog(`Queue1: ${e.message}`);
            }
        } else {
            try {
                let dish = this.dishOrderQueue2.poll();
                this.consoleLog(`Receiving from Queue2: ${dish.name}`);
            } catch (e) {
                this.consoleLog(`Queue2: ${e.message}`);
            }
        }
        return dish;
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
        return availableChef;
    }


    consoleLog(message) {
        let decoratedMessage = Config.getTemplatingColours('FgCyan') + "Kitchen: " + Config.getTemplatingColours('FgBlue')+ message + Config.getTemplatingColours('Reset') ;
        //console.log(decoratedMessage);
        this.logger.log(decoratedMessage);
    }

}

//test:
// let KitchenArea1 = new KitchenArea();
// KitchenArea1.work();
