class Queue {
    constructor() {
        this.items = [];
        this.frontIndex = 0;
        this.rareIndex = 0;
    }

    enQueue(item) {
        this.items[this.rareIndex] = item;
        this.rareIndex++
        return item + " " + 'inserted';
    }

    deQueue() {
        if (this.frontIndex === this.rareIndex) {
            return "Queue is empty";
        }
        // const item = this.items[this.frontIndex];
        // delete this.items[this.frontIndex];
        // this.frontIndex++;
        const item = this.items.shift();
        return item + ' ' + 'remove';
    }

    peek() {
        if (this.frontIndex === this.rareIndex) {
            return "Queue is empty";
        }
        return this.items[this.frontIndex] + " " + "peek";
    }

    get printQueue() {
        return this.items;
    }
}

const queue = new Queue()
console.log(queue.enQueue(7))
console.log(queue.enQueue(2))
console.log(queue.enQueue(6))
console.log(queue.enQueue(4))

let print = queue.printQueue;

console.log("Print : ", print);
console.log("Peek : ", queue.peek());
console.log(queue.deQueue());

console.log("Print : ", print);
console.log("Peek : ", queue.peek());
