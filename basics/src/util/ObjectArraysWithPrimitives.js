import { loadExchangeRates } from '../projects/stock_exchange/controller/workingWithCurrencies.js';

export function MinIndex (originalObjectArray, searchedProperty) {
  let indexOfTheMinimum = 0;
  let minValue = originalObjectArray[0];
  for (let i=0; i<originalObjectArray.length-1; i++) {
    if (originalObjectArray[i][searchedProperty] < minValue[searchedProperty]) { // comparedTo-val használható
      minValue = originalObjectArray[i];
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
  let maxValue = originalObjectArray[0];
  for (let i=0; i<originalObjectArray.length-1; i++) {
    if (originalObjectArray[i][searchedProperty] > maxValue[searchedProperty]) {
      maxValue = originalObjectArray[i];
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

export function InsertionSorting (originalObjectArray, searchedProperty) { // Beszúró rendezés

  let arrayOfObjects = originalObjectArray.slice();
  for (let i=1; i<arrayOfObjects.length; i++) {
    let j = i-1;
    while (j >= 0 && arrayOfObjects[j][searchedProperty] > arrayOfObjects[j+1][searchedProperty]) {
      elementExchange(arrayOfObjects, j, j+1);
      j = j-1
    }
  }  
  return arrayOfObjects;
}


//Searching algorithms

export function LinearSearch (originalObjectArray, searchedProperty, searchValue) {
  let indexOfLinearSearch = -1;
  for (let i=0; i<originalObjectArray.length; i++) {
    if (originalObjectArray[i][searchedProperty] == searchValue) {
      indexOfLinearSearch = i;
      return indexOfLinearSearch;
    }
  }
  return indexOfLinearSearch;
}

export function BinarySearchIterative (sortedArrayOfNumbers, searchedProperty, searchValue) {
  
  let lowestValue = sortedArrayOfNumbers[0][searchedProperty];
  let lowestIndex = 0;
  let highestValue = sortedArrayOfNumbers[sortedArrayOfNumbers.length-1][searchedProperty];
  let highestIndex = sortedArrayOfNumbers.length-1;
  console.log('LOWEST before sorting: ' + lowestValue + ', HIGHEST before sorting: ' + highestValue);
  
  while (lowestIndex <= highestIndex) {
    let midIndex = Math.floor(lowestIndex + (highestIndex - lowestIndex) / 2);
    let midValue = sortedArrayOfNumbers[midIndex][searchedProperty];
    console.log('MIDindex: ' + midIndex + ', MIDvalue: ' + midValue)

    if (midValue == searchValue) {
      return midIndex;
    }
    else if (midValue < searchValue) {
      lowestIndex = midIndex + 1;
    } else {
      highestIndex = midIndex - 1;
    }
  }
  return -1;
}

/*
const currencyObjectsArray = loadExchangeRates();
const linearSearch = LinearSearch(currencyObjectsArray, 'exchangeRate', 6.48)
// const sortedObjectArray = InsertionSorting(currencyObjectsArray, 'exchangeRate');;
// const searchedIndex = BinarySearchIterative(sortedObjectArray, 'exchangeRate', 6.48);;
console.log(linearSearch);
*/
