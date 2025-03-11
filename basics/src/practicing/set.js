import { removeElement, linearSearch } from './addAndRemoveElement.js';

class mySet {
    #privateArray = [];
    #maxSize = 0;

    constructor (maxSize=5) {
        if (maxSize < 0) {
            throw new Error("Stack size cannot be nagative!")
        }
        this.#privateArray = [];
        this.#maxSize = maxSize;
    }

    insertNewElem (newElem) {
        if(this.#privateArray.length > this.#maxSize-1) {
            throw new Error ('Size of the set will overflow during insertion.')
        }
        let alreadyInArray = false;
        for (let i=0; i<this.#privateArray.length; i++ ) {
            if (this.#privateArray[i] == newElem) {
                alreadyInArray = true;
                break;
            }
        }
        if(!alreadyInArray) {
            this.#privateArray.push(newElem);
        }
    }

    insertNewElements (inputArray) {
        for (let i=0; i<inputArray.length; i++ ) {
            let alreadyInArray = false;
            for (let j=0; j<this.#privateArray.length; j++ ) {
                if (this.#privateArray[j] == inputArray[i]) {
                    alreadyInArray = true;
                    break;
                }
            }
            if(!alreadyInArray) {
                if (this.#privateArray.length == this.#maxSize) {
                    throw new Error(`Size of the Set overflows at the element ${inputArray[i]}`)
                }
                this.#privateArray.push(inputArray[i]);
            }
        }
    }

    removeElem (elemToBeRemoved) {
        this.#privateArray = removeElement(this.#privateArray, elemToBeRemoved);
    }

    getElements () {
        return this.#privateArray.slice();
    }

    containsElem (searchValue) {
        if (linearSearch(this.#privateArray, searchValue) == -1) {
            return false;
        } else {
            return true;
        }
    }

    getSize () {
        return this.#privateArray.length;
    }
}

if (process.argv[1] === import.meta.filename) {
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
}