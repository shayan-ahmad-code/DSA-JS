
class MaxHeap {
    constructor(maxSize) {

        this.arr = new Array(maxSize).fill(null);
        this.maxSize = maxSize;
        this.heapSize = 0;

    }

    maxHeapify(i) {
        const left = this.leftChild(i);
        const right = this.rightChild(i);

        let largest = i;
        if (left < this.heapSize && this.arr[left] > this.arr[i]) {
            largest = left;
        }
        if (right < this.heapSize && this.arr[right] > this.arr[i]) {
            largest = right;
        }
        if (largest !== i) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[largest]
            this.arr[largest] = temp;
            this.maxHeapify(largest);
        }
    }

    insert(x) {
        if (this.heapSize === this.maxSize) {
            console.log("\nOverflow: Could not insert\n")
            return;
        }

        let i = this.heapSize
        this.arr[i] = x;

        this.heapSize += 1;


        while (i !== 0 && this.arr[this.parent(i)] < this.arr[i]) {
            const temp = this.arr[i]
            this.arr[i] = this.arr[this.parent(i)]
            this.arr[this.parent(i)] = temp;
            i = this.parent(i)
        }

    }

    parent(i) { return Math.floor((i - 1) / 2) }

    leftChild(i) { return 2 * i + 1 };
    rightChild(i) { return 2 * i + 2 };

}

const h = new MaxHeap(15);

h.insert(3);
h.insert(10);
h.insert(12);
h.insert(8);
h.insert(2);
h.insert(14);

console.log("Max Heap: ", h);