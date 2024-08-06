// Stack implementing Queue

class Stack {
    constructor() {
        this.queue = []
    }

    push(value) {
        this.queue.push(value);

        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift());
        }
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    clear() {
        let tempQueue = this.queue;
        this.queue = [];
        return tempQueue;
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + " ";
        }
        return str.trim();
        // return this.queue.join(' ');
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack Using Queue Element's : ", stack.printStack());
