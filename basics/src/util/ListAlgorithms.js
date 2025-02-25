import { generateRandomNumber, initRandomNumberArray } from './BasicFunctions';

var numberOfComparationSteps = 0;
var numberOfElementExchanges = 0;


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