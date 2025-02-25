
export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function initRandomNumberArray (numberOfElements, minValueInTheArray, maxValueInTheArray) {
    var arrayOfRandomNumbers = [];
    for (let i=0; i<numberOfElements; i++) {
        arrayOfRandomNumbers.push(generateRandomNumber(minValueInTheArray, maxValueInTheArray))
    }
    return arrayOfRandomNumbers;
  }

  export function initInputBasedArray (inputArrayString) {
    var arrayOfNumbers = inputArrayString.split(", ");
    return arrayOfNumbers;
  }