import { generateRandomNumber, initRandomNumberArray } from './BasicFunctions';

var numberOfComparationSteps = 0;
var numberOfElementExchanges = 0;
export let searchValue = 1;

export function elementExchange(element1, element2) {
    var tempValue = element1;
    element1 = element2;
    element2= tempValue;
}

export function BubbleSorting (originalNumberArray) {
    console.log("Bubble sorting staring");
    numberOfComparationSteps = 0;
    numberOfElementExchanges = 0;

    var arrayOfNumbers = originalNumberArray.slice();
    for (let i=arrayOfNumbers.length-1; i>0; i--) {
      for (let j=0; j<=i-1; j++) {
        numberOfComparationSteps++;
        if (arrayOfNumbers[j] > arrayOfNumbers[j+1]) {
            numberOfElementExchanges++;
            var tempValue = arrayOfNumbers[j];
            arrayOfNumbers[j] = arrayOfNumbers [j+1];
            arrayOfNumbers [j+1] = tempValue;
            //elementExchange(arrayOfNumbers[j], arrayOfNumbers [j+1]);
        }
      }
    }

    console.log("Bubble sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges);

    return arrayOfNumbers;
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

export function LinearSearch (originalNumberArray) {
  let indexOfLinearSearch = -1;
  for (let i=0; i<originalNumberArray.length; i++) {
    if (originalNumberArray[i] === searchValue) {
      indexOfLinearSearch = i;
      return indexOfLinearSearch;
    }
  }
  return indexOfLinearSearch;
}
