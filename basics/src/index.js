import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataStructures } from './util/DataStructures';
import { Algorithms } from './util/Algorithms';
import { Sequence1, Sequence2, Iteration, IntroducingForkOnlyOddOrEvenNumbers, FibonacciNumbers, RandomNumberArray, RandomEvenNumberArray} from './util/BasicElements';
import { initRandomNumberArray, initInputBasedArray } from './util/BasicFunctions';
import { BubbleSorting } from './util/ListAlgorithms';

//import { Counting, LienarSearch, Sorting, stb} from './util/Algorithms';
import reportWebVitals from './reportWebVitals';

var originalNumberArray  = initRandomNumberArray(10, -20, 20);
//var originalNumberArray  = initInputBasedArray("0 1, 2, 3, 4, 5, 6, 7, 8, 9");
//var originalNumberArray  = initInputBasedArray("9, 8, 7, 6, 5, 4, 3, 2, 1, 0");
console.log("Orig array: " + originalNumberArray.join(", "));
const placeHolderOfOriginalArrayToWorkWith = ReactDOM.createRoot(document.getElementById('original-list-to-work-with'));
placeHolderOfOriginalArrayToWorkWith.render(
  <div>
    <div className="display-linebreak">Original array to work with in the following functions: {originalNumberArray.join(", ")} </div>
  </div>
);


const arrayMaker = ReactDOM.createRoot(document.getElementById('counting'));
arrayMaker.render(
  <React.StrictMode>
    <Algorithms />
  </React.StrictMode>
);



const bubbleSortedNumbersPlaceholder = ReactDOM.createRoot(document.getElementById('bubble-sorting'));
var bubbleSortedArray = BubbleSorting(originalNumberArray);
bubbleSortedNumbersPlaceholder.render(
  <div>
    <div className="display-linebreak">Bubble sorted numbers {bubbleSortedArray.join(", ")} </div>
  </div>
);

reportWebVitals();
