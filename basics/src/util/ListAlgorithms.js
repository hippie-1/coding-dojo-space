import { generateRandomNumber, initRandomNumberArray, saveAlgorithmLog } from './BasicFunctions';

var numberOfComparationSteps = 0;
let numberOfElementExchanges = 0;

export function elementExchange(array, ind1, ind2) {
    let tempValue = array[ind1];
    array[ind1] = array[ind2];
    array[ind2]= tempValue;
}


export function BubbleSorting (originalNumberArray) {
    //console.log("Bubble sorting staring");
    numberOfComparationSteps = 0;
    numberOfElementExchanges = 0;

    var copyOfOriginalNumberArray = originalNumberArray.slice();

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

    saveAlgorithmLog("BubbleSorting", originalNumberArray.length, numberOfComparationSteps, numberOfElementExchanges);

    return arrayOfNumbers;
  }


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
        console.log();
      }
      var tempValue = arrayOfNumbers[i];
      arrayOfNumbers[i] = arrayOfNumbers [maxIndex];
      arrayOfNumbers [maxIndex] = tempValue;
      //elementExchange(arrayOfNumbers[i], arrayOfNumbers [maxIndex]);
      
    }

    console.log("Max value based sorting ended with numberOfComparationSteps:" + numberOfComparationSteps + ", numberOfElementExchanges:" + numberOfElementExchanges);

    return arrayOfNumbers;
  }