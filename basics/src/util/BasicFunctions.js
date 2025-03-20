//@ts-check

export function generateRandomNumber(min, max) {
    var rand = (Math.random() * (max - min + 1) + min);
    return Math.round((Math.random() * (max - min + 1) + min));
}

export function initNumberArray (numberOfElements=100, minValueInTheArray=5, maxValueInTheArray=50, direction="RANDOM") { //RANDOM, ASC or DESC, default is RANDOM
    var arrayOfRandomNumbers = [];
    if (direction==='RANDOM') {
        console.log(direction);
        for (let i=0; i<numberOfElements; i++) {
            var num = generateRandomNumber(minValueInTheArray, maxValueInTheArray);
            arrayOfRandomNumbers.push(num);
        }
        return arrayOfRandomNumbers;     
    }
    else return initSortedNumberArray (numberOfElements, minValueInTheArray, maxValueInTheArray, direction);
}

export function initSortedNumberArray (numberOfElements=100, minValueInTheArray=5, maxValueInTheArray=50, direction="ASC") { //ASC or DESC, default is ASC
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
    console.log(arrayOfSortedNumbers);
    return arrayOfSortedNumbers;
}

export function initInputBasedArray (inputArrayString) {
    var arrayOfNumbers = inputArrayString.split(", ");
    return arrayOfNumbers;
}

export function saveAlgorithmLog (algorithmName, numberOfElements, numberOfComparationSteps, numberOfElementExchanges, duration) {
/*    var logs = [];
    var logsStr = localStorage.getItem(algorithmName);
    if (logsStr!==null) {
        logs = JSON.parse(logsStr);
    }
*/
    //var logObject = {"id":algorithmName, numberOfElementsAttr:numberOfElements, numberOfComparationStepsAttr:numberOfComparationSteps, numberOfElementExchangesAttr:numberOfElementExchanges, duration};
    //var logStr = JSON.stringify(logObject);
//    logs.push({numberOfElementsAttr:numberOfElements, numberOfComparationStepsAttr:numberOfComparationSteps, numberOfElementExchangesAttr:numberOfElementExchanges});
    //console.log(algorithmName + " ended with " + logStr);
    //localStorage.setItem(algorithmName, JSON.stringify(logStr));
}

export function sleepAsync(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

export function sleepSync(milliseconds){
    var now = new Date().getTime();
    while(new Date().getTime() < now + milliseconds){ 
        //console.log("Working hard")
        /* Do nothing */ 
    }
}


