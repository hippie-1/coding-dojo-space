export class LinkedQueueNode {
    value;
    next;

    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedQueue {
    #head;
    #rear;

    constructor () {
        this.#head = null;
        this.#rear = null;
    }

    isEmpty () {
        if (this.#head == null && this.#rear == null) {
            return true;
        } else {
            return false;
        }
    }

    push (newValue) {
        const newLinkedQueueNode = new LinkedQueueNode(newValue);
        if (this.isEmpty() == true) {
            this.#head = newLinkedQueueNode;
        } else {
            this.#rear.next = newLinkedQueueNode;            
        }
        this.#rear = newLinkedQueueNode;
    }

    poll () {
        if (this.isEmpty() == true) {
            throw new Error ('Queue is empty');
        }
        const tempHead = this.#head;
        if (this.#head.next == null) {
            this.#head = null;
            this.#rear = null;
        } else {
            this.#head = this.#head.next;
        }
        return tempHead.value;
    }

    peek () {
        if (this.isEmpty() == true) {
            return null;
        }
        return this.#head.value;
    }

    toString () {
        let i = this.#head;
        while (i) {
            console.log(i);
            i = i.next;
        }
    }
}

// Testing:
const names = ['John', 'Jakab', 'Jason', 'Jack', 'Joe', 'Jill', 'Julia', 'Jennifer', 'Jessica'];

const newLinkedQueue = new LinkedQueue();
for (let i=0; i<names.length; i++) {
    newLinkedQueue.push(names[i]);
}
// newLinkedQueue.push('Jane');
// newLinkedQueue.toString();
// const polledValue = newLinkedQueue.poll();
const peekValue = newLinkedQueue.peek();
// console.log(poppedValue);
console.log(peekValue);
