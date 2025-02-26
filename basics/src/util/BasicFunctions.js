
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

export function initSortedNumberArray (numberOfElements, minValueInTheArray, maxValueInTheArray, direction) { //ASC or DESC, default is ASC
    var arrayOfSortedNumbers = [];
    let difference = (maxValueInTheArray - minValueInTheArray) / numberOfElements
    let firstValue = Math.round(minValueInTheArray); //nearest integer
    if (direction === "DESC") {
        firstValue = Math.round(maxValueInTheArray);
        difference = -1*difference;
    }
    arrayOfSortedNumbers.push(Math.round(firstValue));
    for (let i=1; i<numberOfElements; i++) {
        arrayOfSortedNumbers.push(Math.round(firstValue+difference*i));
    }
    return arrayOfSortedNumbers;
}

export function initInputBasedArray (inputArrayString) {
    var arrayOfNumbers = inputArrayString.split(", ");
    return arrayOfNumbers;
}

export function saveAlgorithmLog (algorithmName, numberOfElements, numberOfComparationSteps, numberOfElementExchanges) {
/*    var logs = [];
    var logsStr = localStorage.getItem(algorithmName);
    if (logsStr!==null) {
        logs = JSON.parse(logsStr);
    }
*/
    var logObject = {numberOfElementsAttr:numberOfElements, numberOfComparationStepsAttr:numberOfComparationSteps, numberOfElementExchangesAttr:numberOfElementExchanges};
    var logStr = JSON.stringify(logObject);
//    logs.push({numberOfElementsAttr:numberOfElements, numberOfComparationStepsAttr:numberOfComparationSteps, numberOfElementExchangesAttr:numberOfElementExchanges});
    console.log(algorithmName + " ended with " + logStr);
    localStorage.setItem(algorithmName, JSON.stringify(logStr));
}