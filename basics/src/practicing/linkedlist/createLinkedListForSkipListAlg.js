//import { generateRandomNumber } from "../util/BasicFunctions";
//import "../util/BasicFunctions.js"

export function generateRandomNumber(min, max) {
    let rand = (Math.random() * (max - min + 1) + min);
    return Math.round((Math.random() * (max - min + 1) + min));
}

class ListElem {
    constructor(value, prev, next, above, below) {
        this.value = value;
        this.prev = prev;  //balkéz
        this.next = next;  //jobbkéz
        this.above = above;  //jobbkéz
        this.below = below;  //jobbkéz
    }

    hasNext() {
        return (this.next !=null && this.next!=undefined);
    }
    hasPrev() {
        return (this.prev !=null && this.prev!=undefined);
    }
    hasAbove() {
        return (this.above !=null && this.above!=undefined);
    }
    hasBelow() {
        return (this.below !=null && this.below!=undefined);
    }        

}

function calculateValue (someValueToCalculateWith=0) { //if not specified, default 0
    //let value = someValueToCalculateWith + generateRandomNumber(1, 5);
    let value = someValueToCalculateWith + 5;
    return value;
}


export function generateLinkedListWithTower(numberelmenets, maxTowerHeight, firstTowerValue) {
    let head = generateFirstTower(maxTowerHeight, firstTowerValue);
    let firstBottomElem = getBottomElem(head);
    let nextBottomElem = new ListElem(10, firstBottomElem, null, null, null);
    firstBottomElem.next = nextBottomElem;
    generateTower(nextBottomElem, maxTowerHeight);

    return head;
}

export function generateFirstTower(maxTowerHeight, value) { //1-nel nagyobb term.szam
    let head = new ListElem(value, null, null, null, null);
    let actual = new ListElem(value, head, null, null, null, null);
    head.below = actual;
    for (let i=1; i<maxTowerHeight-1; i++) {
        //actual.setNext(new ListElem(value, actual, null));
        actual.below = new ListElem(value, null, null, actual, null);
        actual = actual.below;
    }
    //return actual; //tail, last element
    return head;
}

export function generateHeadOrTail() {
    let random = Math.random();
    console.log("RANDOM: " + random);
    if (random < 0.5) return true;
    else return false;
}

export function generateTower(bottomElem, maxTowerHeight) {
    let height = 1;
    let actualElem = bottomElem;
    while (height < 2) {
        if(generateHeadOrTail()) {
            let newTowerElem = new ListElem(actualElem.value, null, null, null, actualElem);
            actualElem.above = newTowerElem;
            newTowerElem.prev = actualElem.prev.above;
            actualElem.prev.above.next = newTowerElem;
            height++;
            console.log(newTowerElem);
        }
        else break;
    }
}

export function getBottomElem (head) {
    let counter = 0;
    let actualElem = head;
    //console.log("Elem" + counter++ + ": ", actualElem);
    while (actualElem.hasBelow()) { 
        actualElem = actualElem.below;
        //console.log("Elem" + counter++ + ": ", actualElem);
    }
    return actualElem; //bottom
}



//let tail = generateDoubleLinkedList();
//printLinkedListFromTailTowardsStart(tail);

let head = generateLinkedListWithTower(10, 5, 2);
//printLinkedListFromTopToDown(head);


