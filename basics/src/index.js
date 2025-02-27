import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataStructures } from './util/DataStructures';
import { Algorithms } from './util/Algorithms';
import { Sequence1, Sequence2, Iteration, IntroducingForkOnlyOddOrEvenNumbers, FibonacciNumbers, RandomNumberArray, RandomEvenNumberArray} from './util/BasicElements';
import { PerformanciaTest } from './testing/performance/sortingAlgorithmsPerformanceTests';
import { UnitTestsOfListSortingAlgorithms } from './testing/unit/listAlgorithmsUnitTests';
import { initRandomNumberArray, initSortedNumberArray, initInputBasedArray } from './util/BasicFunctions';
import { Counting, Max, MaxIndex, Min, MinIndex, LinearSearch, searchValue,  BubbleSorting, SimpleSwapSorting, InsertionSorting, MaxValueBasedSorting, BinarySearchIterative, BinarySearchRecursive } from './util/ListAlgorithms';

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
    <div className="display-linebreak">Max value based numbers<br/> {maxValueBasedSortedArray.join(", ")} </div>
  </div>
);

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


const linearSearchPlaceholder = ReactDOM.createRoot(document.getElementById('linear-search-originalArray'));
linearSearchPlaceholder.render(
  <div>
    <div className="display-linebreak">Index of linear search for { searchValue } is: { LinearSearch(originalNumberArray, searchValue) } </div>
  </div>
);

const sortedArrayOfNumbers = InsertionSorting (originalNumberArray);

const linearSearchSortedPlaceholder = ReactDOM.createRoot(document.getElementById('linear-search-sortedArray'));
linearSearchSortedPlaceholder.render(
  <div>
    <h5 className="display-linebreak">New, sorted array: {sortedArrayOfNumbers.join(', ')}</h5>
    <div className="display-linebreak">Index of linear search after sorting for { searchValue } is: { LinearSearch(sortedArrayOfNumbers, searchValue) } </div>
  </div>
);

const binarySearchIterativePlaceholder = ReactDOM.createRoot(document.getElementById('binary-search-iterative'));
binarySearchIterativePlaceholder.render(
  <div>
    <div className="display-linebreak">Index of iterative binary search for { searchValue } is: { BinarySearchIterative(sortedArrayOfNumbers, searchValue) } </div>
  </div>
);

const binarySearchRecursivePlaceholder = ReactDOM.createRoot(document.getElementById('binary-search-recursive'));
binarySearchRecursivePlaceholder.render(
  <div>
    <div className="display-linebreak">Index of recursive binary search for { searchValue } is: { BinarySearchRecursive(sortedArrayOfNumbers, 0, sortedArrayOfNumbers.length-1, searchValue) } </div>
  </div>
);




var originalBookArray  = initRandomNumberArray(20, 1, 20);
var searchBook1 = 2;
var searchBook2 = 5;
var searchBook3 = 9;
var searchBook4 = 13;
var searchBook5 = 17;
console.log("Orig array: " + originalBookArray.join(", "));
const placeHolderOfOriginalBookArrayToWorkWith = ReactDOM.createRoot(document.getElementById('original-booklist-to-work-with'));
placeHolderOfOriginalBookArrayToWorkWith.render(
  <div>
    <div className="display-linebreak">A teherautóról a könyvtárba leszállított könyvek: {originalBookArray.join(", ")} </div>
  </div>
  
);

const sortedArrayOfBooks = InsertionSorting (originalBookArray);

const sortedBookArrayToWorkWithPlaceholder = ReactDOM.createRoot(document.getElementById('linear-search-sortedBooks'));
sortedBookArrayToWorkWithPlaceholder.render(
  <div>
    <div className="display-linebreak">A könyvtárosok által lineárisan rendezett, katalogizált könyvek: {sortedArrayOfBooks.join(", ")} </div>
  </div>
  
);

const BinarySearchSortedBookPlaceholder1 = ReactDOM.createRoot(document.getElementById('binary-search-iterative-student1'));
const bookResultIndex1 = BinarySearchIterative(sortedArrayOfBooks, searchBook1);
BinarySearchSortedBookPlaceholder1.render(
  <div>
    <div className="display-linebreak">A(z) { searchBook1 } című könyv helye a könyvtárban: { bookResultIndex1 !== -1 ? bookResultIndex1 : "A könyv sajnos nem található meg a könyvtárban." } </div>
  </div>
);

const BinarySearchSortedBookPlaceholder2 = ReactDOM.createRoot(document.getElementById('binary-search-iterative-student2'));
const bookResultIndex2 = BinarySearchIterative(sortedArrayOfBooks, searchBook2);
BinarySearchSortedBookPlaceholder2.render(
  <div>
    <div className="display-linebreak">A(z) { searchBook2 } című könyv helye a könyvtárban: { bookResultIndex2 !== -1 ? bookResultIndex2 : "A könyv sajnos nem található meg a könyvtárban." } </div>
  </div>
);

const BinarySearchSortedBookPlaceholder3 = ReactDOM.createRoot(document.getElementById('binary-search-iterative-student3'));
const bookResultIndex3 = BinarySearchIterative(sortedArrayOfBooks, searchBook3);
BinarySearchSortedBookPlaceholder3.render(
  <div>
    <div className="display-linebreak">A(z) { searchBook3 } című könyv helye a könyvtárban: { bookResultIndex3 !== -1 ? bookResultIndex3 : "A könyv sajnos nem található meg a könyvtárban." } </div>
  </div>
);

const BinarySearchSortedBookPlaceholder4 = ReactDOM.createRoot(document.getElementById('binary-search-iterative-student4'));
const bookResultIndex4 = BinarySearchIterative(sortedArrayOfBooks, searchBook4);
BinarySearchSortedBookPlaceholder4.render(
  <div>
    <div className="display-linebreak">A(z) { searchBook4 } című könyv helye a könyvtárban: { bookResultIndex4 !== -1 ? bookResultIndex4 : "A könyv sajnos nem található meg a könyvtárban." } </div>
  </div>
);

const BinarySearchSortedBookPlaceholder5 = ReactDOM.createRoot(document.getElementById('binary-search-iterative-student5'));
const bookResultIndex5 = BinarySearchIterative(sortedArrayOfBooks, searchBook5);
BinarySearchSortedBookPlaceholder5.render(
  <div>
    <div className="display-linebreak">A(z) { searchBook5 } című könyv helye a könyvtárban: { bookResultIndex5 !== -1 ? bookResultIndex5 : "A könyv sajnos nem található meg a könyvtárban." } </div>
  </div>
);

