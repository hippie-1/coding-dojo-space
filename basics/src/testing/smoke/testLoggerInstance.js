import {Logger} from "../../util/Logger.js";
import { testLogger1 } from "./testLoggerInstance1.js";
import { testLogger2 } from "./testLoggerInstance2.js";

let logger = Logger.getInstance();
console.log(logger.toString());

logger.toString();
logger.log("Jó reggelt, Réka!", 25, "testLoggerInstance.js");
logger.log("Szép napot, Réka!", "valami");
logger.log("szép estét, Réka!", -142);

testLogger1();
testLogger2();