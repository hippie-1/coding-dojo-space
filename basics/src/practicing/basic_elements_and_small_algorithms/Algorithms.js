
import './util.css';

export const Algorithms = () => {
    //töltsünk fel egy array-t random számokkal 10 elem; -5 és +5 között
    const arr = Array(10);
    for (let i=0; i<10; i++) {
        arr[i] = Math.floor(Math.random()*10)-5;
    }

  //töltsünk fel egy array-t random számokkal és írassuk is ki valahová.
  
    //1.feladat: számlálás
    //számoljuk meg, hogy hány negatív szám van benne
    let counter = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            counter ++;
        }
    }

    //2.feladat: max/min keresés
    //keressük meg az array legnagyobb/legkisebb értékét
    let min = arr[0];
    let max = arr[0];
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    

//3.feladat: lineáris keresés 
//keressünk meg egy konkrét számot
//a konkrét elemet keressük
//ha van a tömbben, akkor
//-- tudjuk, hogy az értéke maga a korkrét szám, amit kerestünk
//-- kiírhatjuk inkább azt, hogy az hányadik eleme a tömbnek
//ha nincs benne, akkor olyan írjunk, ki, amiből kiderül, hogy nincs benne, lehet azt is, hogy az index ilyenkor -1
    let index = -1;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 1) {
            index = i;
        }
    }

    return (
        <div>
            <div className="display-linebreak">Array of 10 elements between -5 and 5 is: {arr.join(", ")}</div>
            <div className="display-linebreak">Number of NEGATIVE array elements: {counter}</div>
            <div className="display-linebreak">Lowest number of the array is: {min}</div>
            <div className="display-linebreak">Highest number of the array is: {max}</div>
            <div className="display-linebreak">Index of number 1 is: {index}</div>
        </div>
    )
}

//rekurziv


export function factorialFor (number) {
    let factorial = 1;
    console.log(factorial, number);
    for (let i=number; i>1; i--) {
      factorial *= number;
    }
    return factorial;
  }
  
  export function factorialFor (number) {
    let factorial = 1;
    console.log(factorial, number);
    for (let i=number; i>1; i--) {
      factorial *= number;
    }
    return factorial;
  }

  export function factorialRecursion (number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorialRecursion(number - 1);
    }
  }
  
  // 1. kör: number = 5; return: 5* függvény(4)
  // 2. kör: number = 4; return : 4* függvény(3)
  // 3. kör: number = 3; return: 3 * függvény(2)
  // 4. kör: number = 2; return 2* függvény(1)
  // 5. kör: number = 1; return 1; -> csak itt tudja behelyettesíteni visszafelé
  

  function isOtherDivider (number) {
    for (let i=2; i<number ^ (1/2); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function primeNumberSearch () {
    let primeNumbersList = [];
    for (let i=2; i<20; i++) {
      if (isOtherDivider(i)) {
        primeNumbersList.push(i);
      }
    }
    return primeNumbersList;
  }
  
  console.log('PRIME NUMBERS: ' + primeNumberSearch().join(', '));
  

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

  