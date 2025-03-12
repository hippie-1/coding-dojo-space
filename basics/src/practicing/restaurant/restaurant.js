import { Queue } from '../../util/DataStructures/Queue.js';
import { KitchenArea } from './kitchen.js';
import { GuestArea } from './guestArea.js';

class Restaurant {
    restaurantQueue;
    newKitchen;
    newGuestAre;

    constructor () {
        this.restaurantQueue = new Queue();
        this.newKitchen= new KitchenArea(this.restaurantQueue);
        this.newGuestArea = new GuestArea(this.restaurantQueue);
    }

    async work () {
        // this.newGuestArea.work();
        // this.newKitchen.work();

        console.log('Restaurant is opening...');
        await Promise.all([this.newGuestArea.work(), this.newKitchen.work()]);
        console.log('Restaurant has closed.');
    }
}

let Restaurant1 = new Restaurant();
Restaurant1.work();