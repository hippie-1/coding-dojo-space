import { sleepAsync, generateRandomNumber } from '../../util/BasicFunctions.js';
import {  Menu } from './menu.js';
import { Config } from '../../util/Config.js';
export class GuestArea {
    guestAreaQueue1;
    guestAreaQueue2;
    menu;

    constructor (restaurantQueue1, restaurantQueue2) {
        this.guestAreaQueue1 = restaurantQueue1;
        this.guestAreaQueue2 = restaurantQueue2;
        this.menu = new Menu();
    }

    randomMenuItemName () {
        let randomMenuItemIndex = generateRandomNumber(0, this.menu.menuList.length-2);
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
            await sleepAsync(1000);
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
        // let decoratedMessage = "\x1b[31mGuest Area: \x1b[35m" + message + "\x1b[0m" ;
        let decoratedMessage = Config.getTemplatingColours().FgRed + "Guest Area: " + Config.getTemplatingColours().FgMagenta + message + Config.getTemplatingColours().Reset ;
        console.log(decoratedMessage);
    }
}

// let GuestArea1 = new GuestArea();
// GuestArea1.work();