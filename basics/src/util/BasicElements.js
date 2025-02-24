
import './util.css';

export const Sequence1 = () => {

    const URL_DEV = "nh-fintechf-labs.aws.com"
    var persoanlName = "Réka" 

    var text = " \n" ;
    text = text + "Hello Réke \n" ;
    text = text + "Hello Peti \n" ;
    text = text + "Hello Árpi \n";
    text = text + "Hello Gyöngyi "; 


  return (
    <div className="display-linebreak">Sequence of hello commands: {text}</div>
  )
}

export const Sequence2 = () => {

  var text = " \n" ;
  text = text + "1, " ;
  text = text + "2, " ;
  text = text + "3, ";
  text = text + "4"; 


  return (
    <div className="display-linebreak">Sequence of numbers: {text}</div>
  )
}

export const Iteration = () => {

  var text = " \n" ;
  for (let i = 0; i < 5; i++) {
    text = text + i + ", " ;
  }

  return (
    <div className="display-linebreak">Numbers listed by iteration: {text}</div>
  )
}

export const IntroducingForkOnlyOddOrEvenNumbers = () => {

  let maxNumberOfTheIteration = 20;
  var text = " \n" ;
  for (let i = 0; i < maxNumberOfTheIteration; i++) {
    if (i % 2 === 0) text = text + i + ", " ;
  }

  return (
    <div className="display-linebreak">Even numbers listed by iteration: {text}</div>
  )
}

export const FibonacciNumbers = () => {

  let maxNumberOfTheIteration = 100; 
  var fibonacciNumbersArray = [1, 2]; //fibonacciNumbersArray[0]=1, fibonacciNumbersArray[1]=2
  var fibonacciEvenNumbersArray = [];
  //var text = "not implemented yet" ;

  for (let i = 2; i < maxNumberOfTheIteration; i++) {
    if (i === (fibonacciNumbersArray[fibonacciNumbersArray.length-1] + fibonacciNumbersArray[fibonacciNumbersArray.length-2]) ) {
      fibonacciNumbersArray.push(i);
    }
    console.log("current iteration: " + i + " fibonacciNumbersArrayActualLength: " + fibonacciNumbersArray.length)  
  }

  //Conting algorithms
  var oddNumbers = 0;
  for (let i=0; i<fibonacciNumbersArray.length; i++) {
    if (fibonacciNumbersArray[i] % 2 !== 0) {
      oddNumbers++;
    }
  }

  return (
    <div>
      <div className="display-linebreak">Fibonacci numbers: {fibonacciNumbersArray.join(", ")} </div>
      <div>Number of odd fibonacci  numbers: {oddNumbers} </div>
    </div>
  )
}


