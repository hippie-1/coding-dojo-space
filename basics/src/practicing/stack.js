import { removeElement } from '../util/ListAlgorithms.js'

class Stack {
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

const hardwareStack = new Stack();
const tools = ["hammer", "wrench", "pliers", "drill", "screwdriver", "saw", "tape measure", "level", "scissors", "gereblye", "ásó"];
try {
    tools.forEach((tool) => hardwareStack.push(tool));
    }
catch (e) {
    console.log(e.message);
}
do {
    try {
        var currentHardware = hardwareStack.pop();
    }
    catch (e) {
        console.log(e.message);
        break;
    }
    console.log(`Found ${currentHardware}, but looking for zokni...`)
}
while (currentHardware != "zokni")

