import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BubbleSorting, MaxValueBasedSorting } from '../../util/ListAlgorithms';
import { initSortedNumberArray, initRandomNumberArray } from '../../util/BasicFunctions';
import '../../util/util.css';


var resultString = "";

export function UnitTestsOfListSortingAlgorithms(algorithmName) {

    const [numberOfElements, setNumberOfElements] = useState("");
    const [unitTestResult, setUnitTestResult] = useState("");

    const startUnitTests = (event) => {
        localStorage.removeItem("BubbleSorting");
        var currentDateTime = new Date();
        resultString = "Test started at: " + currentDateTime.toLocaleString() + "\n";       
        BubbleSortingUnitTest(numberOfElements);
        MaxValueBasedSortingUnitTest(numberOfElements);        
        setUnitTestResult(resultString);
    }
  
    return (
        <div>
            <input 
            type="text" 
            value={numberOfElements}
            placeholder="number of elements"
            onChange={(e) => setNumberOfElements(e.target.value)}
          />
          <button onClick={startUnitTests}>Run unit tests tests on all ListAlgorithms</button>
          <br></br>
          <textarea id="unitTestResult" name="unitTestResult" value={unitTestResult} cols="120" rows="10"/>
      </div>
    );
  }


  //Perf tests of Bubble sorting algorithm
  export function BubbleSortingUnitTest (numberOfElements) {

    var expectedSortResult = true;
    var sortedArray = BubbleSorting(initSortedNumberArray(numberOfElements, -50, 50, "DESC"));
    var testedSortResult = isListAscendingSorted (sortedArray);
    if (expectedSortResult===testedSortResult) {
        resultString = resultString + "BubbleSortingTestResult: success\n"
    }
    else resultString = resultString + "BubbleSortingTestResult: failed\n"
  
  }

  export function MaxValueBasedSortingUnitTest (numberOfElements) {

    var expectedSortResult = true;
    var sortedArray = MaxValueBasedSorting(initSortedNumberArray(numberOfElements, -50, 50, "DESC"));
    var testedSortResult = isListAscendingSorted (sortedArray);
    if (expectedSortResult===testedSortResult) {
        resultString = resultString + "MaxValueBasedSortingUnitTestResult: success\n"
    }
    else resultString = resultString + "MaxValueBasedSortingUnitTestResult: failed\n"
  }
 
  function isListAscendingSorted (arrayToCheck) {
    var sorted=true;
    for (let i=0; i<arrayToCheck.length-1; i++) {
        if (arrayToCheck[i] > arrayToCheck [i+1]) {
            sorted = false;
            return sorted;
        }
    }
    return sorted;
  }

  function isListDescendingSorted (arrayToCheck) {
    var sorted=true;
    for (let i=0; i<arrayToCheck.length-1; i++) {
        if (arrayToCheck[i] < arrayToCheck [i+1]) {
            sorted = false;
            return sorted;
        }
    }
    return sorted;
  }
