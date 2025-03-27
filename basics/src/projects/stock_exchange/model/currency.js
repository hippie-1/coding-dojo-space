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