import { loadExchangeRates } from '../projects/stock_exchange/controller/workingWithCurrencies.js';
import { Currency } from '../projects/stock_exchange/model/currency.js';


export function MinIndex (originalObjectArray, searchedProperty) {
  let indexOfTheMinimum = 0;
  let minObject = originalObjectArray[0];
  for (let i=0; i<originalObjectArray.length-1; i++) {
    if (originalObjectArray[i].compareTo(minObject, searchedProperty) < 0) {
      minObject = originalObjectArray[i];
      indexOfTheMinimum = i;
    }
  }  
  return indexOfTheMinimum;
}

export function Min (originalObjectArray, searchedProperty) {
  let minIndex = MinIndex(originalObjectArray, searchedProperty)
  let minValue = originalObjectArray[minIndex];    
  return minValue;
}


export function MaxIndex (originalObjectArray, searchedProperty) {
  let indexOfTheMaximum = 0;
  let maxObject = originalObjectArray[0];
  for (let i=0; i<originalObjectArray.length-1; i++) {
    if (originalObjectArray[i].compareTo(maxObject, searchedProperty) > 0) {
      maxObject = originalObjectArray[i];
      indexOfTheMaximum = i;
    }
  }  
  return indexOfTheMaximum;
}

export function Max (originalObjectArray, searchedProperty) {
  let maxIndex = MaxIndex(originalObjectArray, searchedProperty)
  let maxValue = originalObjectArray[maxIndex];    
  return maxValue;
}


// Sorting algorithm

export function elementExchange(array, index1, index2) {
  let tempValue = array[index1];
  array[index1] = array[index2];
  array[index2] = tempValue;
}

export function InsertionSorting (originalObjectArray, property) { // Beszúró rendezés

  let arrayOfObjects = originalObjectArray.slice();
  for (let i=1; i<arrayOfObjects.length; i++) {
    let j = i-1;
    while (j >= 0 && arrayOfObjects[j].compareTo(arrayOfObjects[j+1], property) > 0) {
      elementExchange(arrayOfObjects, j, j+1);
      j = j-1
    }
  }  
  return arrayOfObjects;
}


//Searching algorithms

export function LinearSearch (originalObjectArray, searchObject) {
  let indexOfLinearSearch = -1;
  console.log(searchObject);
  for (let i=0; i<originalObjectArray.length; i++) {
    if (originalObjectArray[i].equals(searchObject)) {
      indexOfLinearSearch = i;
      return indexOfLinearSearch;
    }
  }
  return indexOfLinearSearch;
}

export function BinarySearchIterative (sortedArrayOfNumbers, searchObject) {
  
  let lowestValue = sortedArrayOfNumbers[0];
  let lowestIndex = 0;
  let highestValue = sortedArrayOfNumbers[sortedArrayOfNumbers.length-1];
  let highestIndex = sortedArrayOfNumbers.length-1;
  console.log('LOWEST before sorting: ' + lowestValue + ', HIGHEST before sorting: ' + highestValue);
  
  while (lowestIndex <= highestIndex) {
    let midIndex = Math.floor(lowestIndex + (highestIndex - lowestIndex) / 2);
    let midObject = sortedArrayOfNumbers[midIndex];
    console.log('MIDindex: ' + midIndex + ', MIDObject: ' + JSON.stringify(midObject));

    if (midObject.equals(searchObject)) {
      return midIndex;
    }
    else if (midObject.compareTo(searchObject) < 0 ) {
      lowestIndex = midIndex + 1;
    } else {
      highestIndex = midIndex - 1;
    }
  }
  return -1;
}

/*
const currency = new Currency('2025. 03. 06.', 'TRY', 10.17);
const currencyObjectsArray = loadExchangeRates();
const sortedObjectArray = InsertionSorting(currencyObjectsArray, 'date');;
// const linearSearch = LinearSearch(sortedObjectArray, currency);
// const binarySearch = BinarySearchIterative(sortedObjectArray, currency)
// const searchedIndex = BinarySearchIterative(sortedObjectArray, 'exchangeRate', 6.48);;
console.log(sortedObjectArray);
*/
