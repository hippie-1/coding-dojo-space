import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom/*';
import { createElement } from 'react';
import './index.css';
import App from './App';
import { DataStructures } from './util/DataStructures';
import { Algorithms } from './util/Algorithms';
import { Sequence1, Sequence2, Iteration, IntroducingForkOnlyOddOrEvenNumbers, FibonacciNumbers, RandomNumberArray, RandomEvenNumberArray} from './util/BasicElements';
import { PerformanciaTest } from './testing/performance/sortingAlgorithmsPerformanceTests';
import { UnitTestsOfListSortingAlgorithms } from './testing/unit/listAlgorithmsUnitTests';
import { initRandomNumberArray, initSortedNumberArray, initInputBasedArray } from './util/BasicFunctions';
import { Counting, Max, MaxIndex, Min, MinIndex, LinearSearch, searchValue,  BubbleSorting, SimpleSwapSorting, InsertionSorting, MaxValueBasedSorting } from './util/ListAlgorithms';
import { CreateRowToPresentSortingAlg } from './presentation/elements';

//import { Counting, LienarSearch, Sorting, stb} from './util/Algorithms';
import reportWebVitals from './reportWebVitals';


var originalNumberArray  = initRandomNumberArray(5, -20, 20);
//var originalNumberArray  = initSortedNumberArray(10, -2, 2, 1, "DESC");
console.log("Orig array: " + originalNumberArray.join(", "));
const placeHolderOfOriginalArrayToWorkWith = ReactDOM.createRoot(document.getElementById('original-list-to-work-with'));
placeHolderOfOriginalArrayToWorkWith.render(
  <div>
    <div className="display-linebreak">Original array to work with in the following functions: {originalNumberArray.join(", ")} </div>
  </div>
  
);


const countingPlaceholder = ReactDOM.createRoot(document.getElementById('counting'));
countingPlaceholder.render(
  <div>
    <div className="display-linebreak">Count of negative numbers: { Counting(originalNumberArray) } </div>
  </div>
);

const unitTestingOfSortingAlgorithmslaceholder = ReactDOM.createRoot(document.getElementById('unit-testing-of-sorting-algorithms'));
unitTestingOfSortingAlgorithmslaceholder.render(
  <div>
    <UnitTestsOfListSortingAlgorithms />
  </div>
);

const maxPlaceholder = ReactDOM.createRoot(document.getElementById('maximum'));
maxPlaceholder.render(
  <div>
    <div className="display-linebreak">Maximum value: { Max(originalNumberArray) } </div>
  </div>
);

const maxIndexPlaceholder = ReactDOM.createRoot(document.getElementById('maximum-index'));
maxIndexPlaceholder.render(
  <div>
    <div className="display-linebreak">Index of the maximum value: { MaxIndex(originalNumberArray) } </div>
  </div>
);

const minPlaceholder = ReactDOM.createRoot(document.getElementById('minimum'));
minPlaceholder.render(
  <div>
    <div className="display-linebreak">Minimum value: { Min(originalNumberArray) } </div>
  </div>
);

const minIndexPlaceholder = ReactDOM.createRoot(document.getElementById('minimum-index'));
minIndexPlaceholder.render(
  <div>
    <div className="display-linebreak">Index of the minimum value: { MinIndex(originalNumberArray) } </div>
  </div>
);

var bubbleSortedArray = BubbleSorting(originalNumberArray);
const bubbleSortedNumbersPlaceholder = ReactDOM.createRoot(document.getElementById('bubble-sorting'));
bubbleSortedNumbersPlaceholder.render(
  <div>
    <div className="display-linebreak">Bubble sorted numbers:<br/> {bubbleSortedArray.join(", ")} </div>
  </div>
);
const bubbleSortingPerformanceTestlaceholder = ReactDOM.createRoot(document.getElementById('bubble-sorting-perf-test'));
bubbleSortingPerformanceTestlaceholder.render(
    <PerformanciaTest />
);

var maxValueBasedSortedArray = MaxValueBasedSorting(originalNumberArray);
const maxValueBasedSortingPlaceholder = ReactDOM.createRoot(document.getElementById('max-value-based-sorting'));
maxValueBasedSortingPlaceholder.render(
  <div>
    <div className="display-linebreak">Max value based numbers<br/> {maxValueBasedSortedArray.join(", ")} 
    </div>
  </div>
);
/*
const maxValueBasedPerformanceTestlaceholder = ReactDOM.createRoot(document.getElementById('max-value-based-sorting-perf-test'));
const newRow = CreateRowToPresentSortingAlg('max-value-based');
maxValueBasedPerformanceTestlaceholder.render(
  newRow
);
*/
const simpleSwapSortingPlaceholder = ReactDOM.createRoot(document.getElementById('simple-swap-sorting'));
simpleSwapSortingPlaceholder.render(
  <div>
    <div className="display-linebreak">Simple-swap sorted numbers: <br/>{ SimpleSwapSorting(originalNumberArray).join(', ') } </div>
  </div>
);

const InsertionSortingPlaceholder = ReactDOM.createRoot(document.getElementById('insertion-sorting'));
InsertionSortingPlaceholder.render(
  <div>
    <div className="display-linebreak">Insertion sorted numbers: <br/> { InsertionSorting(originalNumberArray).join(', ') } </div>
  </div>
);

// const MinimumSelectionSortingPlaceholder = ReactDOM.createRoot(document.getElementById('minimum-selection-sorting'));
// MinimumSelectionSortingPlaceholder.render(
//   <div>
//     <div className="display-linebreak">Minimum selection sorted numbers: { MinimumSelectionSorting(originalNumberArray).join(', ') } </div>
//   </div>
// );


const linearSearchPlaceholder = ReactDOM.createRoot(document.getElementById('linear-search'));
linearSearchPlaceholder.render(
  <div>
    <div className="display-linebreak">Index of linear search for { searchValue } is: { LinearSearch(originalNumberArray, searchValue) } </div>
  </div>
);


/*
var bubbleSortedArray = BubbleSorting(originalNumberArray);
const bubbleSortedNumbersPlaceholder = ReactDOM.createRoot(document.getElementById('bubble-sorting'));
bubbleSortedNumbersPlaceholder.render(
  <div>
    <div className="display-linebreak">Bubble sorted numbers:<br/> {bubbleSortedArray.join(", ")} </div>
  </div>
);
const bubbleSortingPerformanceTestlaceholder = ReactDOM.createRoot(document.getElementById('bubble-sorting-perf-test'));
bubbleSortingPerformanceTestlaceholder.render(
    <PerformanciaTest />
);
*/




reportWebVitals();
