import { generateDoubleLinkedList, printLinkedListFromHeadTowardsEnd } from "./createDoubleLinkedList.js";

let head = generateDoubleLinkedList(100000);
//printLinkedListFromHeadTowardsEnd(head);


function findElement (value) {
    let actualElem = head;
    let counter = 1;
    if(actualElem.value == value) {
        return actualElem;
    }
    while (actualElem.hasNext()) {
        counter++;
        actualElem = actualElem.getNext();
        if (actualElem.value == value) {
            console.log("Found element withe value: ", actualElem.value);
            console.log("Found in " + counter + " steps");
            return actualElem;
        }
    } 
    console.log("Not found in " + counter + " steps");
    return null; 
}


console.log(".......................");
let findElementResult = findElement(450000);
console.log('FOUND ELEMENT: ', findElementResult);
