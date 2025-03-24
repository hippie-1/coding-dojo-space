import { sleepAsync, generateRandomNumber } from '../../util/BasicFunctions.js';
import { Menu } from './menu.js';
import { Config } from '../../util/Config.js';
import { Logger } from '../../util/Logger.js';

export class GuestArea {
    guestAreaQueue1;
    guestAreaQueue2;
    menu;
    logger;

    constructor (restaurantQueue1, restaurantQueue2) {
        this.guestAreaQueue1 = restaurantQueue1;
        this.guestAreaQueue2 = restaurantQueue2;
        this.menu = new Menu();
        this.logger = Logger.getInstance("guestArea");
    }

    randomMenuItemName () { 
        this.menu.refreshMenuList();
        let randomMenuItemIndex = generateRandomNumber(0, this.menu.menuList.length-2);
        console.log(this.menu.menuList);
        console.log(randomMenuItemIndex);
        let randomMenuItemName = this.menu.menuList[randomMenuItemIndex].name;
        return randomMenuItemName;
    }

    async work () {
        this.consoleLog('GuestArea starts working');
        let maxOrderNumber = 20;
        let orderNumber = 0;
        while (orderNumber <= maxOrderNumber) {
            orderNumber++;
            let foodName = 'food-' + orderNumber + ": " + this.randomMenuItemName();
            this.messageBroker(foodName);
            await sleepAsync(2000);
        }
        this.consoleLog('GuestArea\'s food ordering stops for today.');
    }

    messageBroker (foodName) {
        const random = Math.random();
        // console.log(random);
        if (random < 0.5) {
            try {
                this.guestAreaQueue1.push(foodName);
                this.consoleLog(`Feeding to Queue1: ${foodName}`);
            } catch (e) {
                this.consoleLog(`Queue1 ${e.message}`)
            }
        } else {
            try{
                this.guestAreaQueue2.push(foodName);
                this.consoleLog(`Feeding to Queue2: ${foodName}`);
            } catch (e) {
                this.consoleLog(`Queue2 ${e.message}`);
            }
        }
    }

    consoleLog(message) {
        let decoratedMessage = Config.getTemplatingColours('FgRed') + "Guest Area: " + Config.getTemplatingColours('FgMagenta')+ message + Config.getTemplatingColours('Reset') ;
        this.logger.log(decoratedMessage);
    }
}

//test:
// let GuestArea1 = new GuestArea();
// GuestArea1.work();