import { Queue } from '../../util/DataStructures/Queue.js';
import { KitchenArea } from './kitchen.js';
import { GuestArea } from './guestArea.js';

class Restaurant {
    restaurantQueue1;
    restaurantQueue2;
    newKitchen;
    newGuestAre;

    constructor () {
        this.restaurantQueue1 = new Queue();
        this.restaurantQueue2 = new Queue();
        this.newKitchen= new KitchenArea(this.restaurantQueue1, this.restaurantQueue2);
        this.newGuestArea = new GuestArea(this.restaurantQueue1, this.restaurantQueue2);
    }

    async work () {
        console.log('Restaurant is opening...');
        await Promise.all([this.newGuestArea.work(), this.newKitchen.work()]);
        console.log('Restaurant has closed.');
    }
}

let Restaurant1 = new Restaurant();
Restaurant1.work();