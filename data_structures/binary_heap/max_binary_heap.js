class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    const bubbleUp = () => {
      let idx = this.values.length - 1;

      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);

        // Change the condition below to 'this.values[parentIdx] <= this.values[idx]'
        // would result in Min Binary Heap
        if (this.values[parentIdx] >= this.values[idx]) break;

        [this.values[parentIdx], this.values[idx]] = [
          this.values[idx],
          this.values[parentIdx],
        ];

        idx = parentIdx;
      }
    };

    bubbleUp();
  }

  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();

    // Swap the first (max) item in the array with the last one and do pop
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    const sinkDown = () => {
      let idx = 0;
      let length = this.values.length;

      while (true) {
        const leftIdx = 2 * idx + 1;
        const rightIdx = 2 * idx + 2;
        let largestIdx = idx;

        if (
          leftIdx < length &&
          this.values[leftIdx] > this.values[largestIdx]
        ) {
          largestIdx = leftIdx;
        }

        if (
          rightIdx < length &&
          this.values[rightIdx] > this.values[largestIdx]
        ) {
          largestIdx = rightIdx;
        }

        if (largestIdx === idx) break;

        // Swap
        [this.values[largestIdx], this.values[idx]] = [
          this.values[idx],
          this.values[largestIdx],
        ];

        idx = largestIdx;
      }
    };

    sinkDown();

    return max;
  }

  toString(index = 0, indent = "", isLeft = true) {
    if (index >= this.values.length) return "";

    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    let result = "";

    // Right child (on top)
    result += this.toString(rightIndex, indent + "     ", false);

    // Current node
    result += indent + (isLeft ? "└── " : "┌── ") + this.values[index] + "\n";

    // Left child
    result += this.toString(leftIndex, indent + "     ", true);

    return result;
  }
}

let heap = new MaxBinaryHeap();

// insert
heap.insert(100);
heap.insert(60);
heap.insert(40);
heap.insert(70);
heap.insert(90);
heap.insert(50);
heap.insert(80);

// remove the max item
heap.extractMax();
heap.extractMax();

console.log(heap.toString(0));
