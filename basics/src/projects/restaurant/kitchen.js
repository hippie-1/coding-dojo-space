import { Queue } from '../../util/DataStructures/Queue.js';
import { sleepAsync } from '../../util/BasicFunctions.js';
import { Config } from '../../util/Config.js';
import { Logger } from '../../util/Logger.js';

export class KitchenArea {
    dishOrderQueue1;
    dishOrderQueue2;
    availableChefsQueue;
    logger;

    constructor (restaurantQueue1, restaurantQueue2) {
        this.dishOrderQueue1 = restaurantQueue1;
        this.dishOrderQueue2 = restaurantQueue2;
        this.logger = Logger.getInstance("kitchen");

    }

    initAvailableWorkers() {
        this.availableChefsQueue = new Queue();
        this.availableChefsQueue.push("Ákos");
        this.availableChefsQueue.push("Zsanett");
        this.availableChefsQueue.push("Krisztián");
    }

    async work () {
        await sleepAsync(3000);
        this.consoleLog('Kitchen starts working with a short delay to wait for the first couple of dishOrders');
        let emptyCounter = 0;
        while (emptyCounter < 10) {
            let dishName = this.messageListener();
            if (dishName) {
                emptyCounter = 0;
                await this.dishOrderDistribution(dishName);                   
            } else {
                await sleepAsync(1000);
                emptyCounter++;
            }
        }
        this.consoleLog('Kitchen stops for today.');
    }

    async dishOrderDistribution(dishName) {
        let availableChefPromise = this.getAvailableChef();
        await availableChefPromise;
        availableChefPromise.then((value) => {
            let availableChef = value;
            this.consoleLog("Chef " + availableChef + " has started on " + dishName);
            this.foodPreparation (dishName, availableChef);
            return true;            
        })
    }

    async foodPreparation (dishName, chef) {
        let workingHard = sleepAsync(3000);
        await workingHard;
        workingHard.then((value) => {
            this.finished(dishName, chef);
        });
    }
    
    finished(dishName, chef) {
        this.availableChefsQueue.push(chef);
        this.consoleLog("Chef " + chef + " has finished " + dishName + " preparation and goes to the end of the queue and waits for the next task");
    }
      
    messageListener () { //consume food order
        let dishName = null;
        if (Math.random() < 0.5) {
            try {
                dishName = this.dishOrderQueue1.poll();
                this.consoleLog(`Receiving from Queue1: ${dishName}`);
            } catch (e) {
                this.consoleLog(`Queue1: ${e.message}`);
            }
        } else {
            try {
                dishName = this.dishOrderQueue2.poll();
                this.consoleLog(`Receiving from Queue2: ${dishName}`);
            } catch (e) {
                this.consoleLog(`Queue2: ${e.message}`);
            }
        }
        return dishName;
    }

    async getAvailableChef() { //message listener, consume queue
        let availableChef = null;
        while (!availableChef) {
            try {
                availableChef = this.availableChefsQueue.poll();
            }
            catch (e) {
                this.consoleLog(`AvailableChefsQueue: ${e.message}`);
                await sleepAsync(1000);
            }
        }
        return availableChef;
    }


    consoleLog(message) {
        let decoratedMessage = Config.getTemplatingColours('FgCyan') + "Kitchen: " + Config.getTemplatingColours('FgBlue')+ message + Config.getTemplatingColours('Reset') ;
        console.log(decoratedMessage);
        this.logger.log(message);
    }

}

// let KitchenArea1 = new KitchenArea();
// KitchenArea1.work();