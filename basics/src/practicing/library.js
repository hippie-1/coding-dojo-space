// import { Book, arrayOfBooks } from 'booksData.js';

function Book (category, writer, title) {

    this.category = category;
    this.writer = writer;
    this.title = title;

    this.equals = function (otherBookObject) {
        if (this.category===otherBookObject.category && this.writer===otherBookObject.writer && this.title===otherBookObject.title) {
            return true;
        }
        else return false;
    }
}
*/
const arrayOfBooks = [
    new Book('tortenelem', 'Stendhal', 'Europa'),
    new Book('szepirodalom', 'Petofi', 'Nemzeti dal'),
    new Book('krimi', 'Austen', 'Tiz kicsi neger'),
    new Book('gyerekkonyv', 'Weores', 'Bobita'),
    new Book('lektur', 'Naray', 'Zara'),
    new Book('tortenelem', 'Napoleon', 'Hadviseles'),
    new Book('szepirodalom', 'Arany', 'Toldi'),
    new Book('krimi', 'Jo Nesbo', 'Vorosbegy'),
    new Book('tortenelem', 'Stendhal', 'Europa'),
    new Book('szepirodalom', 'Petofi', 'Összes'),
    new Book('szepirodalom', 'Jokai', 'Koszivu')
]

var polcCategoryArray = ['tortenelem', 'szepirodalom', 'krimi', 'gyerekkonyv', 'lektur'];
var polcTortenelem = [];
var polcSzepirodalom = [];
var polcKrimi = [];
var polcGyerekkonyv = [];
var polcLektur = [];

function assignBooksToCategory (arrayOfBooks) {
    for (let i=0; i<arrayOfBooks.length; i++) {
        console.log(arrayOfBooks[i]);
        if (arrayOfBooks[i].category == 'tortenelem') {
            polcTortenelem.push(arrayOfBooks[i]);
        }
        if (arrayOfBooks[i].category == 'szepirodalom') {
            polcSzepirodalom.push(arrayOfBooks[i]);
        }
        if (arrayOfBooks[i].category == 'krimi') {
            polcKrimi.push(arrayOfBooks[i]);
        }
        if (arrayOfBooks[i].category == 'gyerekkonyv') {
            polcGyerekkonyv.push(arrayOfBooks[i]);
        }
        if (arrayOfBooks[i].category == 'lektur') {
            polcLektur.push(arrayOfBooks[i]);
        }
    }
}

function elementExchange(array, index1, index2) {
    var tempValue = array[index1];
    array[index1] = array[index2];
    array[index2]= tempValue;
}

function sortBooksByWriterAlphabeticallyAsc (bookArrayToBeSorted) { 
  
    var bookArray = bookArrayToBeSorted.slice();
    for (let i=0; i<bookArray.length; i++) {
      for (let j=i+1; j<bookArray.length; j++) {
        if (bookArray[i].writer > bookArray[j].writer) {
          elementExchange(bookArray, i, j)
        }
      }
    }
    return bookArray;
}


assignBooksToCategory(arrayOfBooks);
//var polcTortenelem = assignBooksToCategory(arrayOfBooks, 'tortenelem');
console.log('Toripolc: ', polcTortenelem);
polcTortenelem = sortBooksByWriterAlphabeticallyAsc(polcTortenelem);
console.log('Toripolc: ', polcTortenelem);
//var polcSzepirodalom = assignBooksToCategory(arrayOfBooks, 'szepirodalom');
console.log('Szepir polc: ', polcSzepirodalom);
polcSzepirodalom = sortBooksByWriterAlphabeticallyAsc(polcSzepirodalom);
console.log('Szepir polc: ', polcSzepirodalom);
//var polcKrimi = assignBooksToCategory(arrayOfBooks, 'krimi');
console.log('Krimipolc: ', polcKrimi);
polcKrimi = sortBooksByWriterAlphabeticallyAsc(polcKrimi);
console.log('Krimipolc: ', polcKrimi);
//var polcLektur = assignBooksToCategory(arrayOfBooks, 'lektur');
console.log('Lektur polc: ', polcLektur);
polcLektur = sortBooksByWriterAlphabeticallyAsc(polcLektur);
console.log('Lektur polc: ', polcLektur);
//var polcGyerekkonyv = assignBooksToCategory(arrayOfBooks, 'gyerekkonyv');
console.log('Gyerekpolc: ', polcGyerekkonyv);
polcGyerekkonyv = sortBooksByWriterAlphabeticallyAsc(polcGyerekkonyv);
console.log('Gyerekpolc: ', polcGyerekkonyv);

var bookToBeFound = new Book ('szepirodalom', 'Petofi','Összes');

function findAPolcOfABook (bookToBeFound) {
    let polc = polcTortenelem;
    if (bookToBeFound.category == 'szepirodalom') {
        polc = polcSzepirodalom;
    }
    if (bookToBeFound.category == 'tortenelem') {
        polc = polcTortenelem;
    }
    if (bookToBeFound.category == 'krimi') {
        polc = polcKrimi;
    }
    if (bookToBeFound.category == 'lektur') {
        polc = polcLektur;
    }
    if (bookToBeFound.category == 'gyerekkonyv') {
        polc = polcGyerekkonyv;
    }
    console.log('POLC: ', polc);
    return polc;
}

var polcFound = findAPolcOfABook(bookToBeFound);
var bookFoundIndex = LinearSearch (polcFound, bookToBeFound);
console.log('FOUND INDEX: ', bookFoundIndex);

function isSameBook (object1, object2) {
    console.log('OBJECT1: ', object1);
    console.log('OBJECT2: ', object2);
    if (object1 instanceof Book && object2 instanceof Book && 
    object1.category === object2.category && object1.title === object2.title && object1.writer === object2.writer) {
        return true;
    } else {
        return false;
    }
}

function LinearSearch (bookArray, book) {
    console.log('BOOK ARRAY LINEAR SEARCH: ', bookArray)
    let indexOfLinearSearch = -1;
    for (let i=0; i<bookArray.length; i++) {
        if (bookArray[i].equals(book)) {
            indexOfLinearSearch = i;
            return indexOfLinearSearch;  
        }
        /*
        if (bookArray[i].equals(book)) {
            indexOfLinearSearch = i;
            return indexOfLinearSearch;            
        }
        
        /*
        if (isSameBook (bookArray[i], book)) {
            indexOfLinearSearch = i;
            return indexOfLinearSearch;
        }
        */
    }
    return indexOfLinearSearch;
}


