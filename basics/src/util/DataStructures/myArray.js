export class myArray {
    _dataStore;

    constructor() {
        this._dataStore = [];
    }

    push(newValue) {
        this._dataStore.push(newValue);
    }

    getValue(index) {
        if (this.isEmpty()) {
            throw new Error('private array is empty')
        } else {
            return this._dataStore[index];
        }
    }

    removeByIndex(index) {
    //shiftArrayElementsLeft(arrayInput, relevantIndex) VAGY
    //copyArrayElementsExceptTheElementToBeRemoved (arrayInput, relevantIndex)
        if (this.isEmpty()) {
            throw new Error('private array is empty')
        } else {
            for (let i=index; i<this._dataStore.length-1; i++) {
                this._dataStore[i] = this._dataStore[i+1];
                this._dataStore.pop();
            }
        }
    }

    getSize() {
         return this._dataStore.length;
    }

    isEmpty() {
        return this._dataStore.length == 0;
    }
    
    getIndex(searchValue) {
        if (this.isEmpty()) {
            throw new Error('private array is empty')
        } else { // using linear search here:
            let indexOfLinearSearch = -1;
            for (let i=0; i<this._dataStore.length; i++) {
                if (this._dataStore[i] == searchValue) {
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
        console.log(this._dataStore);
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