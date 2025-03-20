export class Config {
    static #loggingDir = "../../../logs/";
    static #dataStoreDir = "../../../dataStore/";

    static getLogDirPath() {
        return this.#loggingDir;
    }
    
    static getDataStoreDirPath() {
        return this.#dataStoreDir;
    }
}
