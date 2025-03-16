import {Logger} from "../../util/Logger.js";

export function testLogger1() {
    let logger = Logger.getInstance();
    console.log(logger.toString());

    logger.toString();
    logger.log("Jó reggelt, Réka!", 125, "testLoggerInstance1.js");
    logger.log("Szép napot, Réka!", "valami1");
    logger.log("szép estét, Réka!", -1142);
}
