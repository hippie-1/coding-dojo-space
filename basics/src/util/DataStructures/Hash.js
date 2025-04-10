// DEV-121

import { Currency } from "../../projects/stock_exchange/model/currency.js";
import { stringToHash } from "../BasicFunctions.js";

export class Hashtable {
    #arrayForBuckets;
    numberOfBuckets;

    constructor (numberOfBuckets = 100) {
        this.numberOfBuckets = numberOfBuckets;
        this.#arrayForBuckets = [];
        for (let i=0; i<numberOfBuckets; i++) {
            this.#arrayForBuckets.push({});
        }
    }

    keyToInteger (key) {
        if (typeof key == 'object') {
            if (typeof key.hashCode === 'function') {
                key = key.hashCode();
            } else {
                key = JSON.stringify(key);
            }
        }
        if (typeof key == 'string') {
            key = stringToHash(key);
            // key = Math.abs(Math.floor(key));
        }
        if (typeof key == "number") {
            key = Math.abs(Math.floor(key));
        }
        return key;
    }

    #hash (key) {
        const keyToInteger = this.keyToInteger(key);
        const remainder = keyToInteger % this.numberOfBuckets;
        return remainder;
    }

    insert (key, value) {
        const bucketNumber = this.#hash(key);
        this.#arrayForBuckets[bucketNumber][key] = value;
        return this.#arrayForBuckets;
    }

    get (key) {
        const bucketNumber = this.#hash(key);
        const valueToKey = this.#arrayForBuckets[bucketNumber][key];
        return valueToKey;
    }

    remove (key) {
        const bucketNumber = this.#hash(key);
        if (this.#arrayForBuckets[bucketNumber][key]) {
            delete this.#arrayForBuckets[bucketNumber][key];
            return true;
        } else {
            return false;
        }
    }

    toString () {
        console.log(this.#arrayForBuckets);
    }
}


    const test = new Hashtable(13);
    // console.log(test.keyToInteger({'valamikulcs': 'valamiérték'}))
    // console.log(test.insert('Vida Reka', '+36201234567'));
    // console.log(test.insert('Polgar Peter', '+36207654321'));
    // console.log(test.insert('Gacs Gyongyi', '+362089101112'));
    // console.log(test.insert({'valamikulcs': 'valamiérték'}, '+36201234567'));
    // test.toString();
    // console.log(test.get('Polgar Peter'));
    // console.log(test.remove('Vida Reka'));
    // console.log(test.insert('Polgar-Vida Reka', '+36201234567'));
    // console.log(test.get('Polgar-Vida Reka'));
    // console.log(test.remove('Gacs Gyongyi'));
    // console.log(test.remove('xs'));
    console.log(test.insert(new Currency(new Date(), 'EUR', 408)), 'EUR');
    console.log(test.insert(new Currency(new Date(), 'USD', 430)));
    console.log(test.insert(new Currency(new Date(), 'NOK', 35)));
    test.toString();