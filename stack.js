// Stack 

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) {
            return console.log("underflow")
        }
        return this.items.pop()
    }

    peek() {
        if (this.items.length == 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str.trim();
    }

}

let stack = new Stack();

// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.peak());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack());

console.log(stack.pop())

console.log(stack.printStack());