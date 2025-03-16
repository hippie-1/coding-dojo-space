
function linearSearchByCondition (arrayInput, element) {
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

function linearSearch (arrayInput, element) {
    let relevantIndex = -1;
    for (let i=0; i<arrayInput.length; i++) {
        if(arrayInput[i] === element) {
            relevantIndex = i;
            return relevantIndex;
        }
      }
    return relevantIndex;
}

function shiftArrayElementsRight(arrayInput, relevantIndex) {
    let arr = arrayInput.slice();
    arr[arr.length] = 0;
    //for (let i = relevantIndex; i<=arr.length-1; i++) {    
    for (let i = arr.length-1; i>relevantIndex; i--) {    
       arr[i] = arr[i-1];
    }
    return arr;
}

function insert_sorted(arrayInput, element) {

    let arr = arrayInput.slice(); 

    let relevantIndex = linearSearchByCondition(arr, element); //1. find the relevant index where the new element should be inserted
    arr = shiftArrayElementsRight(arr, relevantIndex); //2. shift those elements right where the index is higher then the relevantIndex
    arr[relevantIndex] = element; //3. the value of the relevant index = element
    return arr; //4. return modified arra
}

function shiftArrayElementsLeft(arrayInput, relevantIndex) { //between the relevantIndex and the last index
  let arr = arrayInput.slice();
  for (let i = relevantIndex+1; i<arr.length; i++) {    
    arr[i-1] = arr[i];
  }
  arr = arr.slice(0, -1);
  return arr;
}

function copyArraElementsExceptTheElementToBeRemoved (arrayInput, relevantIndex) {
    let arr = [];
    for (let i=0; i<arrayInput.length; i++) {
      if(i !== relevantIndex) {
        arr.push(arrayInput[i]);
      }
    }
    return arr;
}

function removeElement(arrayInput, element) {
    let relevantIndex = linearSearch(arrayInput, element); //1. find the index of the removing element
    let arr = copyArraElementsExceptTheElementToBeRemoved(arrayInput, relevantIndex); //2. remove the element
    return arr;
}

let origSortedArray = [1, 3, 5, 7, 11, 13, 21, 172, 891];
let modifiedArray = insert_sorted( origSortedArray, 10);
console.log("ORIG: ", origSortedArray);
//console.log("MOD: ", modifiedArray);
modifiedArray = removeElement( origSortedArray, 5); //number 5
console.log("MOD: ", modifiedArray);
