import { sleepAsync, generateRandomNumber } from '../../util/BasicFunctions.js';
import { Menu } from './menu.js';
import { Config } from '../../util/Config.js';
import { Logger } from '../../util/Logger.js';
import { Order } from './order.js';

export class GuestArea {
    guestAreaQueue1;
    guestAreaQueue2;
    menu;
    logger;
    preparedMealQueue;

    constructor (restaurantQueue1, restaurantQueue2, preparedMealQueue) {
        this.guestAreaQueue1 = restaurantQueue1;
        this.guestAreaQueue2 = restaurantQueue2;
        this.preparedMealQueue = preparedMealQueue;
        this.menu = new Menu();
        this.logger = Logger.getInstance("guestArea");
    }

    randomMenuItem () { 
        this.menu.refreshMenuList();
        let randomMenuItemIndex = generateRandomNumber(0, this.menu.menuList.length-2);
        //console.log(this.menu.menuList);
        //console.log(randomMenuItemIndex);
        //let randomMenuItemName = this.menu.menuList[randomMenuItemIndex].name;
        return this.menu.menuList[randomMenuItemIndex];
    }

    async work () {
        this.consoleLog('GuestArea starts working');
        let maxOrderNumber = 30;
        let orderNumber = 0;
        while (orderNumber < maxOrderNumber) {
            orderNumber++;
            // let food = this.randomMenuItem();
            let order = new Order(this.randomMenuItem());
            this.messageBroker(order);
            await sleepAsync(2000);
        }
        this.consoleLog('GuestArea\'s food ordering stops for today after ' + orderNumber + ' orders.');
    }

    messageBroker (order) {
        const random = Math.random();
        if (random < 0.5) {
            try {
                this.guestAreaQueue1.push(order);
                this.consoleLog(`Feeding to Queue1: ${order.menuItem.name}`);
                order.status = 'accepted';
            } catch (e) {
                this.consoleLog(`Queue1 ${e.message}`)
            }
        } else {
            try{
                this.guestAreaQueue2.push(order);
                this.consoleLog(`Feeding to Queue2: ${order.menuItem.name}`);
                order.status = 'accepted'; 
            } catch (e) {
                this.consoleLog(`Queue2 ${e.message}`);
            }
        }
    }

    messageListener () {
        try {
            let order = this.preparedMealQueue.poll();
            this.consoleLog(`Receiving from preparedMealQueue: ${order.menuList.name}`);
            order.status = 'served';
        } catch (e) {
            this.consoleLog(`preparedMealQueue: ${e.message}`);
        }
    }

    consoleLog(message) {
        let decoratedMessage = Config.getTemplatingColours('FgRed') + "Guest Area: " + Config.getTemplatingColours('FgMagenta')+ message + Config.getTemplatingColours('Reset') ;
        console.log(decoratedMessage);
        this.logger.log(decoratedMessage);
    }
}

//test:
// let GuestArea1 = new GuestArea();
// GuestArea1.work();