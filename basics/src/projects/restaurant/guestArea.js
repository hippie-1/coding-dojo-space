import { sleepAsync, generateRandomNumber, formatDate } from '../../util/BasicFunctions.js';
import { Menu } from './menu.js';
import { Config } from '../../util/Config.js';
import { Logger } from '../../util/Logger.js';
import { Order } from './order.js';
import * as fs from 'node:fs';

export class GuestArea {
    guestAreaQueue1;
    guestAreaQueue2;
    menu;
    logger;
    preparedMealQueue;
    today;

    constructor (restaurantQueue1, restaurantQueue2, preparedMealQueue) {
        this.guestAreaQueue1 = restaurantQueue1;
        this.guestAreaQueue2 = restaurantQueue2;
        this.preparedMealQueue = preparedMealQueue;
        this.today = formatDate(new Date());
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
        let maxOrderNumber = 5;
        let orderNumber = 0;
        while (orderNumber < maxOrderNumber) {
            orderNumber++;
            // let food = this.randomMenuItem();
            let order = new Order(this.today + "-" + orderNumber, this.randomMenuItem());
            this.messageBroker(order);
            await sleepAsync(5000);
        }

        this.messageListener();
        this.consoleLog('GuestArea\'s food ordering stops for today after ' + orderNumber + ' orders.');
    }

    messageBroker (order) {
        const random = Math.random();
        if (random < 0.5) {
            try {
                this.guestAreaQueue1.push(order);
                this.consoleLog(`Feeding to Queue1: id: ${order.id}, ${order.menuItem.name}`);
                order.status = 'accepted';
            } catch (e) {
                this.consoleLog(`Queue1 ${e.message}`)
            }
        } else {
            try{
                this.guestAreaQueue2.push(order);
                this.consoleLog(`Feeding to Queue2: id: ${order.id}, ${order.menuItem.name}`);
                order.status = 'accepted'; 
            } catch (e) {
                this.consoleLog(`Queue2 ${e.message}`);
            }
        }
    }

    messageListener () {
        try {
            let order = this.preparedMealQueue.poll();
            this.consoleLog(`Receiving from preparedMealQueue: id: ${order.id}, ${order.menuItem.name}`);
            order.status = 'served';
            this.guestIsEating(order);
        } catch (e) {
            this.consoleLog(`preparedMealQueue: ${e.message}`);
        }
    }

    guestIsEating(order) {
        sleepAsync(3000);
        order.status = 'eatenAndPaid';
        this.consoleLog(`Guest is eating id: ${order.id}, ${order.menuItem.name}`);
        this.savePaidOrder(order);
    }
    
    savePaidOrder(order) {
        if (order.status == 'eatenAndPaid') {
            let content = JSON.stringify(order) + '\n';
            fs.appendFile(Config.getPaidOrdersPath(), content, (err) => {
                if (err) {
                  console.error('Error appending to file:', err);
                  return;
                }
                console.log('Content appended successfully!');
              })
        }
    }

    consoleLog(message) {
        let decoratedMessage = Config.getTemplatingColours('FgRed') + "Guest Area: " + Config.getTemplatingColours('FgMagenta')+ message + Config.getTemplatingColours('Reset') ;
        console.log(decoratedMessage);
        this.logger.log(message);
    }
}

//test:
// let GuestArea1 = new GuestArea();
// GuestArea1.work();