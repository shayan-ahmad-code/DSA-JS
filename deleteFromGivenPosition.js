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
            this.head = node
            return
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node
        }

        this.size++;
    }

    deleteFromIndex(index) {
        if (this.head === null) return;

        let temp = this.head;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        // Traverse the list to find the node just before the one we want to delete.
        for (let i = 0; temp !== null && i < index - 1; i++) {
            temp = temp.next;
        }

        if (temp === null || temp.next === null) return;

        temp.next = temp.next.next; // Skip the node to be deleted.
    }

    print() {
        if (this.head === null) {
            return console.log("LinkedList is Empty,Please insert data");
        }

        let curr = this.head;
        let str = "";

        while (curr) {
            str += curr.element + " -> ";
            curr = curr.next;
        }

        str += "null";
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
ll.deleteFromIndex(2);
ll.print();