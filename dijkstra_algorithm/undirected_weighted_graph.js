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
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  findShortestPath(src, dest) {
    const nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let visited = {};
    let path = [];
    let smallest;

    // initilize state
    for (let vertex in this.adjacencyList) {
      if (vertex === src) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === dest) {
        // Build full path from src and return
        while (smallest) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let nextNode of this.adjacencyList[smallest]) {
          if (!visited[nextNode]) {
            // calculate  the distance to the nextNode
            let disToNext = nextNode.weight + distances[smallest];
            // update the path when new distance is less than the current one
            if (disToNext < distances[nextNode.node]) {
              distances[nextNode.node] = disToNext;
              previous[nextNode.node] = smallest;

              // enqueue with new priority
              nodes.enqueue(nextNode.node, disToNext);
            }
          }
        }
      }
      visited[smallest] = true;
    }

    return path.reverse();
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.findShortestPath("A", "E"));
