import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BubbleSorting, MaxValueBasedSorting } from '../../util/ListAlgorithms';
import { initSortedNumberArray, initNumberArray } from '../../util/BasicFunctions';
import '../../util/util.css';

var resultString = "";

export function CreateRowToPresentSortingAlg () {
    return (
        <div>
            <p>Vakk</p>
        </div>
    )
}

export function PerformanciaTest(algorithmName) {

    const [numberOfElements, setNumberOfElements] = useState("");
    const [testResult, setTestResult] = useState("");
    const [bubbleSortingPerformanceTestResult, setBubbleSortingPerformanceTestResult] = useState("");

    const startPerformanceTests = (event) => {
        localStorage.removeItem("BubbleSorting");
        var currentDateTime = new Date();
        resultString = "Test started at: " + currentDateTime.toLocaleString() + "\n";   
        BubbleSortingPerformanceTest(numberOfElements);
        setBubbleSortingPerformanceTestResult(resultString); 
    }
  
    return (
        <div>
          <input 
            type="text" 
            value={numberOfElements}
            placeholder="number of elements"
            onChange={(e) => setNumberOfElements(e.target.value)}
          />
          <button onClick={startPerformanceTests}>Run Bubble sorting performance tests on differently sorted arrays</button>
          <br></br>
          <textarea id="bubbleSortingPerformanceTestResult" name="bubbleSortingPerformanceTestResult" value={bubbleSortingPerformanceTestResult} cols="120" rows="10"/>
      </div>
    );
  }

//Perf tests of Bubble sorting algorithm
export function BubbleSortingPerformanceTest (numberOfElements) {

    BubbleSorting(initSortedNumberArray(numberOfElements, -50, 50, "ASC"));
    resultString = resultString + addArrangementDirectionToLog("BubbleSorting", "ASC");
    localStorage.removeItem("BubbleSorting");

    BubbleSorting(initSortedNumberArray(numberOfElements, -50, 50, "DESC"));
    resultString = resultString + addArrangementDirectionToLog("BubbleSorting", "DESC");
    localStorage.removeItem("BubbleSorting");

    BubbleSorting(initNumberArray(numberOfElements, -50, 50, "RANDOM"));
    resultString = resultString + addArrangementDirectionToLog("BubbleSorting", "NONE");
    localStorage.removeItem("BubbleSorting");
}

function addArrangementDirectionToLog(logKey, sortingDirection) {
    var log = JSON.parse(JSON.parse(localStorage.getItem(logKey)));
    log.algorithmName = logKey;
    log.origArraySorted=sortingDirection;
    return JSON.stringify(log);    
}
