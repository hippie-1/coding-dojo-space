import { Config } from '../../util/Config.js';
import * as fs from 'node:fs';


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
    
    compareTo(obj) {
        if (obj instanceof Currency) {
            if (this.exchangeRate > obj.exchangeRate) return 1;
            if (this.exchangeRate == obj.exchangeRate) return 0;
            if (this.exchangeRate < obj.exchangeRate) return -1;
        }
    }
}

function loadExchangeRates () {
        try {
            let ExchangeRatesPlainText = fs.readFileSync('monthlyExchangeRates.json', 'utf8');
            //console.log('File contents:', menuItemPlainText);
            if (ExchangeRatesPlainText) {
                let exchangeRates = JSON.parse(ExchangeRatesPlainText);
                return exchangeRates;
            }
            else return [];
        } catch (err) {
            console.error('Error reading file:', err);
            throw err; //shuld not catch the error at all since we can not do anything with it here, only forward it to the invoker
        }
}

//const exchangeRatesArrayByDay = loadExchangeRates();
// console.log(exchangeRatesArrayByDay);



const arrayOfCurrencies = [];
/*
for (let i=0; i<exchangeRatesArrayByDay.length; i++) {
    const keys = Object.keys(exchangeRatesArrayByDay[i]);
    const date = exchangeRatesArrayByDay[i]['Date'];
    for (let j=1; j<keys.length; j++) {
        const value = exchangeRatesArrayByDay[i][keys[j]];
        const currency = new Currency(date, keys[j], parseFloat(value));
        arrayOfCurrencies.push(currency);
    }
}
*/
// console.log(arrayOfCurrencies);

function persistAllCurrencies(arrayOfCurrencies) {
        let allCurrenciesPlainText = JSON.stringify(arrayOfCurrencies);
        try {
            fs.writeFileSync(Config.getExhangeRatesPath(), allCurrenciesPlainText);
            console.log('File written successfully!');
            } catch (err) {
            console.error('Error writing file:', err);
         }
}

//persistAllCurrencies(arrayOfCurrencies);
