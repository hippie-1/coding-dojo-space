import { generateRandomNumber, initRandomNumberArray, saveAlgorithmLog } from './BasicFunctions';

var numberOfComparationSteps = 0;
let numberOfElementExchanges = 0;
export let searchValue = 1;

export function elementExchange(array, index1, index2) {
  var tempValue = array[index1];
  array[index1] = array[index2];
  array[index2]= tempValue;
}

export function Counting (originalNumberArray) {
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

  console.log("Bubble sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges);
  saveAlgorithmLog("BubbleSorting", originalNumberArray.length, numberOfComparationSteps, numberOfElementExchanges);

  return arrayOfNumbers;
}

export function SimpleSwapSorting (originalNumberArray) {
  console.log("Simple-swap sorting starting");
  numberOfComparationSteps = 0;
  numberOfElementExchanges = 0;

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

  console.log("Simple-swap sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges);
  
  return arrayOfNumbers;
}

export function InsertionSorting (originalNumberArray) {
  console.log("Insertion sorting starting");
  numberOfComparationSteps = 0;
  numberOfElementExchanges = 0;

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

  console.log("Insertion sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges);
  
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
  console.log("Max value based sorting staring");
  numberOfComparationSteps = 0;
  numberOfElementExchanges = 0;

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
  console.log("Max value based sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges);
  return arrayOfNumbers;
}

//Searching algorithms

export function LinearSearch (originalNumberArray, searchValue) {
  let indexOfLinearSearch = -1;
  for (let i=0; i<originalNumberArray.length; i++) {
    if (originalNumberArray[i] === searchValue) {
      indexOfLinearSearch = i;
      return indexOfLinearSearch;
    }
  }
  return indexOfLinearSearch;
}
