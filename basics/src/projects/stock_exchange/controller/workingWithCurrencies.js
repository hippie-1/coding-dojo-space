import * as fs from 'node:fs';
import { Config } from '../../../util/Config.js';
import { Currency } from '../model/currency.js';

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
const yesterdayCurrencyRates = currencies.filter(element => element.date == '2025. 03. 25.')
const above400 = currencies.filter(element => element.exchangeRate > 400)
console.log(yesterdayCurrencyRates);

console.log();
const numberArray = [5, 8, 2, 18, 128, 96, 357, 41 ,42, 51];
const strArray = ['alfa', 'beta', 'theta', 'gamma', 'omega', 'delta'];
const maxValue = MaxByAnyProperty(yesterdayCurrencyRates, 'currencyName');
//console.log("Max value: ", maxValue);
const testResult = yesterdayCurrencyRates[3].compareTo(yesterdayCurrencyRates[3]);
console.log(maxValue);

  export function MaxByAnyProperty (originalObjectArray, property) {
    let maxValue = originalObjectArray[0];
    for (let i=0; i<originalObjectArray.length; i++) {
      if (originalObjectArray[i].compareTo(maxValue, property) > 0) {
              maxValue = originalObjectArray[i];
      }
    }
    return maxValue;
  }

