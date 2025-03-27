import { Config } from '../../../util/Config.js';
import * as fs from 'node:fs';
import { Currency } from '../model/currency.js';


function readExchangeRatesFromMNBFile () {
        try {
            let ExchangeRatesPlainText = fs.readFileSync('./source/monthlyExchangeRates.json', 'utf8');
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

function transformCurrenciesAndPushToArray(exchangeRatesArrayByDayFromMNB) {

    let arrayOfCurrencies = [];
    for (let i=0; i<exchangeRatesArrayByDayFromMNB.length; i++) {
        const keys = Object.keys(exchangeRatesArrayByDayFromMNB[i]);
        const date = exchangeRatesArrayByDayFromMNB[i]['Date'];
        for (let j=1; j<keys.length; j++) {
            const value = exchangeRatesArrayByDayFromMNB[i][keys[j]];
            const currency = new Currency(date, keys[j], parseFloat(value.replace(",", ".")));
            arrayOfCurrencies.push(currency);
        }
    }
    return arrayOfCurrencies;
}

function persistAllCurrencies(arrayOfCurrencies) {
        let allCurrenciesPlainText = JSON.stringify(arrayOfCurrencies);
        try {
            fs.writeFileSync(Config.getExhangeRatesPath(), allCurrenciesPlainText);
            console.log('File written successfully!');
            } catch (err) {
            console.error('Error writing file:', err);
         }
}


const exchangeRatesArrayByDayFromMNB = readExchangeRatesFromMNBFile();
console.log(exchangeRatesArrayByDayFromMNB);
const arrayOfCurrencies = transformCurrenciesAndPushToArray(exchangeRatesArrayByDayFromMNB);
console.log(arrayOfCurrencies);
persistAllCurrencies(arrayOfCurrencies); //saving to db
