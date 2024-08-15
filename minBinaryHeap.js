class MinBinaryHeap {
    constructor() {
        this.arr = [];
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    getMin() {
        return this.arr[0];
    }

    insert(k) {
        let arr = this.arr;
        arr.push(k);

        let i = arr.length - 1;
        while (i > 0 && arr[this.parent(i)] > arr[i]) {
            let p = this.parent(i);
            [arr[i], arr[p]] = [arr[p], arr[i]];
            i = p;
        }
    }

    extractMin() {
        let arr = this.arr;
        if (arr.length === 1) {
            return arr.pop();
        }

        let res = arr[0];
        arr[0] = arr[arr.length - 1];
        arr.pop();
        this.MinHeapify(0);
        return res;
    }

    MinHeapify(i) {
        let arr = this.arr;
        let n = arr.length;
        if (n === 1) {
            return;
        }
        let l = this.leftChild(i);
        let r = this.rightChild(i);
        let smallest = i;
        if (l < n && arr[l] < arr[i]) smallest = l;
        if (r < n && arr[r] < arr[smallest]) smallest = r;
        if (smallest !== i) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            this.MinHeapify(smallest);
        }
    }

    deleteKey(i) {
        let arr = this.arr;
        arr[i] = Number.NEGATIVE_INFINITY;
        while (i > 0 && arr[this.parent(i)] > arr[i]) {
            let p = this.parent(i);
            [arr[i], arr[p]] = [arr[p], arr[i]];
            i = p;
        }
        this.extractMin();
    }
}

// Testing the MinBinaryHeap
let h = new MinBinaryHeap();
h.insert(3);
h.insert(2);
h.deleteKey(1);
h.insert(15);
h.insert(5);
h.insert(4);
h.insert(45);

console.log(h.extractMin() + " ");
console.log(h.getMin() + " ");
console.log("Binary Heap: ", h);
