export class myArray {
    #dataStore;

    constructor() {
        this.#dataStore = [];
    }

    push(newValue) {
        this.#dataStore.push(newValue);
    }

    getValue(index) {
        if (this.isEmpty()) {
            throw new Error('private array is empty')
        } else {
            return this.#dataStore[index];
        }
    }

    removeByIndex(index) {
    //shiftArrayElementsLeft(arrayInput, relevantIndex) VAGY
    //copyArrayElementsExceptTheElementToBeRemoved (arrayInput, relevantIndex)
        if (this.isEmpty()) {
            throw new Error('private array is empty')
        } else {
            for (let i=index; i<this.#dataStore.length-1; i++) {
                this.#dataStore[i] = this.#dataStore[i+1];
                this.#dataStore.pop();
            }
        }
    }

    getSize() {
         return this.#dataStore.length;
    }

    isEmpty() {
        return this.#dataStore.length == 0;
    }
    
    getIndex(searchValue) {
        if (this.isEmpty()) {
            throw new Error('private array is empty')
        } else { // using linear search here:
            let indexOfLinearSearch = -1;
            for (let i=0; i<this.#dataStore.length; i++) {
                if (this.#dataStore[i] == searchValue) {
                    indexOfLinearSearch = i;
                    return indexOfLinearSearch;
                }
            }
            return indexOfLinearSearch;
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
    
    
    toString() {
        console.log(this.#dataStore);
    }
}


// let testArray = new myArray();
// const array = [22, -5, 0, 100, 7.77];
// array.map(e => testArray.push(e));
// const isEmpty = testArray.isEmpty();
// const getSize = testArray.getSize();
// const testGetValue = testArray.getValue(3);
// const testRemoveByValue = testArray.removeByValue(testGetValue);
// // testArray.toString();
// // console.log(isEmpty);
// // console.log(getSize);
// // console.log(testGetValue);
// testArray.toString();