var string1 = 'vLorem ipsum lékjdfgdf Lorem sdf poijwern dfdgldf Lorem VEGE';

var char6 = string1.charAt(6);
// console.log(char6);

var newString = 'ÚJ string innentől';
var concatenatedString1 = string1 + ' ' + newString + '\n';
var concatenatedString2 = string1.concat(' ', newString, '\n');
// console.log(concatenatedString1, concatenatedString2);

// console.log(string1.length);

var kiemeles = string1.slice(0, 7);
// console.log(kiemeles);

var container = string1.split(' ');
// console.log(container);
var joinedString = container.join(', ');
// console.log(joinedString);

var upperCaseString = string1.toUpperCase();
var lowerCaseString = string1.toLowerCase();
// console.log(upperCaseString, lowerCaseString);
var trimmedString = string1.trim();
// console.log(trimmedString);
var subString = string1.substring(string1.length-5, -2);
var subString2 = string1.substr(5, 10); // 5-től 10 hosszan
var replaceString = string1.replaceAll('Lorem', 'Hello');
// console.log(replaceString);
// console.log(string1.charAt(0));

var indexOfString = string1.indexOf('V');
var lastIndexOfString = string1.lastIndexOf('L');
//console.log(lastIndexOfString)


export function stringToHash(string) {

    let hash = 0;

    if (string.length == 0) return hash;

    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        //console.log("CHAR: ", char);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}

// String printing in hash
//let gfg = "Viada Réka"
//console.log(stringToHash(gfg));


class Letter {
    constructor(sender, addressee, district) {
        this.sender = sender;
        this.addressee = addressee;
        this.district = district
    }
    createHashToLetter() {
        return this.district + this.addressee.charAt(0).toLowerCase();
    }
    createHashToLetter2() {
        let hash = 7;
        hash = 13 * hash + stringToHash(this.district) + stringToHash(this.addressee);
        return hash;
    }
    equals(anotherLetter) {

    }
}

/*
let letter =  new Letter('NAV', 'Vida Reka', 2);
console.log("LETTER HASH:" , letter.createHashToLetter2());
*/

