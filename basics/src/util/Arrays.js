import { saveAlgorithmLog } from './BasicFunctions.js';

var numberOfComparationSteps = 0;
let numberOfElementExchanges = 0;
export let searchValue = -12;

export function elementExchange(array, index1, index2) {
  var tempValue = array[index1];
  array[index1] = array[index2];
  array[index2]= tempValue;
}

export function CountingOnNegativeNumbers (originalNumberArray) {
  let counterOfNegativeNumbers = 0;
  for (let i=0; i<originalNumberArray.length; i++) {
      if (originalNumberArray[i] < 0) {
        counterOfNegativeNumbers ++;
      }
  }
  return counterOfNegativeNumbers;
}

export function Max (originalNumberArray) {
  let maxValue = originalNumberArray[0];
  for (let i=0; i<originalNumberArray.length-1; i++) {
    if (originalNumberArray[i] > maxValue) {
            maxValue = originalNumberArray[i];
    }
  }
  return maxValue;
}
      
export function MaxIndex (originalNumberArray) {
  let indexOfTheMaximum = originalNumberArray[0];
  const maxValue = Max(originalNumberArray);
  for (let i=0; i<originalNumberArray.length; i++) {
    if (originalNumberArray[i] === maxValue) {
      indexOfTheMaximum = i;
    }
  }
  return indexOfTheMaximum
}
  
export function Min (originalNumberArray) {
  let minValue = originalNumberArray[0];
  for (let i=0; i<originalNumberArray.length-1; i++) {
    if (originalNumberArray[i] < minValue) {
      minValue = originalNumberArray[i];
    }
  }
  return minValue;
}
  
export function MinIndex (originalNumberArray) {
  let indexOfTheMinimum = originalNumberArray[0];
  const minValue = Min(originalNumberArray);
  for (let i=0; i<originalNumberArray.length; i++) {
    if (originalNumberArray[i] === minValue) {
        indexOfTheMinimum = i;
      }
  }
  return indexOfTheMinimum;
}


//Sorting algorithms

  
export function BubbleSorting (originalNumberArray) {
  console.log("Bubble sorting starting");
  numberOfComparationSteps = 0;
  numberOfElementExchanges = 0;
  var startTime = Date.now();

  var arrayOfNumbers = originalNumberArray.slice();
  for (let i=arrayOfNumbers.length-1; i>0; i--) {
    for (let j=0; j<=i-1; j++) {
      numberOfComparationSteps++;
      if (arrayOfNumbers[j] > arrayOfNumbers[j+1]) {
        numberOfElementExchanges++;
        elementExchange(arrayOfNumbers, j, j+1);
      }
    }
  }
  var endTime = Date.now();
  var duration = endTime-startTime;

  console.log("Bubble sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges + " duration:" + duration + "ms");
  saveAlgorithmLog("BubbleSorting", originalNumberArray.length, numberOfComparationSteps, numberOfElementExchanges, endTime-startTime);

  return arrayOfNumbers;
}

export function SimpleSwapSorting (originalNumberArray) { // Egyszerű cserés rendezés
  console.log("Simple-swap sorting starting");
  numberOfComparationSteps = 0;
  numberOfElementExchanges = 0;
  var startTime = Date.now();  

  var arrayOfNumbers = originalNumberArray.slice();
  for (let i=0; i<arrayOfNumbers.length; i++) {
    for (let j=i+1; j<arrayOfNumbers.length; j++) {
      numberOfComparationSteps++;
      if (arrayOfNumbers[i] > arrayOfNumbers[j]) {
        numberOfElementExchanges++;
        elementExchange(arrayOfNumbers, i, j)
      }
    }
  }

  var endTime = Date.now();
  var duration = endTime-startTime;
  console.log("Simple-swap sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges + " duration:" + duration + "ms");
  saveAlgorithmLog("SimpleSwapSorting", originalNumberArray.length, numberOfComparationSteps, numberOfElementExchanges, endTime-startTime);
 
  return arrayOfNumbers;
}

export function InsertionSorting (originalNumberArray) { // Beszúró rendezés
  console.log("Insertion sorting starting");
  numberOfComparationSteps = 0;
  numberOfElementExchanges = 0;
  var startTime = Date.now();  

  var arrayOfNumbers = originalNumberArray.slice();
  for (let i=1; i<arrayOfNumbers.length; i++) {
    let j = i-1;
    numberOfComparationSteps++;
    while (j >= 0 && arrayOfNumbers[j] > arrayOfNumbers[j+1]) {
      numberOfElementExchanges++;
      elementExchange(arrayOfNumbers, j, j+1);
      j = j-1
    }
  }
  var endTime = Date.now();
  var duration = endTime-startTime;
  console.log("Insertion sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges + " duration:" + duration + "ms");
  saveAlgorithmLog("InsertionSorting", originalNumberArray.length, numberOfComparationSteps, numberOfElementExchanges, endTime-startTime);
  
  return arrayOfNumbers;
}

// export function MinimumSelectionSorting (originalNumberArray) {
//   console.log("Minimum-selection sorting starting");
//   numberOfComparationSteps = 0;
//   numberOfElementExchanges = 0;

//   var arrayOfNumbers = originalNumberArray.slice();
//   for (let i=0; i<arrayOfNumbers.length; i++) {
//     let min = i;
//     for (let j=i+1; j<=arrayOfNumbers.length; j++) {
//       if(arrayOfNumbers[min] > arrayOfNumbers[j]) {
//         min = j;
//       }
//     }
//   }
// }

export function MaxValueBasedSorting (originalNumberArray) {
  console.log("Max value based sorting staring"); // Maximumkiválasztásos rendezés
  numberOfComparationSteps = 0;
  numberOfElementExchanges = 0;
  var startTime = Date.now();

  var arrayOfNumbers = originalNumberArray.slice();
  for (let i=arrayOfNumbers.length-1; i>=0; i--) {
    let maxIndex = i;
    for (let j=0; j<i; j++) {
      numberOfComparationSteps++;
      if (arrayOfNumbers[j] > arrayOfNumbers[maxIndex]) {
          numberOfElementExchanges++;
          maxIndex = j;
      }
    }
    elementExchange(arrayOfNumbers, maxIndex, i);
  }
  var endTime = Date.now();
  var duration = endTime-startTime;
  console.log("Max-value-based sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges + " duration:" + duration + "ms");
  saveAlgorithmLog("MaxValueBasedSorting", originalNumberArray.length, numberOfComparationSteps, numberOfElementExchanges, endTime-startTime);

  return arrayOfNumbers;
}

//Searching algorithms

export function LinearSearch (originalNumberArray, searchValue) {
  let indexOfLinearSearch = -1;
  for (let i=0; i<originalNumberArray.length; i++) {
    if (originalNumberArray[i] == searchValue) {
      indexOfLinearSearch = i;
      return indexOfLinearSearch;
    }
  }
  return indexOfLinearSearch;
}

export function BinarySearchIterative (sortedArrayOfNumbers, searchValue) {
  //console.log('Binary search starting')

  let lowestValue = sortedArrayOfNumbers[0];
  let lowestIndex = sortedArrayOfNumbers.indexOf(lowestValue); // szimplán 0 is lehetne
  let highestValue = sortedArrayOfNumbers[sortedArrayOfNumbers.length-1];
  let highestIndex = sortedArrayOfNumbers.indexOf(highestValue); // sortedArrayOfNumbers.length -1 is lehetne
  //console.log('1st LOWEST: ' + lowestValue + ', 1st HIGHEST: ' + highestValue);

  while (lowestIndex <= highestIndex) {
    let midIndex = Math.floor(lowestIndex + (highestIndex - lowestIndex) / 2);
    let midValue = sortedArrayOfNumbers[midIndex];
    //console.log('MIDindex: ' + midIndex + ', MIDvalue: ' + midValue)

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



export function BinarySearchRecursive (sortedArrayOfNumbers, lowestIndex, highestIndex, searchValue) {

  if (lowestIndex <= highestIndex) {
    let midIndex = Math.floor(lowestIndex + (highestIndex - lowestIndex) / 2);
    if (sortedArrayOfNumbers[midIndex] == searchValue) {
      return sortedArrayOfNumbers.indexOf(sortedArrayOfNumbers[midIndex]) // érdemes lenne a midValue-t külön változóba tenni
    }
    else if (sortedArrayOfNumbers[midIndex] > searchValue) {
      return BinarySearchRecursive (sortedArrayOfNumbers, lowestIndex, midIndex-1, searchValue)
    } else {
      return BinarySearchRecursive(sortedArrayOfNumbers, midIndex+1, highestIndex, searchValue)
    }
  }
  return -1;
}


export function linearSearchBySmallerCondition (arrayInput, element) {
  let arr = arrayInput.slice();
  let relevantIndex = 0;

  //1. where to insert
  for (let i=0; i<arr.length; i++) {
    console.log(i);  
    if (arr[i]>element) { //condition: >
      relevantIndex = i;
      return relevantIndex;
    }
  }    
}

export function shiftArrayElementsLeft(arrayInput, relevantIndex) { //between the relevantIndex and the last index
  let arr = arrayInput.slice();
  for (let i = relevantIndex+1; i<arr.length; i++) {    
    arr[i-1] = arr[i];
  }
  arr = arr.slice(0, -1);
  return arr;
}

export function shiftArrayElementsRight(arrayInput, relevantIndex) {
  let arr = arrayInput.slice();
  arr[arr.length] = 0;
  //for (let i = relevantIndex; i<=arr.length-1; i++) {    
  for (let i = arr.length-1; i>relevantIndex; i--) {    
     arr[i] = arr[i-1];
  }
  return arr;
}


export function copyArrayElementsExceptTheElementToBeRemoved (arrayInput, relevantIndex) {
  let arr = [];
  for (let i=0; i<arrayInput.length; i++) {
    if(i !== relevantIndex) {
      arr.push(arrayInput[i]);
    }
  }
  return arr;
}

export function removeElement(arrayInput, elementIndex) {
  let arr = copyArrayElementsExceptTheElementToBeRemoved(arrayInput, elementIndex); //2. remove the element
  return arr;
}

export function insertSortedArray(arrayInput, element) {

  let arr = arrayInput.slice(); 

  let relevantIndex = linearSearchBySmallerCondition(arr, element); //1. find the relevant index where the new element should be inserted
  arr = shiftArrayElementsRight(arr, relevantIndex); //2. shift those elements right where the index is higher then the relevantIndex
  arr[relevantIndex] = element; //3. the value of the relevant index = element
  return arr; //4. return modified arra
}