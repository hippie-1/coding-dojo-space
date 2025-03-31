import * as fs from 'node:fs';
import { Config } from '../../util/Config.js';
import { GeoPoint } from './model/geoPoint.js';
import { InsertionSorting, elementExchange } from '../../util/ObjectArrays.js';

export function loadGeoPoints () {
        try {
            let geoPointsPlainText = fs.readFileSync(Config.getGeoPointsPath(), 'utf8');
            if (geoPointsPlainText) {
                let geoPointsLoaded = JSON.parse(geoPointsPlainText);
                let geoPoints = [];
                for (let i=0; i<geoPointsLoaded.length; i++) {
                    geoPoints.push(new GeoPoint(geoPointsLoaded[i].name, Number(geoPointsLoaded[i].height)));
                }
                return geoPoints;
            }
            else return [];
        } catch (err) {
            console.error('Error reading file:', err);
            throw err; //shuold not catch the error at all since we can not do anything with it here, only forward it to the invoker
        }
}

function countingByHeight (originalObjectArray, above) {
    let heightsAboveCounter = 0;
    for (let i=0; i<originalObjectArray.length; i++) {
        if (originalObjectArray[i].getHeight() > above) {
            heightsAboveCounter ++;
        }
    }
    return heightsAboveCounter;
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

function getColourCodeOfTheRelevantBucket(bucketName) {
    let nameOfTheRelevantColour = null;
    switch(bucketName) { //finding the name of the Colour
        case 'Melyfoldek':
            nameOfTheRelevantColour = 28;
            break;
        case 'Siksagok':
            nameOfTheRelevantColour = 78;
            break;
        case 'Dombsagok':
            nameOfTheRelevantColour = 148;
            break;
        case 'Kozephegysegek':
            nameOfTheRelevantColour = 137;
            break;   
        case 'Magashegysegek':  
            nameOfTheRelevantColour = 94;
            break; 
        case 'NagyonMagasHegysegek':  
            nameOfTheRelevantColour = 130;
            break; 
        case 'Orokhomezo':
            nameOfTheRelevantColour = 230;
            break;
        default:
            nameOfTheRelevantColour = 254;            
    }
    return nameOfTheRelevantColour;
}

function insertNewGeoPoint (arrayOfHeightRangeBuckets, newGeoPoint) {
    console.log("Start inserting new geopoint: " + newGeoPoint);
    let nameOfTheBucketToPutTheNewValueInto = getNameOfTheRelevantBucket(newGeoPoint.height);
    console.log("Name of the bucket to put the new value into: " + nameOfTheBucketToPutTheNewValueInto);
    if (nameOfTheBucketToPutTheNewValueInto==null) {
        throw new Error("The given hegith does not fit to any bucket");
    }
    let elementsInTheBucket = arrayOfHeightRangeBuckets[nameOfTheBucketToPutTheNewValueInto];
    if (! elementsInTheBucket) {
        elementsInTheBucket = [];
    }
    elementsInTheBucket.push(newGeoPoint);
    elementsInTheBucket = InsertionSorting(elementsInTheBucket);
    arrayOfHeightRangeBuckets[nameOfTheBucketToPutTheNewValueInto] = elementsInTheBucket;
}

function ArrayToBuckets (arrayOfGeoPoints) {
    let arrayOfBucketedGeoPoints = [];
    arrayOfGeoPoints.map(e => insertNewGeoPoint(arrayOfBucketedGeoPoints, e));
    return arrayOfBucketedGeoPoints;
}


function BucketsToString (arrayOfHeightRangeBuckets) {
    const bucketNames = Object.keys(arrayOfHeightRangeBuckets);
    bucketNames.map(bucketName => bucketToString(bucketName, arrayOfHeightRangeBuckets[bucketName]));
}

    // toString(getColourCodeOfTheRelevantBucket(e.height))
function bucketToString(bucketName, bucket) {
    const colourCodeOfBucket = getColourCodeOfTheRelevantBucket(bucketName);
    console.log(`\n${bucketName}:`);
    bucket.map(geoPoint => console.log(geoPoint.toString(colourCodeOfBucket)));
}

const loadedGeoPoints = loadGeoPoints();
const countedHeights = countingByHeight(loadedGeoPoints, 8000)
const sortedGeoPoints = InsertionSorting (loadedGeoPoints);
const bucketedGeoPoints = ArrayToBuckets(sortedGeoPoints);
console.log(bucketedGeoPoints);

BucketsToString (bucketedGeoPoints);

