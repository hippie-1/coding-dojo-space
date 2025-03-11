// function Letter (sender, addressee, district) {
//     this.sender = sender;
//     this.addressee = addressee;
//     this.district = district
// }

class Letter {
    constructor(sender, addressee, district) {
        this.sender = sender;
        this.addressee = addressee;
        this.district = district
    }
    createHashToLetter() {
        return this.district + this.addressee.charAt(0).toLowerCase();
    }
    equals(anotherLetter) {
        return this.sender==anotherLetter.sender && this.addressee==anotherLetter.addressee && this.district==anotherLetter.district;
    }
}

class AddressCard {
    constructor(district, name) {
        this.district = district;
        this.name = name;
    }
    createHashToLetter() {
        return this.district + this.name.charAt(0).toLowerCase();
    }
}

const visitors = [
    new AddressCard(1, 'Gacs Gyongyi'),
    new AddressCard(1, 'Serpa Arpi'),
    new AddressCard(2, 'Vida Reka'),
    new AddressCard(2, 'Polgar Peti'),
]

var bucket1g = [];
var bucket1s = [];
var bucket2p = [];
var bucket2v = [];

const incomingLetters = [
    new Letter('NAV', 'Vida Reka', 2),
    new Letter('Allamkincstar', 'Gacs Gyongyi', 1),
    new Letter('OTP', 'Polgar Peti', 2),
    new Letter('NAV', 'Serpa Arpi', 1),
    new Letter('OTP', 'Vida Reka', 2),
    new Letter('Ipsos', 'Vida Reka', 2),
    new Letter('Nyugdijpenztar', 'Vida Reka', 2),
    new Letter('NAV', 'Vasott Ildiko', 2),
    new Letter('OTP', 'Vasott Ildiko', 2),
    new Letter('NAV', 'Vida Reka', 2),
]

// function createHashToLetter (letter) {
//     let hashOfLetter = letter.district.concat(letter.addressee.charAt(0).toLowerCase());
//     return hashOfLetter;
// }


function assignLettersToBucket (arrayOfLetters) {
    console.log(arrayOfLetters);
    for (let i=0; i<arrayOfLetters.length; i++) {
        if( arrayOfLetters[i].createHashToLetter() == '1g') {
            bucket1g.push(arrayOfLetters[i]);
        }
        if( arrayOfLetters[i].createHashToLetter() == '1s') {
            bucket1s.push(arrayOfLetters[i]);
        }
        if( arrayOfLetters[i].createHashToLetter() == '2p') {
            bucket2p.push(arrayOfLetters[i]);
        }
        if( arrayOfLetters[i].createHashToLetter() == '2v') {
            bucket2v.push(arrayOfLetters[i]);
        }
    }
}

assignLettersToBucket(incomingLetters);
console.log('Bucket 1g: ', bucket1g);
console.log('Bucket 1s: ', bucket1s);
console.log('Bucket 2p: ', bucket2p);
console.log('Bucket 2v: ', bucket2v);

function getAllLettersFromBucketByAddressCard (addresscard) {
    let targetBucket = null;
    if (addresscard.createHashToLetter() === '1g') {
        targetBucket = bucket1g;
    }
    if (addresscard.createHashToLetter() === '1s') {
        targetBucket = bucket1s;
    }
    if (addresscard.createHashToLetter() === '2p') {
        targetBucket = bucket2p;
    }
    if (addresscard.createHashToLetter() === '2v') {
        targetBucket = bucket2v;
    }
    console.log('TARGET BUCKET: ', targetBucket);
    let lettersToBeCollected = [];
    for (let i=0; i<targetBucket.length; i++) {
        if (targetBucket[i].addressee == addresscard.name) {
            lettersToBeCollected.push(targetBucket[i]);
        }
    }
    //removeRetrievedLettersFromBucket (targetBucket, lettersToBeCollected)
    return lettersToBeCollected;
}

// function removeRetrievedLettersFromBucket (bucket, letters) {
//     for (let i=0; i<bucket.length; i++) {
//         if (bucket[i].equals(letters[0])) {
// //            bucket[i]
//         }
//     }
// }

let visitor2LettersMonday = getAllLettersFromBucketByAddressCard(visitors[2]);
let visitor2LettersTuesday = getAllLettersFromBucketByAddressCard(visitors[2]);
console.log('Reka letters on Monday: ', visitor2LettersMonday);
console.log('Reka letters on Tuesday: ', visitor2LettersTuesday);
