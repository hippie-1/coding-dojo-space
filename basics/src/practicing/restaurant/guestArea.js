import { sleepAsync } from '../../util/BasicFunctions.js';

export class GuestArea {
    guestAreaQueue1;
    guestAreaQueue2;

    constructor (restaurantQueue1, restaurantQueue2) {
        this.guestAreaQueue1 = restaurantQueue1;
        this.guestAreaQueue2 = restaurantQueue2;
    }

    async work () {
        console.log('GuestArea starts working');
        let maxOrderNumber = 20;
        let orderNumber = 0;
        while (orderNumber <= maxOrderNumber) {
            orderNumber++;
            let foodName = 'food-' + orderNumber;
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