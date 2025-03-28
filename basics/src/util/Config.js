export class Config {
    //static #projectRootDir = "../../../"
    //static #projectRootDir = "C:/work/nh-fintech-labs/coding-dojo-space/basics/";
    static #projectRootDir = "D:/UserFiles/Ingen/Documents/Projects/nh_fintech_lab/coding-dojo-space/basics/";
    static #loggingDir = "logs/";
    static #dataStoreDir = "dataStore/";
    static #paidOrders = "dataStore/paidOrders.json";
    static #exchangeRates = "dataStore/exchangeRates.json";

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

    static getCustomTemplatingColours(colourCode) { 0-255
        return  `\x1b[38;5;${colourCode}m`;  //38 meand foreground, 5 means some colourset, we can add the 3rd code to identify the colour
    }

    static getAllCustomTemplatingColours() { //in the 0-255 scale
        let colours = [];
        for (let i=0; i<255; i++) {
            let colourCodeText = "colourCode:"+ i;
            let coluredText = Config.getCustomTemplatingColours(i) + colourCodeText + Config.getTemplatingColours('Reset');
            colours.push(coluredText);
        }
        return colours;
    }

    static getLogDirPath() {
        return this.#projectRootDir + this.#loggingDir;;
    }
    
    static getDataStoreDirPath() {
        return this.#projectRootDir + this.#dataStoreDir; 
    }

    static getPaidOrdersPath() {
        return this.#projectRootDir + this.#paidOrders; 
    }
    
    static getExhangeRatesPath() {
        return this.#projectRootDir + this.#exchangeRates; 
    }
}

/*
let allColours = Config.getAllCustomTemplatingColours();
console.log(allColours.join(", "));
let brown = Config.getCustomTemplatingColours(98);
console.log(brown + "magashegyseg" + Config. getTemplatingColours('Reset'));
*/