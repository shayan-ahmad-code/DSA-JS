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

        if (this.head === null) return this.head = node;
        else {
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
        if (this.head === null) returnthis.head = node;
        else {
            let slow = this.head;
            let fast = this.head.next;

            while (fast !== null && fast.next !== null) {
                slow = slow.next;
                fast = fast.next.next;
            }

            // insert the 'newNode' and adjust the required links
            node.next = slow.next;
            slow.next = node;
        }

        this.size++;
    }

    //    delete the entire LinkedList (hahahaha!)
    deleteList() {
        this.head = null;
        this.size = 0;
    }

    print() {
        if (this.head === null) {
            return console.log("LinkedList is Empty,Please insert data.");
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
ll.insertAtMiddle("01");
ll.print(); 
