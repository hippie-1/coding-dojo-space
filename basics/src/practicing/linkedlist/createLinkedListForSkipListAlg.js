//import { generateRandomNumber } from "../util/BasicFunctions";
//import "../util/BasicFunctions.js"

//refactor:
//- use Node instead of ListElem
//- use level instead of height
//- use current instead of actual
//- when inserting new elem, no need to always go to bottom when linking...

//also see other solution which is not a classic linked list only, but uses other datastructues:
//https://www.baeldung.com/cs/skip-lists
//https://www.baeldung.com/java-skiplist#:~:text=In%20this%20article%2C%20we%E2%80%99ll%20explore%20the%20fundamentals%20of,data%20structure%20and%20walk%20through%20a%20Java%20implementation.


export function generateRandomNumber(min, max) {
    let rand = (Math.random() * (max - min + 1) + min);
    return Math.round((Math.random() * (max - min + 1) + min));
}

function calculateValue (someValueToCalculateWith=0) { //if not specified, default 0
    //let value = someValueToCalculateWith + generateRandomNumber(1, 5);
    let value = someValueToCalculateWith + 1;
    return value;
}

export function generateHeadOrTail() {
    let random = Math.random();
    if (random < 0.25) {
        console.log("HEAD");
        return true;
    }       
    else {
        console.log("TAIL");
        return false;
    } 
}

class ListElem { //node, where from you can get to other nodes following its possible directions (prev, next, above below)
    constructor(value, height, prev, next, above, below) {
        this.value = value;
        this.height = height
        this.prev = prev;  //balkéz
        this.next = next;  //jobbkéz
        this.above = above;  //felnyúló kéz
        this.below = below;  //lenyúló
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
    getValami() {
        return this.#valami;
    }
}

export function generateLinkedListWithTowers(numberOfElements, maxTowerHeight, firstTowerValue) {
    let head = new ListElem(firstTowerValue, maxTowerHeight+1, null, null, null, null);
    let actualBottomElemToInsertAfter = generateFirstTower(maxTowerHeight, head);
    for (let i=1; i<numberOfElements; i++) {
        actualBottomElemToInsertAfter = insertElementAfterABottomElem (calculateValue(actualBottomElemToInsertAfter.value), maxTowerHeight, actualBottomElemToInsertAfter);
    }
    return head;
}

export function generateFirstTower(maxTowerHeight, head) { //1-nel nagyobb term.szam
    let value = head.value;
    let actual = new ListElem(value, maxTowerHeight, head, null, null, null, null);
    head.below = actual;
    for (let actualHeight=maxTowerHeight-1; actualHeight>0; actualHeight--) {
        actual.below = new ListElem(value, actualHeight, null, null, actual, null);
        actual = actual.below;
    }
    //return actual; //tail, last element
    return actual;
}

export function insertElementAfterABottomElem (value, maxTowerHeight, bottomElem) {
    let nextBottomElem = new ListElem(value, 1, bottomElem, null, null, null);
    console.log("NEW TOWER element with " + nextBottomElem.value + " value at height " + nextBottomElem.height);
    bottomElem.next = nextBottomElem;
    generateTower(nextBottomElem, maxTowerHeight);
    return nextBottomElem;
}

export function generateTower(bottomElem, maxTowerHeight) { //refactor: no need to always go to the bottom when finding the previous tower element for linking
    let actualHeight = 1;
    let actualElem = bottomElem;
    while (actualHeight < maxTowerHeight) {
        if(generateHeadOrTail()) {
            actualHeight++;
            let newTowerElem = new ListElem(actualElem.value, actualHeight, null, null, null, actualElem); //created with bottom link
            actualElem.above = newTowerElem; //above link set to the new elem
            let relevantElemInPrevTower = null;
            let prevOfBottomElem = bottomElem.prev;
            while (relevantElemInPrevTower==null && prevOfBottomElem!=null) { //figyelem! ha valamit rosszul csinálunk, ez könnyen végtelen ciklusba kerülhet
                relevantElemInPrevTower = getElemAtGivenHeightStartingFromBottom (prevOfBottomElem, actualHeight);
                prevOfBottomElem = prevOfBottomElem.prev; 
            } 
            newTowerElem.prev = relevantElemInPrevTower;
            relevantElemInPrevTower.next = newTowerElem;
            actualElem = newTowerElem;
            prevOfBottomElem = getBottomElem(newTowerElem).prev;
            console.log("NEW TOWER element with " + newTowerElem.value + " value at height " + newTowerElem.height);
        }
        else break;
    }
}

export function getElemAtGivenHeightStartingFromBottom (bottomElem, givenHeight) {
    let actualHeight = 1;
    let actualElem = bottomElem;
    while (actualHeight<givenHeight) {
        actualElem = actualElem.above;
        if (actualElem==null) return null;
        else actualHeight++;
    }
    return actualElem; 
}

export function getBottomElem (head) {
    let actualElem = head;
    while (actualElem.hasBelow()) { 
        actualElem = actualElem.below;
    }
    return actualElem; //bottom
}


//let tail = generateDoubleLinkedList();
//printLinkedListFromTailTowardsStart(tail);

let head = generateLinkedListWithTowers(10, 5, 1);
//printLinkedListFromTopToDown(head);


