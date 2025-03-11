//import { generateRandomNumber } from "../util/BasicFunctions";
//import "../util/BasicFunctions.js"

export function generateRandomNumber(min, max) {
    let rand = (Math.random() * (max - min + 1) + min);
    return Math.round((Math.random() * (max - min + 1) + min));
}

class ListElem {
    constructor(value, prev, next) {
        this.value = value;
        this.next = next;  //jobbkéz
        this.prev = prev;  //balkéz
    }
    getNext() {
        return this.next;
    }
    setNext(ListElem) {
        this.next = ListElem;
    }
    hasNext() {
        return (this.next !=null && this.next!=undefined);
    }
    getPrev() {
        return this.prev;
    }
    setPrev(ListElem) {
        this.prev = ListElem;
    }
    hasPrev() {
        return (this.prev !=null && this.prev!=undefined);
    }
}

function calculateValue (someValueToCalculateWith=0) { //if not specified, default 0
    //let value = someValueToCalculateWith + generateRandomNumber(1, 5);
    let value = someValueToCalculateWith + 5;
    return value;
}

export function generateDoubleLinkedList(numberOfelements) { //1-nel nagyobb term.szam
    let head = new ListElem(calculateValue(), null, null);
    let value = calculateValue(head.value);
    let actual = new ListElem(value, head, null);
    head.setNext(actual);
    for (let i=1; i<numberOfelements-1; i++) {
        //actual.setNext(new ListElem(value, actual, null));
        value = calculateValue(value);
        actual.next = new ListElem(value, actual, null);
        actual = actual.getNext();
    }
    //return actual; //tail, last element
    return head;
}

export function printLinkedListFromHeadTowardsEnd (head) {
    let counter = 0;
    let actualElem = head;
    console.log("Elem" + counter++ + ": ", actualElem.value);
    while (actualElem.hasNext()) { 
        actualElem = actualElem.getNext();
        console.log("Elem" + counter++ + ": ", actualElem.value);
    }
}

export function printLinkedListFromTailTowardsStart (tail) {
    let counter = 0;
    let actualElem = tail;
    console.log("Elem" + counter++ + ": ", actualElem.value);
    while (actualElem.hasPrev()) { 
        actualElem = actualElem.getPrev();
        console.log("Elem" + counter++ + ": ", actualElem.value);
    }
}


//let tail = generateDoubleLinkedList();
//printLinkedListFromTailTowardsStart(tail);

let head = generateDoubleLinkedList(100);
printLinkedListFromHeadTowardsEnd(head);


