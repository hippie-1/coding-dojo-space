//import fs from "fs";
import * as fs from 'node:fs';
import { Config } from './Config.js';

export class Logger {

    static #instance;
    creationDate;
    loggingDir = Config.getLogDirPath();
    loggingFile;
    
    static getInstance(applicationName="") {
        console.log("Logger getInstance");
        if (!this.#instance) {
            this.#instance = new Logger(applicationName);
        }
        return this.#instance;
    }

    constructor(applicationName) {
        this.creationDate = new Date();
        let applicationDir = "";
        if (applicationName) {
            applicationDir = applicationName + "/";
        }
        this.createLogDirIfDoesntExists(this.loggingDir + applicationName);
        this.loggingFile = this.loggingDir + applicationDir + this.formatDate(this.creationDate) + ".log.ans"
        //this.loggingFile = "helloworld.txt"
        console.log("Logger constructor, loggingFile:", this.loggingFile);
    }

    createLogDirIfDoesntExists(dirPath) {
        if (fs.existsSync(dirPath)) {
            console.log('Logger, Directory exists.');
            return true;
          } else {
            console.log('Logger, Directory does not exist.');
        }
        fs.mkdir(dirPath, { recursive: true }, (err) => {
          if (err) {
            return console.error('Logger, Error creating directory:', err);
          }
          console.log('Logger, Directory created successfully!', dirPath);
        });
        return true;    
    }

    formatDate(date) {
        let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate() + '_';
        let year = date.getFullYear();
        let hour = date.getHours() + "h";
        let min = date.getMinutes() + "m";
        let sec = date.getSeconds() + "s";
    
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
        if (fileName) {
            content = content + ", " + fileName;
        }
        if (methodName) {
            content = content + ", " + methodName;
        } 
        if (message) {
            content = content + ", " + message;
        }
        if (data) {
            if (data instanceof Object) {
                content = content + JSON.stringify(data);
            }
            else content = content + ", " + data;
        }       
        content = content + "\n"
        return content;
    }


    toString() {
        return ("\x1b[35m" + "Logger" + "\x1b[0m" + ", created at:  " + "\x1b[33m" + this.creationDate + ", logfile: " + "\x1b[32m" + this.loggingFile + "\x1b[0m");
    }

}

//test:
//Logger.getInstance('brumm5');