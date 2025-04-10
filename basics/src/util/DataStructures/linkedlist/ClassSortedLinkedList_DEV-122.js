/*
https://nh-fintech-labs.atlassian.net/browse/DEV-122
Excersice:
Class: SortedLinkedList extends LinkedList
    insert(value) - override
        new listNode created, where next pointer is null
        relevant listNode: find the listNode that’s value is the largest of those smaller than it
        newly inserted listNode next pointer points to the relevant listNode’s next pointer
        the relevant listNode’s next pointer points tot he newly inserted listNode
Note: you might need to change private modifiers to protected in superclass.
*/

import { LinkedList, ListNode } from "./ClassLinkedList_DEV-120.js";

export class SortedLinkedList extends LinkedList{

    constructor () {
        super()
    }

    insert (value) {
        const newElem = new ListNode(value);
        console.log(newElem)
        if (this.head == null) {
            this.head = newElem;
            return;
        }
        if (this.head.value > value) {
            newElem.setNext(this.head);
            this.head = newElem;
            return;
        }
        let relevantListNode = this.head; // == this.head ?
        let currentNode = this.head;
        // while (currentNode.get(value) < value) {
        while (currentNode != null && currentNode.value < value) {
            relevantListNode = currentNode;
            currentNode = currentNode.getNext();
        }
        if (currentNode != null) {
            newElem.setNext(currentNode);
        }
        relevantListNode.setNext(newElem);
        return relevantListNode;
    }

}


const testList = new SortedLinkedList();
testList.insert(10);
testList.insert(12);
testList.insert(13);
testList.insert(14);
testList.insert(11);
testList.insert(9);
// console.log(testList)
testList.toString();
