import { Queue } from '../../util/DataStructures/Queue.js';
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

    constructor () {
        this.restaurantQueue1 = new Queue();
        this.restaurantQueue2 = new Queue();
        this.logger = Logger.getInstance("restaurant");
        this.newKitchen= new KitchenArea(this.restaurantQueue1, this.restaurantQueue2);
        this.newGuestArea = new GuestArea(this.restaurantQueue1, this.restaurantQueue2);
    }

    async work () {
        this.consoleLog('Restaurant is opening...');
        await Promise.all([this.newGuestArea.work(), this.newKitchen.work()]);
        this.consoleLog('Restaurant has closed.');
    }

    consoleLog(message) {
        // let decoratedMessage = "\x1b[31mGuest Area: \x1b[35m" + message + "\x1b[0m" ;
        let decoratedMessage = Config.getTemplatingColours('FgWhite') + "Restaurant: " + Config.getTemplatingColours('FgGray')+ message + Config.getTemplatingColours('Reset') ;
        console.log(decoratedMessage);
        this.logger.log(decoratedMessage);
    }
}

let Restaurant1 = new Restaurant();
Restaurant1.work();