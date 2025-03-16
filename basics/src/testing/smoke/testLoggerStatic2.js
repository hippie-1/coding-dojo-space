import {Logger} from "../../util/LoggerAlternative.js";

import { runTests } from "./testLoggerStatic.js";

console.log(Logger.toString());
Logger.log("Jó reggelt, Réka!\n");
Logger.log("Szép napot, Réka!\n");
Logger.log("szép estét, Réka!\n");

runTests();