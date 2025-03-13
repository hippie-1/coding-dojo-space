//import fs from "fs";
import * as fs from 'node:fs';

export class Logger {

    static #instance;
    creationDate;
    loggingDir = "../../logs/";
    loggingFile;

    static {
        console.log("static block at the beginning");
    }
    
    static getInstance() {
        console.log("getInstance");
        if (!this.#instance) {
            this.#instance = new Logger();
        }
        return this.#instance;
    }

    constructor() {
        this.creationDate = new Date();
        this.loggingFile = this.loggingDir + this.formatDate(this.creationDate) + "_log.txt"
        //this.loggingFile = "helloworld.txt"
        console.log("constructor");
    }

    formatDate(date) {
        let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate();
        let year = date.getFullYear();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        if (hour.length < 2) 
            hour = '0' + hour;
        if (min.length < 2) 
            min = '0' + min;        
        if (sec.length < 2) 
            sec = '0' + sec;         
        return [year, month, day, hour, min, sec].join('');
    }

    log(message, data, fileName, methodName) {
        let content = this.formatLog(message, data, fileName, methodName)
        try {
          fs.appendFileSync(this.loggingFile, content);
        } catch (err) {
          console.log(err);
        }
    }

    formatLog(message, data, fileName, methodName) {
        let content = new Date().toISOString();
        content = content + ", " + message;
        if (message) {
            content = content + ", " + message;
        }
        if (data) {
            if (data instanceof Object) {
                content = content + JSON.stringify(data);
            }
            else content = content + ", " + data;
        }
        if (fileName) {
            content = content + ", " + fileName;
        }
        if (methodName) {
            content = content + ", " + methodName;
        }        
        content = content + "\n"
        return content;
    }


    toString() {
        return ("Logger, created at:  " + this.creationDate + ", logfile: " + this.loggingFile);
    }

    static {
        console.log("static block at the end");
    }

}


//console.log(import.meta.url);

//example();