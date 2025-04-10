/*
https://nh-fintech-labs.atlassian.net/jira/software/projects/DEV/boards/6?issueParent=10023%2C10198%2C10199%2C10210%2C10200%2C10229%2C10295&selectedIssue=DEV-120
https://www.w3schools.com/dsa/index.php
Excersice:
Class: ListNode
    constructor (value, next)
    getNext()
        returns the next elem
    hasNext()
        returns if next elem exists
    setNext(listElem)
        sets the next elem
Class: LinkedList
    constructor()
        head = null
    insert(value)
        new listNode created, (where next pointer is null) to the first possible place
        last node’s next link pioints to the newly inserted node
    get(value)
        go through the linkedList
        if the value of a listElem matches the given value, return the value
    remove(value)
        go through the linkedList
        if the value of a listNode’s value matches the given value
            previous listNode’s next pointer points to the found listNode’s next
    isEmpty()
        return if head is null
    toString() - for testing
        go through the linkedList, and console log all the elements
*/

export class ListNode {
    constructor (value) {
        this.value = value;
        this.next = null;
    }

    getNext () {
        return this.next;
    }

    hasNext () {
        return (this.next != null && this.next != undefined);
    }

    setNext (listElem) {
        this.next = listElem;
    }
}

export class LinkedList {

    constructor() {
        this.head = null;
    }

    insert (value) {
        const newElem = new ListNode(value);
        if (this.head == null) {
            this.head = newElem;
        } else {
            let currentNode = this.head;   
            newElem.setNext(currentNode);
            this.head = newElem;
        }
    }

    get (value) {
        let currentNode = this.head;
        while (currentNode.value != value) {
            currentNode = currentNode.getNext();
            if (currentNode == null) {
                return null;
            }
        }
        return currentNode;
    }

    remove (value) {
        let currentNode = this.head;
        if (currentNode.value == value) {
            this.head = currentNode.next;
            return true;
        }
        let found = false;
        while (currentNode.hasNext()) {
            if (currentNode.next.value == value) {
                found = true;
            }
            if (!found && currentNode.hasNext()) {
                currentNode = currentNode.getNext();
            } else {
                break;
            }
        }
        if (found && currentNode.hasNext() == true) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode.next = null;
        }
        return found;
    }

    isEmpty () {
        return (this.head == null);
    }

    toString () {
        let currentNode = this.head;
        if (this.head == null) {
            console.log(this.head);
        } else {
            while (currentNode != null) {
                console.log(currentNode);
                currentNode = currentNode.getNext();
            }
        }
    }

}

/* TESTS:
const testList = new LinkedList();
testList.insert(22);
testList.insert(20);
testList.insert(45);
// console.log(testList)
testList.toString();
// console.log(`Is empty? ${testList.isEmpty()}`);
// console.log(`Is node removed? ${testList.remove(20)}`);
// testList.toString();
*/