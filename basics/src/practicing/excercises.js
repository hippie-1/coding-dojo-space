import {InsertionSorting, LinearSearch} from '../util/ListAlgorithms.js';

//run:
stockExchangeRates();

function stockExchangeRates() {
    let morningArray = [10, 20, 30, 11, 25, 33, 67, 58, 97, 34, 12, 34, 45, 56, 67];
    let eveningArray = [15, 17, 30, 98, 76, 55, 45, 43, 32, 21, 10, 20, 98, 86, 75];
    let diffArray = [];
  
    console.log('Morning array: ' + morningArray);
    console.log('Evening array: ' + eveningArray);
  
  
    for (let i=0; i<eveningArray.length; i++) {
      let diff = eveningArray[i] - morningArray[i];
      diffArray.push(diff);
    }
    
    console.log('Különbségek  : ' + diffArray);
    let sortedDiffArray = InsertionSorting (diffArray);
    console.log('Sorrendbe állított különbségek: ' + sortedDiffArray);
    let bestDiff = sortedDiffArray.slice(-3);
    console.log('A 3 legjobban teljesítő különbsége: ' + bestDiff);
    let lowestDiff = sortedDiffArray.slice(0, 3);
    console.log('A 3 legrosszabbul teljesítő különbsége: ' + lowestDiff );
    for (let i=0; i<bestDiff.length; i++) {
      let indexOfFoundElement = LinearSearch (diffArray, bestDiff[i]);
      console.log("Index of best element (" + bestDiff[i] + "): " + indexOfFoundElement);
    }
    for (let i=0; i<lowestDiff.length; i++) {
      let indexOfFoundElement = LinearSearch (diffArray, lowestDiff[i]);
      console.log("Index of worst element (" + lowestDiff[i] + "): " + indexOfFoundElement);
    }
  
  }