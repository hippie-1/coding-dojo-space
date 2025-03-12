import { Queue } from '../../util/DataStructures/Queue.js';
import { sleepAsync } from '../../util/BasicFunctions.js';

export class KitchenArea {
    dishOrderQueue;

    constructor (restaurantQueue) {
        this.dishOrderQueue = restaurantQueue;
    }

    async work () {
        console.log('Kitchen starts working');
        let emptyCounter = 0;
        while (emptyCounter < 5) {
            try {
                let dishName = this.dishOrderQueue.poll();
                console.log(`Receiving: ${dishName}`);
                emptyCounter = 0;
            } catch (e) {
                emptyCounter++;
                console.log(`Kitchen's message: ${e.message}`);
            }
            await sleepAsync(3000);
            // setTimeout(() => {
            //     console.log(`This is the ${emptyCounter} message`);
            // }, 5000);
        }
        console.log('Kitchen stops for today.');
    }

}

// let KitchenArea1 = new KitchenArea();
// KitchenArea1.work();