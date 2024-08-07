
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }

        this.size++;
    }


    insertAtMiddle(element) {
        let node = new Node(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let ptr = this.head;
            let len = Math.floor(this.size / 2);

            for (let i = 0; i < len - 1; i++) {
                ptr = ptr.next;
            }

            node.next = ptr.next;
            ptr.next = node;
        }

        this.size++;
    }

    print() {
        if (this.head === null) return console.log("Linked List is Empty,Please insert data.")
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " -> ";
            curr = curr.next;
        }
        console.log("Linked List: ", str.trim());
    }

}

let ll = new LinkedList();
ll.add("10");
ll.add("20");
ll.add("30");
ll.add("40");
ll.add("50");
ll.print();
ll.insertAtMiddle("01");
ll.print();
