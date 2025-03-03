function isOtherDivider (number) {
  for (let i=1; i<number; i++) {
    if (number % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}

function primeNumberSearch () {
  for (let i=0; i<20; i++) {
    isOtherDivider(i)
  }
}

export function factorialFor (number) {
  let factorial = 1;
  console.log(factorial, number);
  for (let i=number; i>1; i--) {
    factorial *= number;
  }
  return factorial;
}

function factorialRecursion (number) {
    if (number === 0 || number === 1) {
      //console.log(1); 
      return 1;
    } else {
      //console.log(number + ' * ' ); 
      return number * factorialRecursion(number - 1);
    }
  }
/*
  let naturalNumber = 9;
  let n = factorialRecursion(naturalNumber);
  console.log(naturalNumber + " faktorialisa: " + n);

  // 1. kör: number = 5; return: 5* függvény(4)
  // 2. kör: number = 4; return : 4* függvény(3)
  // 3. kör: number = 3; return: 3 * függvény(2)
  // 4. kör: number = 2; return 2* függvény(1)
  // 5. kör: number = 1; return 1; -> csak itt tudja behelyettesíteni visszafelé
*/
  function exponentiation (inputNumber, k) {
    if (k==0) {
      return 1;
    }
    if (k==1) {
      return inputNumber;
    }
    var result = inputNumber * exponentiation (inputNumber, k-1);
    return result;
  }
/*
  let expResult = exponentiation (5, 10);
  console.log("Expresult: " + expResult);
*/

let resultArray = [];

  function arithmeticSeries (d, start, end) {

    if (start==end) {
      return resultArray;
    } 

    if (start==0) {
      resultArray.push(0);
    }
    start++;
    if (start<end) {
      let previousElem = resultArray[start-1];
      let newElem = previousElem+d;
      resultArray.push(newElem);
      arithmeticSeries(d, start, end);
    }
  }
/*
  let arithmeticResult = arithmeticSeries (10, 0, 5);
  console.log("Arithmetic result: " + resultArray.join(", "));
*/

//function from other file

function elementExchange(array, index1, index2) {
  var tempValue = array[index1];
  array[index1] = array[index2];
  array[index2]= tempValue;
}

