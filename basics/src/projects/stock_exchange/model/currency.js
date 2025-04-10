import { stringToHash } from '../../../../src/util/BasicFunctions.js';
export class Currency {
    baseCurrencyName;
    date;
    currencyName;
    exchangeRate;
    
    constructor (date, currencyName, exchangeRate) {
        this.baseCurrencyName = 'HUF';
        this.date = date;
        this.currencyName = currencyName;
        this.exchangeRate = exchangeRate;
    }

    compareTo(obj, key='exchangeRate') {
        if (!( obj instanceof Currency)) {
            throw new Error('Class cast exception, try with Currency instanse')
        }
        let keys = Object.keys(this);
        let keysToBeCompared = keys.find(elementkey => elementkey == key);
        let result = 0;
        if (this[keysToBeCompared] > obj[keysToBeCompared]) result = 1;
        if (this[keysToBeCompared] == obj[keysToBeCompared]) result = 0;
        if (this[keysToBeCompared] < obj[keysToBeCompared]) result = -1;
        return result;
    }

    equals (obj) {
        if (!( obj instanceof Currency)) {
            return false;
        }
        let keys = Object.keys(this);
        for (let i=0; i<keys.length; i++) {
            if (this[keys[i]] !== obj[keys[i]]) {
                return false;
            }
        }
        return true;
    }

    hashCode () {
        let hashCode = stringToHash(this.baseCurrencyName + this.date + this.currencyName + this.exchangeRate);
                return hashCode;
    }
}
