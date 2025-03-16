// https://no.wikipedia.org/wiki/Stakk_(datastruktur)

import { removeElement } from '../Arrays.js'

export class Stack {
    #stackArray = [];
    #maxSize = 0;

    constructor(maxSize=10){
        if (maxSize < 0) {
            throw new Error("Stack size cannot be nagative!")
        }
        this.#stackArray = []
        this.#maxSize = maxSize;
    }

    push(elem) {
        if (this.#stackArray.length == this.#maxSize) {
            throw new Error("Stack size overflow");
        }
        else {
            this.#stackArray.push(elem);
        }
    }

    pop() {
        if (this.#stackArray.length > 0) {
            console.log(this.#stackArray.join(', '));
            const lastElem = this.#stackArray[this.#stackArray.length-1];
            this.#stackArray = removeElement(this.#stackArray, this.#stackArray.length-1);
            console.log(this.#stackArray.join(', '));
            return lastElem;
        }
        else {
            throw new Error("Stack is empty!");
        }
    }

    peak() {
        if (this.#stackArray.length > 0) {
            this.peekElem = this.#stackArray.at(-1);
            return this.peekElem;
        }
        else {
            throw new Error("Stack is empty!");
        }
    }
}


