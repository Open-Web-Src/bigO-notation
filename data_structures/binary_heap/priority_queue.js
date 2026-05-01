class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push(new Node(value, priority));

    const bubbleUp = () => {
      let idx = this.values.length - 1;

      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);

        if (this.values[parentIdx].priority <= this.values[idx].priority) break;

        [this.values[parentIdx], this.values[idx]] = [
          this.values[idx],
          this.values[parentIdx],
        ];

        idx = parentIdx;
      }
    };

    bubbleUp();
  }

  dequeue() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();

    // Swap the first (min - highest priority) item in the array with the last one and do pop
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    const sinkDown = () => {
      let idx = 0;
      let length = this.values.length;

      while (true) {
        const leftIdx = 2 * idx + 1;
        const rightIdx = 2 * idx + 2;
        let smallestIdx = idx;

        if (
          leftIdx < length &&
          this.values[leftIdx].priority < this.values[smallestIdx].priority
        ) {
          smallestIdx = leftIdx;
        }

        if (
          rightIdx < length &&
          this.values[rightIdx].priority < this.values[smallestIdx].priority
        ) {
          smallestIdx = rightIdx;
        }

        if (smallestIdx === idx) break;

        // Swap
        [this.values[smallestIdx], this.values[idx]] = [
          this.values[idx],
          this.values[smallestIdx],
        ];

        idx = smallestIdx;
      }
    };

    sinkDown();

    return min;
  }

  toString(index = 0, indent = "", isLeft = true) {
    if (index >= this.values.length) return "";

    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    let result = "";

    // Right child (on top)
    result += this.toString(rightIndex, indent + "     ", false);

    // Current node
    result +=
      indent +
      (isLeft ? "└── " : "┌── ") +
      `${this.values[index].value}(${this.values[index].priority})` +
      "\n";

    // Left child
    result += this.toString(leftIndex, indent + "     ", true);

    return result;
  }
}

let heap = new PriorityQueue();

// enqueue
heap.enqueue(100, 0);
heap.enqueue(60, 4);
heap.enqueue(40, 6);
heap.enqueue(70, 3);
heap.enqueue(90, 1);
heap.enqueue(50, 5);
heap.enqueue(80, 2);

// remove the max item
heap.dequeue();
heap.dequeue();

console.log(heap.toString(0));
