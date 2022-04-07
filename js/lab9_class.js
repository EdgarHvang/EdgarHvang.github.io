/**
 * Usee class syntax to create LinkedList Methods below:
 * add(value)
 * remove(value)
 * print()
 */

 class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {

    constructor(node) {
        this.head = node;
    }

    add(newElement) {
        let newNode = new Node(newElement);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
    }

    find(aElement) {
        let currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != aElement)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    remove(aElement) {
        let preNode = this.find(aElement);
        if (!(preNode.next == null)) {
            preNode.next = preNode.next.next;
        }
    }

    print() {
        let result = 'LinkedList{';
        let node = this.head;
        while (node != null) {
            result += node.element + ",";
            node = node.next;
            // console.log("xxx");
        }
        result += '}';
        console.log(result);
    }

}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(2);
linkedlist.print();
console.log(linkedlist);