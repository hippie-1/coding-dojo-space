import React from 'react';
import ReactDOM from 'react-dom/client';
//import React, { useRef, useEffect } from 'react';
//import ReactDOM from 'react-dom/*';
import { createElement } from 'react';

import Tabs from "./Tabs";
import Panel from "./Panel";

import { htmlElements } from "./htmlElements";

import "./style.css";

import { DataStructures } from './util/DataStructures';
import { Algorithms } from './util/Algorithms';
import { Sequence1, Sequence2, Iteration, IntroducingForkOnlyOddOrEvenNumbers, FibonacciNumbers, RandomNumberArray, RandomEvenNumberArray} from './util/BasicElements';
import { PerformanciaTest } from './testing/performance/sortingAlgorithmsPerformanceTests';
import { UnitTestsOfListSortingAlgorithms } from './testing/unit/listAlgorithmsUnitTests';
import { initRandomNumberArray, initSortedNumberArray, initInputBasedArray } from './util/BasicFunctions';
import { Counting, Max, MaxIndex, Min, MinIndex, LinearSearch, searchValue,  BubbleSorting, SimpleSwapSorting, InsertionSorting, MaxValueBasedSorting } from './util/ListAlgorithms';
import { CreateRowToPresentSortingAlg } from './presentation/elements';
import { GenerateArrayToWorkWith, RunSimpleAlgorithms, RunSortingAlgorithms, RunSearchingAlgorithms, RunSortingPerformanceTest } from './RunAlgorithms';

var rootElement = null;

function App() {
  return (
    <Tabs>
      <Panel title="Simple List Algorithms">
        <button onClick={RunSimpleAlgorithms}>Start simple algorithms</button><br/><br/>
        {
        htmlElements
          .filter(htmlElement => htmlElement.panelId === "simpleListAlgorithms")
          .map(htmlElement => {
            return <div id={htmlElement.id} key={htmlElement.id}>{htmlElement.title}</div>;
          })
          }
      </Panel>

      <Panel title="Sorting List Algorithms">
        <button onClick={RunSortingAlgorithms}>Start sorting algorithms</button><br/><br/>
        {htmlElements
          .filter(htmlElement => htmlElement.panelId === "sortingListAlgorithms") 
          .map(htmlElement => {
            return <div id={htmlElement.id} key={htmlElement.id}>{htmlElement.title}</div>;
          })}
        <br/><br/><button onClick={RunSortingPerformanceTest}>Start sorting performance tests</button><br/><br/>
        <div id="sortingPerformanceTestPlaceHolder">Result of sorting performance tests</div>
      </Panel>

      <Panel title="Searching List Algorithms">
        <input 
                id="valueToSearch"
                type="text" 
                defaultValue="20"
                //value="20"
                placeholder="search value"
                //onChange={(e) => setNumberOfElementsInGeneratedArray(e.target.value)}
        />
        <button onClick={RunSearchingAlgorithms}>Start searching algorithms</button><br/><br/>
        {
        htmlElements
          .filter(htmlElement => htmlElement.panelId === "searchingListAlgorithms")
          .map(htmlElement => {
          return <div id={htmlElement.id} key={htmlElement.id}>{htmlElement.title}</div>;
        })
        }
      </Panel>

      <Panel title="Others">
        <button>Start others</button><br/><br/>
        {htmlElements
          .filter(htmlElement => htmlElement.panelId === "others")
          .map(htmlElement => {
          return <div id={htmlElement.id} key={htmlElement.id}>{htmlElement.title}</div>;
        })}
      </Panel>      
    </Tabs>
  );
}



var rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);

//var originalNumberArray  = initRandomNumberArray(5, -20, 20);
//var originalNumberArray  = initSortedNumberArray(10, -2, 2, 1, "DESC");
//console.log("Orig array: " + originalNumberArray.join(", "));
const placeHolderOfGenerateArrayToWorkWith = ReactDOM.createRoot(document.getElementById('generate-list-to-work-with'));

placeHolderOfGenerateArrayToWorkWith.render(
  <GenerateArrayToWorkWith/>
);


