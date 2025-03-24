export class Config {
    static #loggingDir = "C:/work/nh-fintech-labs/coding-dojo-space/basics/logs/";
    static #dataStoreDir = "../../../dataStore/";

    static #templatingColours = {
        Reset: "\x1b[0m",
        FgBlack: "\x1b[30m",
        FgRed: "\x1b[31m",
        FgGreen: "\x1b[32m",
        FgYellow: "\x1b[33m",
        FgBlue: "\x1b[34m",
        FgMagenta: "\x1b[35m",
        FgCyan: "\x1b[36m",
        FgWhite: "\x1b[37m",
        FgGray: "\x1b[90m"
    }

    static getTemplatingColours(colourName) {
        return this.#templatingColours[colourName];
    }

    static getAllTemplatingColours() {
        return this.#templatingColours;
    }

    static getLogDirPath() {
        return this.#loggingDir;
    }
    
    static getDataStoreDirPath() {
        return this.#dataStoreDir;
    }
}
