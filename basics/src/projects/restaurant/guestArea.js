import { sleepAsync, generateRandomNumber } from '../../util/BasicFunctions.js';
import {  Menu } from './menu.js';

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
        let randomMenuItemIndex = generateRandomNumber(0, this.menu.menuList.length-1);
        console.log(randomMenuItemIndex);
        let randomMenuItemName = this.menu.menuList[randomMenuItemIndex].name;
        return randomMenuItemName;
    }

    async work () {
        console.log('GuestArea starts working');
        let maxOrderNumber = 20;
        let orderNumber = 0;
        while (orderNumber <= maxOrderNumber) {
            orderNumber++;
            let foodName = 'food-' + orderNumber + ": " + this.randomMenuItemName();
            this.messageBroker(foodName);
            await sleepAsync(1000);
        }
        console.log('GuestArea\'s food ordering stops for today.');
    }

    messageBroker (foodName) {
        const random = Math.random();
        // console.log(random);
        if (random < 0.5) {
            try {
                this.guestAreaQueue1.push(foodName);
                console.log(`Feeding to Queue1: ${foodName}`);
            } catch (e) {
                console.log(`Queue1 ${e.message}`)
            }
        } else {
            try{
                this.guestAreaQueue2.push(foodName);
                console.log(`Feeding to Queue2: ${foodName}`);
            } catch (e) {
                console.log(`Queue2 ${e.message}`);
            }
        }
    }
}

// let GuestArea1 = new GuestArea();
// GuestArea1.work();