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
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return console.log("Please Enter Valid Index.");
        }

        let node = new Node(element);
        let curr, prev;
        curr = this.head;

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            let it = 0;

            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            node.next = curr;
            prev.next = node;
        }

        this.size++;
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return console.log("Please enter valid index.");
        }

        let curr, prev, it = 0;
        curr = this.head;
        prev = curr;

        if (index === 0) {
            this.head = curr.next;
        } else {
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            prev.next = curr.next;
        }

        this.size--;
        return curr.element;
    }

    removeElement(element) {
        let curr = this.head;
        let prev = null;

        while (curr !== null) {
            if (curr.element === element) {
                if (prev === null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.element;
            }

            prev = curr;
            curr = curr.next;
        }
        return -1;
    }

    indexOf(element) {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            if (current.element === element) {
                return count;
            }
            count++;
            current = current.next;
        }

        return -1;
    }

    search(element) {
        let current = this.head;
        while (current !== null) {
            if (current.element === element) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    findNode(element) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.element === element)
                return curr;
            curr = curr.next;
        }
        return null;
    }

    insertAfter(prevNode, element) {
        if (prevNode === null)
            return console.log("The given previous node cannot be null.");
        let newNode = new Node(element);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.size++;
    }

    append(element) {
        let newNode = new Node(element);

        if (this.head === null) return this.head = newNode;

        let last = this.head;
        while (last.next !== null)
            last = last.next;

        last.next = newNode;
    }


    isEmpty() {
        return this.size === 0;
    }

    size_of_list() {
        console.log("LinkedList Size: ", this.size);
    }

    printList() {

        if (this.head === null) return console.log("Linked List is Empty! ")

        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " -> ";
            curr = curr.next;
        }
        console.log("Print: ", str.trim());
    }
}

let ll = new LinkedList();
console.log(ll.isEmpty());

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log("Remove Element: ", ll.removeElement(40));

ll.insertAt(40, 0);
let node30 = ll.findNode(30);
ll.insertAfter(node30, 35);
ll.append(60);
console.log("is element present: ", ll.search(20));
ll.printList();
