import {Logger} from "../../util/loggerS.js";

import { runTests } from "./testLoggerStatic.js";

console.log(Logger.toString());
Logger.log("Jó reggelt, Réka!\n");
Logger.log("Szép napot, Réka!\n");
Logger.log("szép estét, Réka!\n");

runTests();