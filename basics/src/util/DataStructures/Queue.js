import { removeElement } from '../Arrays.js';

export class myQueue {
    #privateArray;
    #maxSize;

    constructor (maxSize=5) {
        if (maxSize < 0) {
            throw new Error("Stack size cannot be nagative!")
        }
        this.#privateArray = [];
        this.#maxSize = maxSize;
    }

    push (newElem) {
        if(this.#privateArray.length > this.#maxSize-1) {
            throw new Error ('Size of the set will overflow during insertion.')
        }
        this.#privateArray.push(newElem);
    }

    poll () {
        if (!this.#privateArray.length) {
            throw new Error("Queue is empty");
        } else {
            let tempValue = this.#privateArray[0];
            this.#privateArray = removeElement(this.#privateArray, 0);
            return tempValue;
        }
    }

    readHead () {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.#privateArray[0];
        }
    }

    getSize () {
        return this.#privateArray.length;
    }

    isEmpty () {
        if (this.#privateArray.length) {
            return false;
        } else {
            return true;
        }
    }
}