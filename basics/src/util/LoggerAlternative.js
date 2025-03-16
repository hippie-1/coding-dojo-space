//import fs from "fs";
import * as fs from 'node:fs';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function formatDate(date) {
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

export class Logger {

    static creationDate;
    static loggingDir;
    static loggingFile;

    static {
        console.log("static block at the beginning");
        this.creationDate = new Date();
        this.loggingDir = "../../logs/";
        this.loggingFile = this.loggingDir + formatDate(this.creationDate) + "_log.txt"
    }

    static log(content) {
        try {
          fs.appendFileSync(this.loggingFile, content);
        } catch (err) {
          console.log(err);
        }
    }

    static toString() {
        return ("Logger, created at:  " + this.creationDate + ", logfile: " + this.loggingFile);
        return this.creationDate;
    }

    static {
        console.log("static block at the end");
    }

}


//console.log(import.meta.url);

//example();