import {Logger} from "../../util/Logger.js";

export function testLogger2() {
    let logger = Logger.getInstance();
    console.log(logger.toString());

    logger.toString();
    logger.log("Jó reggelt, Réka!", 225, "testLoggerInstance2.js");
    logger.log("Szép napot, Réka!", "valami2");
    logger.log("szép estét, Réka!", -2142);
}