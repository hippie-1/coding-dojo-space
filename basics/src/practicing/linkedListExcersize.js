import { generateRandomNumber } from "../util/BasicFunctions";

class ListElem {
    constructor(value, prev, next) {
        this.value = value;
        this.next = next;  //jobbkéz
        this.prev = prev;  //balkéz
    }
    getNext() {
        return this.next;
    }
    setNext(ListElem) {
        this.next = ListElem;
    }
    hasNext() {
        return this.next !=null;
    }
    getPrev() {
        return this.prev;
    }
    setPrev(ListElem) {
        this.prev = ListElem;
    }
    hasPrev() {
        return this.prev !=null;
    }
}
 
let listElem1 = new ListElem(1, null);
let listElem2 = new ListElem(3, null);
let listElem3 = new ListElem(5, null);
let listElem4 = new ListElem(7, null);
let listElem5 = new ListElem(9, null);

listElem1.setNext(listElem2);
listElem2.setNext(listElem3);
listElem3.setNext(listElem4);
listElem4.setNext(listElem5);

listElem5.setPrev(listElem4);
listElem4.setPrev(listElem3);
listElem3.setPrev(listElem2);
listElem2.setPrev(listElem1);

// console.log("ListEleme1: ", listElem1);
// console.log("ListEleme2: ", listElem2);
// console.log("ListEleme3: ", listElem3);
// console.log("ListEleme4: ", listElem4);
// console.log("ListEleme5: ", listElem5);

/*
let actualElem = listElem1;
console.log("ACT Elem: ", actualElem.value);
while (actualElem.hasNext()) {
    actualElem = actualElem.getNext();
    console.log("ACT Elem: ", actualElem.value);
}

while (actualElem.hasPrev()) {
    actualElem = actualElem.getPrev();
    console.log("ACT Elem: ", actualElem.value);
}
*/
let head = listElem1;
function findElement (value) {
    let actualElem = head;
    if(actualElem.value == value) {
        return actualElem;
    }
    while (actualElem.hasNext()) {
        actualElem = actualElem.getNext();
        if (actualElem.value == value) {
            return actualElem;
        }
        console.log("ACT Elem: ", actualElem.value);
    } 
    return null; 
}

let findElementResult = findElement(1);
console.log('FOUND ELEMENT: ', findElementResult);

// function findElementByCondition(head, value) {
//     let actualElem = head;
//     console.log("ACT Elem: ", actualElem.value);
//     if (actualElem.value > value) {
//         return actualElem;
//     }
//     while (actualElem.hasNext()) {
//         actualElem = actualElem.getNext();
//         if (actualElem.value > value) {
//             return actualElem;
//         }
//         console.log("ACT Elem: ", actualElem.value);

//     } 
//     return null; 
// }

// function insertElement (head, value) {
//     let elementFounded = findElementByCondition(head, value);
//     console.log("Elem: ", elementFounded);
//     let elem = new ListElem(value, null, null);
//     elem.setPrev(elementFounded.getPrev());
//     elementFounded.getPrev().setNext(elem);
//     elementFounded.setPrev(elem);
//     elem.setNext(elementFounded);
// }

// insertElement (head, 4); //szúrjunk be új elemet, melynek value-ja 4
// //írjuk ki újra az elemeket
// let actualElem = listElem1;
// console.log("ACT Elem: ", actualElem.value);
// while (actualElem.hasNext()) {
//     actualElem = actualElem.getNext();
//     // console.log("ACT Elem: ", actualElem.value);
// }
// //kiíratás vége


function removeElement (head, value) {
    //1. find the exact element which contains the given value
    //2. remove the found element
    let elementFound = findElement(value);
    console.log('Element to REMOVE: ', elementFound);
    elementFound.getNext().setPrev(elementFound.getPrev());
    elementFound.getPrev().setNext(elementFound.getNext());
}

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
removeElement (head, 7); //töröljük ki a 7 value-val rendelkező elemet
//írjuk ki újra az elemeket
let actualElem = listElem1;
console.log("ACT Elem: ", actualElem.value);
while (actualElem.hasNext()) { 
    actualElem = actualElem.getNext();
    console.log("ACT Elem: ", actualElem.value);
}
//kiíratás vége

const Jozsi = new ListElem('Jozsi', null, null);
const Kati = new ListElem('Kati', null, Jozsi);
const Pisti = new ListElem('Pisti', null, Kati);
const Mariska = new ListElem('Mariska', null, Pisti);
const Zoli = new ListElem('Zoli', null, Mariska);
const Lacika = new ListElem('Lacika', null, Zoli);

Jozsi.setNext(Kati);
Kati.setNext(Pisti);
Pisti.setNext(Mariska);
Mariska.setNext(Zoli);
Zoli.setNext(Lacika);

console.log('________________________________________________');
actualElem = Jozsi;
console.log("ACT Elem: ", actualElem.value);
while (actualElem.hasNext()) {
    actualElem = actualElem.getNext();
    console.log("ACT Elem: ", actualElem.value);
}
console.log('________________________________________________');
head = Jozsi;
actualElem = Jozsi;
const removedStudent = removeElement (head, 'Pisti');
console.log("ACT Elem: ", actualElem.value);
while (actualElem.hasNext()) {
    actualElem = actualElem.getNext();
    console.log("ACT Elem: ", actualElem.value);
}

/*
3 átfog 4-ről 5-re = 3-as jobbkeze megfogja a 4-es jobbkezénél lévő 5-t
3.next = 4.next
5 átfog 4-ről 3-ra = 5-ös balkeze megfogja a 4-es balkezénél lévő 3-t
5.prev = 4.prev

4 belekapaszkodik 5 testébe (4.next = 5)
4 belekapaszkodik 3 testébe (4.prev = 3)
5 átfog 4-re (5.prev = 4)
3 átfog 4-re (3.next = 4)
*/

head = new ListElem(generateRandomNumber(1, 5), null, null);
value = head.value + generateRandomNumber();
const actual = new ListElem(value, head, null);
for (let i=1; i<10; i++) {
}