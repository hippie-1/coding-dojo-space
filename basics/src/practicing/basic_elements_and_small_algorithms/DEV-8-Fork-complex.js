/*
https://nh-fintech-labs.atlassian.net/jira/software/projects/DEV/boards/6?issueParent=10023%2C10198%2C10199%2C10210%2C10200%2C10229%2C10295&selectedIssue=DEV-8
DEV-8
*/
import { InsertionSorting } from "../../util/Arrays.js";

const originalNumberArr = [-11, 8, -2, 3, -3, 7, 0, 16, 5, 12, 1, -15, 15, 85, 17, -21, 49, 96, -18, 18, 26, 9, 20, -20, 7, 35, 42, -4, 62, 78, 92, 95, 21, 13, 23, 28, 42, 19, 6, 24, 33, 32];
const sortedNumArray = InsertionSorting(originalNumberArr);
console.log(sortedNumArray);

let resultArray1 = (sortedNumArray.filter(number => number<15 || number>20));
let resultArray2 = (sortedNumArray.filter(number => !number<15 || !number>20));
let resultArray3 = (sortedNumArray.filter(number => !(number<15 || number>20)));

console.log(`resultArray1: ${resultArray1}`);
console.log(`resultArray2: ${resultArray2}`);
console.log(`resultArray3: ${resultArray3}`);

let resultArray4 = sortedNumArray.filter(number => number<15 && number>20);
let resultArray5 = sortedNumArray.filter(number => !(number<15) && !(number>20));
let resultArray6 = sortedNumArray.filter(number => !(number<15 && number>20));

console.log(`resultArray4: ${resultArray4}`);
console.log(`resultArray5: ${resultArray5}`);
console.log(`resultArray6: ${resultArray6}`);

let resultArray7 = sortedNumArray.filter(number => number % 2 == 0);
let resultArray8 = sortedNumArray.filter(number => number % 2 != 0);
let resultArray9 = sortedNumArray.filter(number => number<15 && number % 2 == 0);
let resultArray10 = sortedNumArray.filter(number => number<15 || number % 2 == 0);

console.log(`resultArray7: ${resultArray7}`);
console.log(`resultArray8: ${resultArray8}`);
console.log(`resultArray9: ${resultArray9}`);
console.log(`resultArray10: ${resultArray10}`);

let resultArray11 = sortedNumArray.filter(number => number<15 || number>20 || number % 2 == 0);
let resultArray12 = sortedNumArray.filter(number => (number<15 || number>20) || number % 2 == 0);
let resultArray13 = sortedNumArray.filter(number => number<15 || (number>20 || number % 2 == 0));

console.log(`resultArray11: ${resultArray11}`);
console.log(`resultArray12: ${resultArray12}`);
console.log(`resultArray13: ${resultArray13}`);

let resultArray14 = sortedNumArray.filter(number => number<15 && number>20 && number % 2 == 0);
let resultArray15 = sortedNumArray.filter(number => (number<15 && number>20) && number % 2 == 0);
let resultArray16 = sortedNumArray.filter(number => number<15 && (number>20 && number % 2 == 0));

console.log(`resultArray14: ${resultArray14}`);
console.log(`resultArray15: ${resultArray15}`);
console.log(`resultArray16: ${resultArray16}`);

let resultArray17 = sortedNumArray.filter(number => number<15 && number>20 || number % 2 == 0);
let resultArray18 = sortedNumArray.filter(number => (number<15 && number>20) || number % 2 == 0);
let resultArray19 = sortedNumArray.filter(number => number<15 && (number>20 || number % 2 == 0));

console.log(`resultArray17: ${resultArray17}`);
console.log(`resultArray18: ${resultArray18}`);
console.log(`resultArray9: ${resultArray19}`);

let resultArray20 = sortedNumArray.filter(number => number<15 || number>20 && number % 2 == 0);
let resultArray21 = sortedNumArray.filter(number => (number<15 || number>20) && number % 2 == 0);
let resultArray22 = sortedNumArray.filter(number => number<15 || (number>20 && number % 2 == 0));

console.log(`resultArray20: ${resultArray20}`);
console.log(`resultArray21: ${resultArray21}`);
console.log(`resultArray22: ${resultArray22}`);

let resultArray23 = sortedNumArray.filter(number => (number<15 || number>20) && (number % 3 == 0 || number % 4 == 0));
let resultArray24 = sortedNumArray.filter(number => (number<15 || number>20) || (number % 3 == 0 || number % 4 == 0));
let resultArray25 = sortedNumArray.filter(number => (number<15 || number>20) && number % 3 == 0 && number % 4 == 0);
let resultArray26 = sortedNumArray.filter(number => number<15 && number>20 || (number % 3 == 0 || number % 4 == 0));
let resultArray27 = sortedNumArray.filter(number => number<15 && number>20 || number % 3 == 0 && number % 4 == 0);
let resultArray28 = sortedNumArray.filter(number => number<15 && number>20 && number % 3 == 0 && number % 4 == 0);

console.log(`resultArray23: ${resultArray23}`);
console.log(`resultArray24: ${resultArray24}`);
console.log(`resultArray25: ${resultArray25}`);
console.log(`resultArray26: ${resultArray26}`);
console.log(`resultArray27: ${resultArray27}`);
console.log(`resultArray28: ${resultArray28}`);