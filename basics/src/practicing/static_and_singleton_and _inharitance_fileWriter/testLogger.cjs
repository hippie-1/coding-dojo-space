//import {writeToFile} from './logToFile.cjs'

//import writeToFile from './logToFile.cjs';

const valami = require("./logToFile.cjs");

/*
let logger = Logger.getInstance();
console.log(logger.toString());
*/

console.log(import.meta.url);
valami.writeToFile();