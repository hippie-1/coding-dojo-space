import { Queue } from '../../util/DataStructures/Queue.js';
import { sleepAsync } from '../../util/BasicFunctions.js';

export class GuestArea {
    guestAreaQueue;

    constructor (restaurantQueue) {
        this.guestAreaQueue = restaurantQueue;
    }

    async work () {
        console.log('GuestArea starts working');
        let maxOrderNumber = 20;
        let orderNumber = 0;
        while (orderNumber <= maxOrderNumber) {
            orderNumber++;
            try {
                let foodName = 'food ' + orderNumber;
                console.log(`Feeding: ${foodName}`);
                this.guestAreaQueue.push(foodName);
            } catch (e) {
                console.log(e.message);
            }
            await sleepAsync(2000);
            // setTimeout(() => {}, 5000);
        }
        console.log('GuestArea\'s food ordering stops for today.');
    }
}

// let GuestArea1 = new GuestArea();
// GuestArea1.work();