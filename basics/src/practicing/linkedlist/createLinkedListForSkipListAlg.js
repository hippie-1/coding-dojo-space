//import { generateRandomNumber } from "../util/BasicFunctions";
//import "../util/BasicFunctions.js"

export function generateRandomNumber(min, max) {
    let rand = (Math.random() * (max - min + 1) + min);
    return Math.round((Math.random() * (max - min + 1) + min));
}

class ListElem {
    constructor(value, height, prev, next, above, below) {
        this.value = value;
        this.height = height
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
    let value = someValueToCalculateWith + 1;
    return value;
}


export function generateLinkedListWithTower(numberOfElements, maxTowerHeight, firstTowerValue) {
    let head = generateFirstTower(maxTowerHeight, firstTowerValue);
    let firstBottomElem = getBottomElem(head);
    for (let i=0; i<numberOfElements-1; i++) {
        insertElementAfterABottomElem (calculateValue(firstBottomElem.value), maxTowerHeight, firstBottomElem);
    }
    return head;
}

export function insertElementAfterABottomElem (value, maxTowerHeight, bottomElem) {
    let nextBottomElem = new ListElem(value, 1, bottomElem, null, null, null);
    bottomElem.next = nextBottomElem;
    generateTower(nextBottomElem, maxTowerHeight);
    // return nextBottomElem;
}

export function generateFirstTower(maxTowerHeight, value) { //1-nel nagyobb term.szam
    let head = new ListElem(value, maxTowerHeight, null, null, null, null);
    let actual = new ListElem(value, maxTowerHeight-1, head, null, null, null, null);
    head.below = actual;
    for (let actualHeight=maxTowerHeight-1; actualHeight>0; actualHeight--) {
        actual.below = new ListElem(value, actualHeight, null, null, actual, null);
        actual = actual.below;
    }
    //return actual; //tail, last element
    return head;
}

export function generateHeadOrTail() {
    let random = Math.random();
    console.log("RANDOM: " + random);
    if (random < 1) return true;
    else return false;
}

export function generateTower(bottomElem, maxTowerHeight) {
    let actualHeight = 1;
    let actualElem = bottomElem;
    while (actualHeight < maxTowerHeight) {
        if(generateHeadOrTail()) {
            let newTowerElem = new ListElem(actualElem.value, actualHeight, null, null, null, actualElem); //created with bottom link
            actualElem.above = newTowerElem; //above link set to the new elem
            let prevOfBottomElem = bottomElem.prev;
            let relevantElemInPrevTower = null;
            while (relevantElemInPrevTower==null) { //figyelem! ha valamit rosszul csinálunk, ez könnyen végtelen ciklusba kerülhet
                relevantElemInPrevTower = getElemAtGivenHeightStartingFromBottom (prevOfBottomElem, actualHeight);
                bottomElem = bottomElem.prev;
            } 
            newTowerElem.prev = relevantElemInPrevTower;
            relevantElemInPrevTower.next = newTowerElem;
            actualHeight++;
            console.log(newTowerElem);
        }
        else break;
    }
}

export function getBottomElem (head) {
    let counter = 0;
    let actualElem = head;
    while (actualElem.hasBelow()) { 
        actualElem = actualElem.below;
    }
    return actualElem; //bottom
}

export function getElemAtGivenHeightStartingFromBottom (bottomElem, givenHeight) {
    let actualHeight = 0;
    let actualElem = bottomElem;
    while (actualHeight<=givenHeight) { 
        if (actualElem.hasAbove()) {
            actualElem = actualElem.above;
            actualHeight++;
        }
        else return null;
    }
    return actualElem; 
}



//let tail = generateDoubleLinkedList();
//printLinkedListFromTailTowardsStart(tail);

let head = generateLinkedListWithTower(10, 5, 1);
//printLinkedListFromTopToDown(head);


