import { myArray } from "./myArray.js";
import { BinarySearchIterative, shiftArrayElementsRight, linearSearchBySmallerCondition } from '../Arrays.js';

export class mySortedArray extends myArray{

    constructor() {
        super();
    }

    push(element) { //original function is insertSortedArray()
        if (this.isEmpty()) {
            this._dataStore.push(element);
        } else {
            let relevantIndex = linearSearchBySmallerCondition(this._dataStore, element);
            this._dataStore = shiftArrayElementsRight(this._dataStore, relevantIndex); 
            this._dataStore[relevantIndex] = element;
        }
    }

    getIndex(searchValue) {
        if (this.isEmpty()) {
            throw new Error('private array is empty')
        } else { 
            return BinarySearchIterative(this._dataStore, searchValue)
        }
    }

    removeByValue(searchValue) {
        if (this.isEmpty()) {
            throw new Error('private array is empty')
        } else {
            const searchValueIndex = this.getIndex(searchValue);
            this.removeByIndex(searchValueIndex);
        }
    }
    
}

let testArray = new mySortedArray();
const array = [22, -5, 0, 100, 7.77];
array.map(e => testArray.push(e));
// const isEmpty = testArray.isEmpty();
// const getSize = testArray.getSize();
// const testGetValue = testArray.getValue(3);
// const testRemoveByValue = testArray.removeByValue(testGetValue);
// testArray.toString();
// console.log(isEmpty);
// console.log(getSize);
// console.log(testGetValue);
testArray.toString();