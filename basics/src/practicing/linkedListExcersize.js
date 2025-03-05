class ListElem {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
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


function findElementByCondition(head, value) {
    let actualElem = head;
    console.log("ACT Elem: ", actualElem.value);
    if (actualElem.value > value) {
        return actualElem;
    }
    while (actualElem.hasNext()) {
        actualElem = actualElem.getNext();
        if (actualElem.value > value) {
            return actualElem;
        }
        console.log("ACT Elem: ", actualElem.value);

    } 
    return null; 
}

let head = listElem1;

function insertElement (head, value) {
    let elementFounded = findElementByCondition(head, value);
    console.log("Elem: ", elementFounded);
    let elem = new ListElem(value, null, null);
    elem.setPrev(elementFounded.getPrev());
    elementFounded.getPrev().setNext(elem);
    elementFounded.setPrev(elem);
    elem.setNext(elementFounded);
}

insertElement (head, 4); //szúrjunk be új elemet, melynek value-ja 4
//írjuk ki újra az elemeket
let actualElem = listElem1;
console.log("ACT Elem: ", actualElem.value);
while (actualElem.hasNext()) {
    actualElem = actualElem.getNext();
    console.log("ACT Elem: ", actualElem.value);
}
//kiíratás vége


function removeElement (head, value) {
    
}

removeElement (head, 7); //töröljük ki a 7 value-val rendelkező elemet
//írjuk ki újra az elemeket
actualElem = listElem1;
console.log("ACT Elem: ", actualElem.value);
while (actualElem.hasNext()) {
    actualElem = actualElem.getNext();
    console.log("ACT Elem: ", actualElem.value);
}
//kiíratás vége