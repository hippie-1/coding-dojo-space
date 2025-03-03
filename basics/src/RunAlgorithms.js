import { useState } from 'react';
import Select from 'react-select'
import ReactDOM from 'react-dom/client';

import { DataStructures } from './util/DataStructures';
import { Algorithms } from './util/Algorithms';
import { Sequence1, Sequence2, Iteration, IntroducingForkOnlyOddOrEvenNumbers, FibonacciNumbers, RandomNumberArray, RandomEvenNumberArray} from './util/BasicElements';
import { PerformanciaTest } from './testing/performance/sortingAlgorithmsPerformanceTests';
import { UnitTestsOfListSortingAlgorithms } from './testing/unit/listAlgorithmsUnitTests';
import { initNumberArray, initSortedNumberArray, initInputBasedArray, generateRandomNumber } from './util/BasicFunctions';
import { Counting, Max, MaxIndex, Min, MinIndex, LinearSearch, BinarySearchIterative,BinarySearchRecursive , searchValue,  BubbleSorting, SimpleSwapSorting, InsertionSorting, /* MinSelectionSorting,*/ MaxValueBasedSorting } from './util/ListAlgorithms';

import './util/util.css';
const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '200px', // Set your desired width here
  }),
};

var resultString = "";
var generatedNumberArray = [];
var sortingDirection = "";

var placeHolderOfGeneratedArrayToWorkWith = null;
var countingPlaceholder = null;
//var summaryPlaceholder = null;
var maxPlaceholder = null;
var maxIndexPlaceholder = null;
var minPlaceholder = null;
var minIndexPlaceholder = null;
var bubbleSortedNumbersPlaceholder = null;
var simpleSwapSortedNumbersPlaceholder = null;
var insertionSortedNumbersPlaceholder = null;
var bubbleSortedNumbersPlaceholder = null;
var minSelectionSortingPlaceholder = null;
var maxValueBasedSortingPlaceholder = null;
var linearSearchPlaceholder = null;
var binarySearchPlaceholder = null;
var skipListSearchPlaceholder = null;

var sortingPerformanceTestPlaceHolder = null;

export function GenerateArrayToWorkWith() {

    const [numberOfElementsInGeneratedArray, setNumberOfElementsInGeneratedArray] = useState("20");
    const [lowestNumberInGeneratedArray, setLowestNumberInGeneratedArray] = useState("-50");
    const [highestNumberInGeneratedArray, setHighestNumberInGeneratedArray] = useState("50");
    const [sortingDirectionOfGeneratedArray, setSortingDirectionOfGeneratedArray] = useState({ value: 'RANDOM', label: 'random'});
    const [generatedNumberArrayResult, setGeneratedNumberArrayResult] = useState("");

    const startArrayGeneration = (event) => {
        //placeHolderOfGeneratedArrayToWorkWith = ReactDOM.createRoot(document.getElementById('generated-list-to-work-with'));
        //localStorage.clear();
        var currentDateTime = new Date();
        sortingDirection = JSON.stringify(sortingDirectionOfGeneratedArray.value);
        console.log("START generation " + numberOfElementsInGeneratedArray +", " + lowestNumberInGeneratedArray +", " + highestNumberInGeneratedArray+ ", " + JSON.stringify(sortingDirectionOfGeneratedArray));
        generatedNumberArray = initNumberArray(numberOfElementsInGeneratedArray, lowestNumberInGeneratedArray, highestNumberInGeneratedArray, sortingDirectionOfGeneratedArray.value);
        setGeneratedNumberArrayResult(generatedNumberArray.join(", "));
        /*
        placeHolderOfGeneratedArrayToWorkWith.render(
          generatedNumberArray.join(", ")
        )
          */
    }
    
    const sortingOptions = [
      { value: 'RANDOM', label: 'random'},
      { value: 'ASC', label: 'ascending'},
      { value: 'DESC', label: 'descending'}
    ]
        
    return (
        <div>
            <p>We need a list(array) of integers to work with. Let's generate it.</p>
            <table>
            <tr><th>Number of elements</th><th>Min value</th><th>Max value</th><th>Sorting</th><th></th></tr>
            <tr>
            <td>
            <input 
                type="text" 
                defaultValue="20"
                value={numberOfElementsInGeneratedArray}
                placeholder="number of elements"
                onChange={(e) => setNumberOfElementsInGeneratedArray(e.target.value)}
            />
            </td>
            <td>
            <input 
                type="text" 
                defaultValue="-100"
                value={lowestNumberInGeneratedArray}
                placeholder="lowest number"
                onChange={(e) => setLowestNumberInGeneratedArray(e.target.value)}
            />
            </td>
            <td>
            <input 
                type="text"
                defaultValue="100"
                value={highestNumberInGeneratedArray}
                placeholder="highest number"
                onChange={(e) => setHighestNumberInGeneratedArray(e.target.value)}
            />
            </td>
            <td>
            <Select styles={customStyles}
                options={sortingOptions}
                labelField="sorting"
                valueField="value"
                defaultValue={{ value: 'RANDOM', label: 'random'}}
                //selected="selected"
                onChange={(values) => setSortingDirectionOfGeneratedArray(values)}
            /> 
            </td>
            <td>                  
            <button onClick={startArrayGeneration}>Generate list of integers</button>
            </td>
            </tr>
            </table>
            <textarea id="generatedNumberArrayResult" value={generatedNumberArrayResult} cols="122" rows="3" placeholder='generated numbers'>Original list placeholder</textarea>
        </div>
    );
  }


export function RunSimpleAlgorithms () {

countingPlaceholder = ReactDOM.createRoot(document.getElementById('counting'));
//summaryPlaceholder = ReactDOM.createRoot(document.getElementById('summary'));
maxPlaceholder = ReactDOM.createRoot(document.getElementById('maximum'));
maxIndexPlaceholder = ReactDOM.createRoot(document.getElementById('maximum-index'));
minPlaceholder = ReactDOM.createRoot(document.getElementById('minimum'));
minIndexPlaceholder = ReactDOM.createRoot(document.getElementById('minimum-index'));

  countingPlaceholder.render(
    <div>
      <div className="display-linebreak">Count of negative numbers: { Counting(generatedNumberArray) } </div>
    </div>
  );
  /*
  summaryPlaceholder.render(
    <div>
      <div className="display-linebreak">Count of negative numbers: { Summary(generatedNumberArray) } </div>
    </div>
  );
  */
  maxPlaceholder.render(
    <div>
      <div className="display-linebreak">Maximum value: { Max(generatedNumberArray) } </div>
    </div>
  );
  
  maxIndexPlaceholder.render(
    <div>
      <div className="display-linebreak">Index of the maximum value: { MaxIndex(generatedNumberArray) } </div>
    </div>
  );
  
  minPlaceholder.render(
    <div>
      <div className="display-linebreak">Minimum value: { Min(generatedNumberArray) } </div>
    </div>
  );
  
  minIndexPlaceholder.render(
    <div>
      <div className="display-linebreak">Index of the minimum value: { MinIndex(generatedNumberArray) } </div>
    </div>
  );

}

export function RunSortingAlgorithms () {

  
      bubbleSortedNumbersPlaceholder = ReactDOM.createRoot(document.getElementById('bubble-sorting'));
      simpleSwapSortedNumbersPlaceholder = ReactDOM.createRoot(document.getElementById('simple-swap-sorting'));
      insertionSortedNumbersPlaceholder = ReactDOM.createRoot(document.getElementById('insertion-sorting'));
      minSelectionSortingPlaceholder = ReactDOM.createRoot(document.getElementById('minimum-selection-sorting'));
      maxValueBasedSortingPlaceholder = ReactDOM.createRoot(document.getElementById('max-value-based-sorting'));
      
      var bubbleSortedArray = BubbleSorting(generatedNumberArray);
      bubbleSortedNumbersPlaceholder.render(
        <div>
          <div className="display-linebreak">Bubble sorted numbers:<br/> {bubbleSortedArray.join(", ")} </div>
        </div>
      );
      var simpleSwapSortedArray = SimpleSwapSorting(generatedNumberArray);
      simpleSwapSortedNumbersPlaceholder.render(
        <div>
          <div className="display-linebreak">Simple swap sorted numbers:<br/> {simpleSwapSortedArray.join(", ")} </div>
        </div>
      );
      var insertionSortedArray = InsertionSorting(generatedNumberArray);
      insertionSortedNumbersPlaceholder.render(
        <div>
          <div className="display-linebreak">Insertion sorted numbers:<br/> {insertionSortedArray.join(", ")} </div>
        </div>
      );
      /*
      var minSelectionSortedArray = MinSelectionSorting(generatedNumberArray);
      minSelectionSortingPlaceholder.render(
        <div>
          <div className="display-linebreak">Min selection based numbers<br/> {minSelectionSortedArray.join(", ")} 
          </div>
        </div>
      ); 
      */        
      var maxValueBasedSortedArray = MaxValueBasedSorting(generatedNumberArray);
      maxValueBasedSortingPlaceholder.render(
        <div>
          <div className="display-linebreak">Max value based sorted numbers<br/> {maxValueBasedSortedArray.join(", ")} 
          </div>
        </div>
      );
}

export function RunSearchingAlgorithms () {

  console.log("RunSearchingAlgorithms");
  //const [searchValue, setSearchValue] = useState("");
  var valueToSearch = document.getElementById('valueToSearch').value;
  console.log(document.getElementById('valueToSearch'));
  var sortedNumberArray =  InsertionSorting(generatedNumberArray);

  linearSearchPlaceholder = ReactDOM.createRoot(document.getElementById('linear-search'));
  linearSearchPlaceholder.render(
    <div>
      <div className="display-linebreak">
        Linear search algorithm was run on random list:<br/> {generatedNumberArray.join(", ")}. <br/>
        Index of linear search for { valueToSearch } is: { LinearSearch(generatedNumberArray, valueToSearch) } <br/><br/>
      </div>
      <div className="display-linebreak">
        Linear search algorithm was run on sorted (insertion sorted list) list:<br/> {sortedNumberArray.join(", ")}. <br/>
        Index of linear search for { valueToSearch } is: { LinearSearch(sortedNumberArray, valueToSearch) } <br/><br/>
      </div>
    </div>
  ); 

  binarySearchPlaceholder = ReactDOM.createRoot(document.getElementById('binary-search'));
  binarySearchPlaceholder.render(
    <div>
      <div className="display-linebreak">
        Binary algorithms was run on sorted (insertion sorted list) list<br/>  {sortedNumberArray.join(", ")}. <br/>
        Index of iterative binary search for { valueToSearch } is: { BinarySearchIterative(sortedNumberArray, searchValue) } . <br/>
        Index of recursive binary search for { valueToSearch } is: { BinarySearchRecursive(sortedNumberArray, 0, sortedNumberArray.lenght-1, searchValue) } . <br/><br/>
      </div>
    </div>
  );

}

var performanceTestResultObjectsArray = [];

export function RunSortingPerformanceTest() {

  sortingPerformanceTestPlaceHolder = ReactDOM.createRoot(document.getElementById('sortingPerformanceTestPlaceHolder'));

        localStorage.removeItem("BubbleSorting");
        var currentDateTime = new Date();
        var resultStart = "Test started at: " + currentDateTime.toLocaleString() + "\n";
        resultString = "\n";   
        
        BubbleSorting(generatedNumberArray);
        performanceTestResultObjectsArray.push(JSON.parse(addArrangementDirectionToLog("BubbleSorting", sortingDirection)));

        SimpleSwapSorting(generatedNumberArray);       
        performanceTestResultObjectsArray.push(JSON.parse(addArrangementDirectionToLog("SimpleSwapSorting", sortingDirection)));

        InsertionSorting(generatedNumberArray);       
        performanceTestResultObjectsArray.push(JSON.parse(addArrangementDirectionToLog("InsertionSorting", sortingDirection)));

        MaxValueBasedSorting(generatedNumberArray);       
        performanceTestResultObjectsArray.push(JSON.parse(addArrangementDirectionToLog("MaxValueBasedSorting", sortingDirection)));

        sortingPerformanceTestPlaceHolder.render (
          <GenerateTable/>
        );
}

function GenerateTable () {

  console.log(performanceTestResultObjectsArray);
  return (
    <div>
      <table>
        <tr><th>Number of elementes</th><th>Orig.Sort.Dir</th><th>Algorithm name</th><th>Comaparation steps</th><th>Exchange steps</th><th>Duration(ms)</th></tr>

        {performanceTestResultObjectsArray.map(perfTestElement => {
          return <tr>
            <td>{perfTestElement.numberOfElementsAttr}</td>
            <td>{perfTestElement.origArraySortedDirection}</td>
            <td>{perfTestElement.id}</td>
            <td>{perfTestElement.numberOfComparationStepsAttr}</td>
            <td>{perfTestElement.numberOfElementExchangesAttr}</td>
            <td>{perfTestElement.duration}</td></tr>
        })}     

      </table>
    </div>
  )
}

//element.algorithmName
//element.numberOfComparationStepsAttr
//element.numberOfElementExchangesAttr
//element.duration

function addArrangementDirectionToLog(logKey, sortingDirection) {
  var log = JSON.parse(JSON.parse(localStorage.getItem(logKey)));
  log.algorithmName = logKey;
  console.log("addArrangementDirectionToLog");
  console.log(sortingDirection);
  log.origArraySortedDirection=sortingDirection;
  return JSON.stringify(log);    
}
