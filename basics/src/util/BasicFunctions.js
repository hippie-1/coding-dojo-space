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

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function formatDateTime(date) {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate() + '_';
    let year = date.getFullYear();
    let hour = date.getHours() + "h";
    let min = date.getMinutes() + "m";
    let sec = date.getSeconds() + "s";

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    if (hour.length < 2) 
        hour = '0' + hour;
    if (min.length < 2) 
        min = '0' + min;        
    if (sec.length < 2) 
        sec = '0' + sec;         
    return [year, month, day, hour, min, sec].join('');
}

export function formatDate(date) {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('');
}

export function stringToHash(string) {

    let hash = 0;

    if (string.length == 0) return hash;

    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        //console.log("CHAR: ", char);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}

// String printing in hash
//let gfg = "Viada Réka"
//console.log(stringToHash(gfg));