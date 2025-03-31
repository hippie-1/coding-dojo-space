import { Queue } from '../../util/DataStructures/Queue.js';
import { LinkedQueue } from '../../util/DataStructures/QueueLinkedImplementation.js';
import { GuestArea } from './guestArea.js';
import { KitchenArea } from './kitchen.js';
import { Config } from '../../util/Config.js';
import { Logger } from '../../util/Logger.js';

class Restaurant {
    restaurantQueue1;
    restaurantQueue2;
    newKitchen;
    newGuestAre;
    logger;
    preparedMealQueue;

    constructor () {
        this.restaurantQueue1 = new LinkedQueue();
        this.restaurantQueue2 = new LinkedQueue();
        this.preparedMealQueue = new LinkedQueue(30);
        this.logger = Logger.getInstance("restaurant");
        this.newKitchen= new KitchenArea(this.restaurantQueue1, this.restaurantQueue2, this.preparedMealQueue);
        this.newGuestArea = new GuestArea(this.restaurantQueue1, this.restaurantQueue2, this.preparedMealQueue);
    }

    async work () {
        this.consoleLog('Restaurant is opening...');
        await Promise.all([this.newGuestArea.work(), this.newKitchen.work()]);
        this.consoleLog('Restaurant has closed.');
    }

    consoleLog(message) {
        let decoratedMessage = Config.getTemplatingColours('FgWhite') + "Restaurant: " + Config.getTemplatingColours('FgGray')+ message + Config.getTemplatingColours('Reset') ;
        console.log(decoratedMessage);
        this.logger.log(message);
    }
}

let Restaurant1 = new Restaurant();
Restaurant1.work();