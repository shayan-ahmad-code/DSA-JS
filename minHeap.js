class MinHeap {
    constructor(maxSize) {
        this.arr = new Array(maxSize).fill(null);
        this.maxSize = maxSize;
        this.heapSize = 0;
    }

    minHeapify(i) {
        const left = this.leftChild(i);
        const right = this.rightChild(i);

        let smallest = i;
        if (left < this.heapSize && this.arr[left] < this.arr[i]) {
            smallest = left;
        }
        if (right < this.heapSize && this.arr[right] < this.arr[smallest]) {
            smallest = right;
        }
        if (smallest !== i) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[smallest];
            this.arr[smallest] = temp;
            this.minHeapify(smallest);
        }
    }

    insert(x) {
        if (this.heapSize === this.maxSize) {
            console.log("\nOverflow: Could not insert\n");
            return;
        }

        let i = this.heapSize;
        this.arr[i] = x;

        this.heapSize += 1;

        while (i !== 0 && this.arr[this.parent(i)] > this.arr[i]) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)];
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    removeMin() {
        if (this.heapSize <= 0) {
            return null;
        }
        if (this.heapSize === 1) {
            this.heapSize -= 1;
            return this.arr[0];
        }

        const root = this.arr[0];
        this.arr[0] = this.arr[this.heapSize - 1];
        this.heapSize -= 1;

        this.minHeapify(0);
        return root;
    }

    parent(i) { return Math.floor((i - 1) / 2); }

    getMin() { return this.arr[0]; }

    currSize() { return this.heapSize; }

    leftChild(i) { return 2 * i + 1; }

    rightChild(i) { return 2 * i + 2; }
}

const h = new MinHeap(15);

h.insert(3);
h.insert(10);
h.insert(12);
h.insert(8);
h.insert(2);
h.insert(14);

console.log("Min Heap: ", h);
