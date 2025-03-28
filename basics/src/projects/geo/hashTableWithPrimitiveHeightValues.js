import { InsertionSorting, BinarySearchIterative, insertSortedArray } from "../../util/Arrays.js";
import { Config } from "../../util/Config.js";

function Counting (originalNumberArray, above) {
    let heightsAboveCounter = 0;
    for (let i=0; i<originalNumberArray.length; i++) {
        if (originalNumberArray[i] > above) {
            heightsAboveCounter ++;
        }
    }
    return heightsAboveCounter;
  }

function FilterByHeightLimit (originalNumberArray, limit1, limit2) {
    let resultArray = [];
    for (let i=0; i<originalNumberArray.length; i++) {
        if (originalNumberArray[i] >= limit1 && originalNumberArray[i] <= limit2) {
            resultArray.push(originalNumberArray[i]);
        }
    }
    return resultArray;  
}

function print1 () {
    const heightRangesKeys = Object.keys(arrayOfHeightRanges);
console.log("Keys: ", heightRangesKeys);
for (let i=0; i<heightRangesKeys.length; i++) {
    let key = heightRangesKeys[i];
    console.log(key);
    let elementsInRange = arrayOfHeightRanges[key];
    switch(key) {
        case 'Melyfoldek':
            console.log(Config.getCustomTemplatingColours(28) + elementsInRange.join(", ") + Config.getTemplatingColours('Reset'));
            break;
        case 'Siksagok': 
            console.log(Config.getCustomTemplatingColours(78) + elementsInRange.join(", ") + Config.getTemplatingColours('Reset'));
            break;
        case 'Dombsagok': 
            console.log(Config.getCustomTemplatingColours(148) + elementsInRange.join(", ") + Config.getTemplatingColours('Reset'));
            break;
        case 'Kozephegysegek': 
            console.log(Config.getCustomTemplatingColours(137) + elementsInRange.join(", ") + Config.getTemplatingColours('Reset'));
            break;   
        case 'Magashegysegek': 
            console.log(Config.getCustomTemplatingColours(94) + elementsInRange.join(", ") + Config.getTemplatingColours('Reset'));
            break; 
        case 'NagyonMagasHegzsegek': 
            console.log(Config.getCustomTemplatingColours(231) + elementsInRange.join(", ") + Config.getTemplatingColours('Reset'));
            break; 
        default:
            console.log(elementsInRange.join(", "));
    }
}
}

function print2 () {
    const heightRangesKeys = Object.keys(arrayOfHeightRanges);
    console.log("Keys: ", heightRangesKeys);
    for (let i=0; i<heightRangesKeys.length; i++) {
        let key = heightRangesKeys[i];
        console.log(key);
        let elementsInRange = arrayOfHeightRanges[key];
        for (let j=0; j<elementsInRange.length; j++) {
            switch(key) {
                case 'Melyfoldek':
                    console.log(Config.getCustomTemplatingColours(28) + elementsInRange[j] + Config.getTemplatingColours('Reset'));
                    break;
                case 'Siksagok': 
                    console.log(Config.getCustomTemplatingColours(78) + elementsInRange[j] + Config.getTemplatingColours('Reset'));
                    break;
                case 'Dombsagok': 
                    console.log(Config.getCustomTemplatingColours(148) + elementsInRange[j] + Config.getTemplatingColours('Reset'));
                    break;
                case 'Kozephegysegek': 
                    console.log(Config.getCustomTemplatingColours(137) + elementsInRange[j] + Config.getTemplatingColours('Reset'));
                    break;   
                case 'Magashegysegek': 
                    console.log(Config.getCustomTemplatingColours(94) + elementsInRange[j] + Config.getTemplatingColours('Reset'));
                    break; 
                case 'NagyonMagasHegzsegek': 
                    console.log(Config.getCustomTemplatingColours(231) + elementsInRange[j] + Config.getTemplatingColours('Reset'));
                    break; 
                default:
                    console.log(elementsInRange[i]);
            }           
        }
    }    
}

function insertNewHeight (arrayOfHeightRanges, newHeight) {
    const heightRangesKeys = Object.keys(arrayOfHeightRanges);
    console.log("Keys: ", heightRangesKeys);
    for (let i=0; i<heightRangesKeys.length; i++) {
        let key = heightRangesKeys[i];
        console.log(key);
        let elementsInRange = arrayOfHeightRanges[key];
        for (let j=0; j<elementsInRange.length; j++) {
            switch(newHeight) {
                case (newHeight>=-1000 && newHeight<=0):
                    insertSortedArray(elementsInRange, newHeight);
                    break;
                case (newHeight>=1 && newHeight<=100): 
                    insertSortedArray(elementsInRange, newHeight);
                    break;
                case (newHeight>=101 && newHeight<=500): 
                    insertSortedArray(elementsInRange, newHeight); 
                    break;
                case (newHeight>=501 && newHeight<=2000): 
                    insertSortedArray(elementsInRange, newHeight);                    break;   
                case (newHeight>=2001 && newHeight<=5000): 
                    insertSortedArray(elementsInRange, newHeight);
                    break; 
                case (newHeight>=5001 && newHeight<=9000): 
                    insertSortedArray(elementsInRange, newHeight);
                    break; 
                default:
                    console.log(elementsInRange[i]);
            }           
        }
    }    
}

function searchIndexOfHeight(arrayOfHeightRanges, heigthValueToFind) {
    const heightRangesKeys = Object.keys(arrayOfHeightRanges);
    console.log("Start finding a heightValue: " + heigthValueToFind);
    for (let i=0; i<heightRangesKeys.length; i++) {
        let key = heightRangesKeys[i];
        console.log(key);
        let elementsInRange = arrayOfHeightRanges[key];
        let foundIndex = BinarySearchIterative(elementsInRange, heigthValueToFind);
        if (foundIndex > -1) {
            console.log("Element found in " + key + " at position: " + foundIndex );
            return;
        };
    }
}

const heights = [8848, 6194, 8611, 5895, 8051, 5642, 4695, 4897, 2228, 4884, 2764, 2942, 3798, 345, 694, 2386, 2925, 1951, 1602, 318, 1324, 4810, 2917, 1831, 1041, 2110, 2499, 312, 2599, 2764, 1014, 253, 430, 161, 1343, 2962, 2469, 4810, 5642, 2351, 2544, 739, 3718, 4634, 2111, 2169, 2654, 2864, 2061, 75, -405, -209, -155, -154, -133, -132, -116, -105, -86, -81, -72, -57, -53, -45, -40, -40, -39, -35, -32, -3];
const sortedHeights = InsertionSorting(heights);
const above = 8000;
const countOfHeighsAbove = Counting(heights, above);
console.log("Count of heights above "+above +": ", countOfHeighsAbove);

const arrayOfHeightRanges = {
    Melyfoldek: [], //0m alattiak - bucket
    Siksagok: [], //1 es 100 m kozottiek - bucket
    Dombsagok: [], //101 es 500 m kozottiek - bucket
    Kozephegysegek: [], //501 es 2000 m kozottiek - bucket
    Magashegysegek: [], //2001 es 5000 m kozottiek - bucket
    NagyonMagasHegzsegek: [] //5000 m folottiek - bucket
}

console.log(arrayOfHeightRanges);
arrayOfHeightRanges.Melyfoldek = FilterByHeightLimit(sortedHeights, -1000, 0);
arrayOfHeightRanges.Siksagok = FilterByHeightLimit(sortedHeights, 1, 100);
arrayOfHeightRanges.Dombsagok = FilterByHeightLimit(sortedHeights, 101, 500);
arrayOfHeightRanges.Kozephegysegek = FilterByHeightLimit(sortedHeights, 501, 2000);
arrayOfHeightRanges.Magashegysegek = FilterByHeightLimit(sortedHeights, 2001, 5000);
arrayOfHeightRanges.NagyonMagasHegzsegek = FilterByHeightLimit(sortedHeights, 5001, 9000);
console.log(arrayOfHeightRanges);
print1();
//searchIndexOfHeight(arrayOfHeightRanges, 312);
insertNewHeight(arrayOfHeightRanges, 313);
print1();







