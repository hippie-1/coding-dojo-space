import { Queue } from '../../util/DataStructures/Queue.js';
import { sleepAsync } from '../../util/BasicFunctions.js';

export class KitchenArea {
    dishOrderQueue1;
    dishOrderQueue2;

    constructor (restaurantQueue1, restaurantQueue2) {
        this.dishOrderQueue1 = restaurantQueue1;
        this.dishOrderQueue2 = restaurantQueue2;
    }

    async work () {
        console.log('Kitchen starts working');
        let emptyCounter = 0;
        while (emptyCounter < 5) {
                let dishName = this.messageListener();
                if (dishName) {
                    emptyCounter = 0;
                    await this.dishOrderDistribution(dishName);                   
                } else {
                    emptyCounter++;
                }
        }
        console.log('Kitchen stops for today.');
    }

    async dishOrderDistribution(dishName) {
        let availableChef = "Akos";
        await this.foodPreparation (dishName, availableChef);
        return true;
    }

    async foodPreparation (dishName, chef) {
        let workingHard = sleepAsync(3000);
        await workingHard;
        workingHard.then((value) => {this.finished(dishName, chef)});
        return true;
    }
    
    finished(dishName, chef) {
        console.log(chef + " has finished " + dishName + " preparation and ready for the next task");
    }
      
    messageListener () {
        let dishName = null;
        if (Math.random() < 0.5) {
            try {
                dishName = this.dishOrderQueue1.poll();
                console.log(`Receiving from Queue1: ${dishName}`);
            } catch (e) {
                console.log(`Kitchen's message from Queue1: ${e.message}`);
            }
        } else {
            try {
                dishName = this.dishOrderQueue2.poll();
                console.log(`Receiving from Queue2: ${dishName}`);
            } catch (e) {
                console.log(`Kitchen's message from Queue2: ${e.message}`);
            }
        }
        return dishName;
    }

}

// let KitchenArea1 = new KitchenArea();
// KitchenArea1.work();