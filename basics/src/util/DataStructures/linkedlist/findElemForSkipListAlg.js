import { generateLinkedListWithTowers } from './createLinkedListForSkipListAlg.js'

let head = generateLinkedListWithTowers(10, 5, 1);

function findElemForSkipListAlg (searchValue) {
    let actualElem = head;
    let counter = 1;
    if(actualElem.value == searchValue) {
        return actualElem;
    }
    actualElem = actualElem.below;
    while (actualElem.hasBelow()) {
        counter++;
        if (actualElem.value == searchValue) {
            actualElem = actualElem.next;
            console.log("Found element withe value: ", actualElem.value);
            console.log("Found in " + counter + " steps");
            return actualElem;
        }
        if (actualElem.hasNext() && searchValue >= actualElem.next.value) {
            actualElem = actualElem.next;
        }
        else {
            actualElem = actualElem.below;
        }
    }
    while (actualElem != null && actualElem.value < searchValue) {
        counter++;
        if (!actualElem.hasNext()) {
            break;
        }
        actualElem = actualElem.next;
    }
    // console.log('Element found or the smallest closer: ', actualElem);
    console.log("Number of steps: " + counter);

    return actualElem; 
}


console.log(".......................");
let findElementResult = findElemForSkipListAlg(6);
console.log("Found element: " + findElementResult.value + " value at level " + findElementResult.height);