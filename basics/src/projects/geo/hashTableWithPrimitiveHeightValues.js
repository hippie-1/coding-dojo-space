import { InsertionSorting, BinarySearchIterative, insertSortedArray } from "../../util/Arrays.js";
import { Config } from "../../util/Config.js";

function CountingByHeight (originalNumberArray, above) {
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

function print1 (arrayOfHeightRangeBuckets) {
    const heightRangesBucketKeys = Object.keys(arrayOfHeightRangeBuckets);
    //console.log("Keys: ", heightRangesBucketKeys);
    for (let i=0; i<heightRangesBucketKeys.length; i++) {
        let key = heightRangesBucketKeys[i];
        console.log(key);
        let elementsInRange = arrayOfHeightRangeBuckets[key];
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
            case 'NagyonMagasHegysegek': 
                console.log(Config.getCustomTemplatingColours(130) + elementsInRange.join(", ") + Config.getTemplatingColours('Reset'));
                break; 
            case 'Orokhomezo': 
                console.log(Config.getCustomTemplatingColours(230) + elementsInRange.join(", ") + Config.getTemplatingColours('Reset'));
                break;                 
            default:
                console.log(elementsInRange.join(", "));
        }
    }
}

function print2 (arrayOfHeightRangeBuckets) {
    const heightRangesBucketKeys = Object.keys(arrayOfHeightRangeBuckets);
    //console.log("Keys: ", heightRangesBucketKeys);
    for (let i=0; i<heightRangesBucketKeys.length; i++) {
        let key = heightRangesBucketKeys[i];
        console.log(key);
        let elementsInRangeBuckets = arrayOfHeightRangeBuckets[key];
        for (let j=0; j<elementsInRangeBuckets.length; j++) {
            switch(key) {
                case 'Melyfoldek':
                    console.log(Config.getCustomTemplatingColours(28) + elementsInRangeBuckets[j] + Config.getTemplatingColours('Reset'));
                    break;
                case 'Siksagok': 
                    console.log(Config.getCustomTemplatingColours(78) + elementsInRangeBuckets[j] + Config.getTemplatingColours('Reset'));
                    break;
                case 'Dombsagok': 
                    console.log(Config.getCustomTemplatingColours(148) + elementsInRangeBuckets[j] + Config.getTemplatingColours('Reset'));
                    break;
                case 'Kozephegysegek': 
                    console.log(Config.getCustomTemplatingColours(137) + elementsInRangeBuckets[j] + Config.getTemplatingColours('Reset'));
                    break;   
                case 'Magashegysegek': 
                    console.log(Config.getCustomTemplatingColours(94) + elementsInRangeBuckets[j] + Config.getTemplatingColours('Reset'));
                    break; 
                case 'NagyonMagasHegysegek': 
                    console.log(Config.getCustomTemplatingColours(130) + elementsInRangeBuckets[j] + Config.getTemplatingColours('Reset'));
                    break; 
                case 'Orokhomezo': 
                    console.log(Config.getCustomTemplatingColours(230) + elementsInRangeBuckets[j] + Config.getTemplatingColours('Reset'));
                    break;                     
                default:
                    console.log(elementsInRangeBuckets[i]);
            }           
        }
    }    
}

function getNameOfTheRelevantBucket(height) {
    let nameOfTheRelevantBucket = null;
    switch(true) { //finding the name of the bucket
        case (height>=-1000 && height<=0):
            nameOfTheRelevantBucket = 'Melyfoldek';
            break;
        case (height>=1 && height<=100): 
            nameOfTheRelevantBucket = 'Siksagok';
            break;
        case (height>=101 && height<=500): 
            nameOfTheRelevantBucket = 'Dombsagok';
            break;
        case (height>=501 && height<=2000): 
            nameOfTheRelevantBucket = 'Kozephegysegek';
            break;   
        case (height>=2001 && height<=5000): 
            nameOfTheRelevantBucket = 'Magashegysegek';
            break; 
        case (height>=5001 && height<=8000): 
            nameOfTheRelevantBucket = 'NagyonMagasHegysegek';
            break; 
        case (height>=8001): 
            nameOfTheRelevantBucket = 'Orokhomezo';
            break;
        default:
            nameOfTheRelevantBucket = null;            
    }
    return nameOfTheRelevantBucket;
}

function insertNewHeight (arrayOfHeightRangeBuckets, newHeight) {
    console.log("Start inserting new height: " + newHeight);
    let nameOfTheBucketToPutTheNewValueInto = getNameOfTheRelevantBucket(newHeight);
    console.log("Name of the bucket to put the new value into: " + nameOfTheBucketToPutTheNewValueInto);
    if (nameOfTheBucketToPutTheNewValueInto==null) {
        throw new Error("The given hegith does not fit to any bucket");
    }
    let elementsInTheBucket = arrayOfHeightRangeBuckets[nameOfTheBucketToPutTheNewValueInto];
    elementsInTheBucket = insertSortedArray(elementsInTheBucket, newHeight);   
    arrayOfHeightRangeBuckets[nameOfTheBucketToPutTheNewValueInto] = elementsInTheBucket;
}

function searchIndexOfHeightByCheckingOnlyInTheRightBucket(arrayOfHeightRangeBuckets, heigthValueToFind) {
    console.log("Start finding a heightValue: " + heigthValueToFind);
    let nameOfTheRelevantBucket = getNameOfTheRelevantBucket(heigthValueToFind); 
    console.log("Name of the bucket find the elem: " + nameOfTheRelevantBucket);
    if (nameOfTheRelevantBucket==null) {
        console.log("The given hegith does not fit to any bucket");
        return -1;
    }

    let elementsInBucket = arrayOfHeightRangeBuckets[nameOfTheRelevantBucket];
    let foundIndex = BinarySearchIterative(elementsInBucket, heigthValueToFind); //searching in the relevant bucket only
    if (foundIndex > -1) {
        console.log("All the bucketets were checked and element was found in " + nameOfTheRelevantBucket + " at position: " + foundIndex );
        return foundIndex;
    };
    console.log("The relevant bucket was checke but the given hegith was not found");

}

const heights = [8848, 6194, 8611, 5895, 8051, 5642, 4695, 4897, 2228, 4884, 2764, 2942, 3798, 345, 694, 2386, 2925, 1951, 1602, 318, 1324, 4810, 2917, 1831, 1041, 2110, 2499, 312, 2599, 2764, 1014, 253, 430, 161, 1343, 2962, 2469, 4810, 5642, 2351, 2544, 739, 3718, 4634, 2111, 2169, 2654, 2864, 2061, 75, -405, -209, -155, -154, -133, -132, -116, -105, -86, -81, -72, -57, -53, -45, -40, -40, -39, -35, -32, -3];
const sortedHeights = InsertionSorting(heights);
const above = 8000;
const countOfHeighsAbove = CountingByHeight(heights, above);
console.log("Count of heights above "+above +": ", countOfHeighsAbove);

const arrayOfHeightRangeBuckets = { //buckeket for each height range
    Melyfoldek: [], //0m alattiak - bucket
    Siksagok: [], //1 es 100 m kozottiek - bucket
    Dombsagok: [], //101 es 500 m kozottiek - bucket
    Kozephegysegek: [], //501 es 2000 m kozottiek - bucket
    Magashegysegek: [], //2001 es 5000 m kozottiek - bucket
    NagyonMagasHegysegek: [], //5000-8000 m kozottiek - bucket
    Orokhomezo: [] //8000 m folottiek, ahol sosem olvad el a ho - bucket
}
console.log("SIMPLE console log:");
console.log(arrayOfHeightRangeBuckets);
arrayOfHeightRangeBuckets.Melyfoldek = FilterByHeightLimit(sortedHeights, -1000, 0);
arrayOfHeightRangeBuckets.Siksagok = FilterByHeightLimit(sortedHeights, 1, 100);
arrayOfHeightRangeBuckets.Dombsagok = FilterByHeightLimit(sortedHeights, 101, 500);
arrayOfHeightRangeBuckets.Kozephegysegek = FilterByHeightLimit(sortedHeights, 501, 2000);
arrayOfHeightRangeBuckets.Magashegysegek = FilterByHeightLimit(sortedHeights, 2001, 5000);
arrayOfHeightRangeBuckets.NagyonMagasHegysegek = FilterByHeightLimit(sortedHeights, 5001, 8000);
arrayOfHeightRangeBuckets.Orokhomezo = FilterByHeightLimit(sortedHeights, 8001, 9000);
console.log("SIMPLE console log:");
console.log(arrayOfHeightRangeBuckets);
console.log("PRINT function console log:");
print1(arrayOfHeightRangeBuckets);
console.log("...................");
searchIndexOfHeightByGoingThroughAllTheBuckets(arrayOfHeightRangeBuckets, 312);
searchIndexOfHeightByGoingThroughAllTheBuckets(arrayOfHeightRangeBuckets, 2599);
searchIndexOfHeightByGoingThroughAllTheBuckets(arrayOfHeightRangeBuckets, 8611);
searchIndexOfHeightByGoingThroughAllTheBuckets(arrayOfHeightRangeBuckets, 9000);
console.log("...................");
searchIndexOfHeightByCheckingOnlyInTheRightBucket(arrayOfHeightRangeBuckets, 312);
searchIndexOfHeightByCheckingOnlyInTheRightBucket(arrayOfHeightRangeBuckets, 2599);
searchIndexOfHeightByCheckingOnlyInTheRightBucket(arrayOfHeightRangeBuckets, 8611);
searchIndexOfHeightByCheckingOnlyInTheRightBucket(arrayOfHeightRangeBuckets, 9000);
console.log("...................");
insertNewHeight(arrayOfHeightRangeBuckets, 313);
insertNewHeight(arrayOfHeightRangeBuckets, 8091);
insertNewHeight(arrayOfHeightRangeBuckets, 1014);
console.log("PRINT function console log:");
print1(arrayOfHeightRangeBuckets);


