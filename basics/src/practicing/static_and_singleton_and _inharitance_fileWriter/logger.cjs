export class Logger {

    static instance;
    static creationDate;
    static fileName;


    constructor() {

        this.creationDate = new Date();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }

    toString() {
        return this.creationDate;
    }

}

  