import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BubbleSorting, MaxValueBasedSorting } from '../util/ListAlgorithms';
import { initSortedNumberArray, initRandomNumberArray } from '../util/BasicFunctions';
import '../util/util.css';


var sortingTableRows = "";

export function CreateRowToPresentSortingAlg (algorithmName) {
    console.log("RRRRRRRRRRRRRRR1");
    console.log(sortingTableRows);
    sortingTableRows = sortingTableRows + createSortingTableRow (algorithmName);
    console.log("RRRRRRRRRRRRRRR2");
    console.log(JSON.stringify(sortingTableRows));
    return (
        {sortingTableRows}
    )
}


function createSortingTableRow (algorithmName) {
    return (
        JSON.stringify(
<div>
<div class="row" id={algorithmName}>
<div class="column1">
  <p id={algorithmName}>Placeholder for {algorithmName}</p>
</div>
<div class="column2">
  <p id="bubble-sorting-perf-test">Placeholder for bubble sorting performance tests</p>
</div>
</div>
<div class="row">
<div class="column1">
  <p id="simple-swap-sorting">Placeholder for simple swap sorting</p>
</div>
<div class="column2">
  <p id="simple-swap-sorting-perf-test">Placeholder for simple swap performance tests</p>
</div>
</div>  
</div>
    ));
}