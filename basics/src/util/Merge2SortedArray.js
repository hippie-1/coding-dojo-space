import { insertSortedArray, removeElement } from './Arrays.js';

export function merge2SortedArrays (sortedArray1, sortedArray2) {
    for (let b=sortedArray2.length-1; b>=0; b--) {
        if(sortedArray1[sortedArray1.length-1] > sortedArray2[b]) {
            const lastOfA = sortedArray1[sortedArray1.length-1];
            sortedArray1 = removeElement(sortedArray1, sortedArray1.length-1);
            sortedArray1 = insertSortedArray(sortedArray1, sortedArray2[b]);
            sortedArray2 = removeElement(sortedArray2, b);
            sortedArray2 = insertSortedArray(sortedArray2, lastOfA);
        }
        console.log(sortedArray1, sortedArray2);
    }
}

// console.log(insertSortedArray([0, 1, 2, 4, 5], 96));
const test = merge2SortedArrays([1, 5, 9, 10, 15, 20], [2, 3, 8, 13]);
console.log(test);
