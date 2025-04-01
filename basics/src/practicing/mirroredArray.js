function mirrorAnArrayByCenter (inputArray) { // középpontos tükrözés
    let mirroredArray = inputArray;
    for (let i=0; i<inputArray.length/2; i++) {
            let tempValue = inputArray[i];
            mirroredArray.splice(i, 1, mirroredArray[mirroredArray.length-1-i]);
            mirroredArray.splice(mirroredArray.length-1-i, 1, tempValue);
    }
    return mirroredArray;
}

console.log(mirrorAnArrayByCenter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(mirrorAnArrayByCenter([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function mirrorAnArrayByAnAxis (inputArray) { // tengelyes tükrözés
    let mirroredArray = [];
    for (let i=inputArray.length-1; i>=0; i--) {
        mirroredArray.push(inputArray[i]);
    }
    return mirroredArray;
}

console.log(mirrorAnArrayByAnAxis([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(mirrorAnArrayByAnAxis([1, 2, 3, 4, 5, 6, 7, 8, 9]));
