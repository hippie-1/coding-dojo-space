import { mySet } from './set.js';


const newSet = new mySet(10);
let inputArray = [1, 5, 8, 7, 8, 9, 8, 6, 7, 10, 12, 12, 15, 18, 22, 4, 3];
try {
    newSet.insertNewElements(inputArray);
    }
catch (e) {
    console.log(e.message);
};
try {
    let elementsOfNewSet = newSet.getElements();
    console.log(`Elements of the new set:  ${elementsOfNewSet}`);
}
catch (e) {
    console.log(e.message);
}
try {
    newSet.removeElem(10);
    let setAfterRemove = newSet.getElements();
    console.log(`Elements after removing 10:  ${setAfterRemove}`);
}
catch (e) {
    console.log(e.message);
}
