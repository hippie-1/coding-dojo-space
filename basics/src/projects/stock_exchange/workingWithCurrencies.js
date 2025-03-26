import * as fs from 'node:fs';
import { Config } from '../../util/Config.js';
import { Currency } from './currency.js';

function loadExchangeRates () {
        try {
            let currenciesPlainText = fs.readFileSync(Config.getExhangeRatesPath(), 'utf8');
            if (currenciesPlainText) {
                let currenciesLoaded = JSON.parse(currenciesPlainText);
                let currencies = [];
                for (let i=0; i<currenciesLoaded.length; i++) {
                    currencies.push(new Currency(currenciesLoaded[i].date, currenciesLoaded[i].currencyName, currenciesLoaded[i].exchangeRate));
                }
                return currencies;
            }
            else return [];
        } catch (err) {
            console.error('Error reading file:', err);
            throw err; //shuld not catch the error at all since we can not do anything with it here, only forward it to the invoker
        }
}

const currencies = loadExchangeRates();

const chfArray = currencies.filter(element => element.currencyName == 'CHF')
const yesterday = currencies.filter(element => element.date == '2025. 03. 25.')
const above400 = currencies.filter(element => element.exchangeRate > 400)
console.log(above400);