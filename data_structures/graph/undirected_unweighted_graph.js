class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(firstVertex, secondVertext) {
    // Exception: Same vertex
    if (firstVertex === secondVertext) return;

    // Exception: Vertexes aren't exist
    if (!this.adjacencyList[firstVertex] || !this.adjacencyList[secondVertext])
      return;

    // Add Edge between 2 vertexes
    this.adjacencyList[firstVertex].push(secondVertext);
    this.adjacencyList[secondVertext].push(firstVertex);
  }

  removeEdge(firstVertex, secondVertext) {
    // Exception: Same vertex
    if (firstVertex === secondVertext) return;

    // Exception: Vertexes aren't exist
    if (!this.adjacencyList[firstVertex] || !this.adjacencyList[secondVertext])
      return;

    this.adjacencyList[firstVertex] = this.adjacencyList[firstVertex].filter(
      (item) => item !== secondVertext
    );
    this.adjacencyList[secondVertext] = this.adjacencyList[
      secondVertext
    ].filter((item) => item !== firstVertex);
  }

  removeVertex(vertex) {
    let adjacentVertex;

    while ((adjacentVertex = this.adjacencyList[vertex].pop())) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstSearch(vertex) {
    let result = [];
    let visited = {};

    const dfs = (vertex) => {
      if (!this.adjacencyList[vertex]) return null;

      result.push(vertex);
      visited[vertex] = true;

      this.adjacencyList[vertex].forEach((element) => {
        if (!visited[element]) dfs(element);
      });
    };
    dfs(vertex);

    return result;
  }

  depthFirstIterative(vertex) {
    let stack = [vertex];
    let result = [];
    let visited = { [vertex]: true };

    while (stack.length) {
      let curVertex = stack.pop();
      result.push(curVertex);

      this.adjacencyList[curVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          stack.push(element);
        }
      });
    }

    return result;
  }

  breadthFirstSearch(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = { [vertex]: true };

    while (queue.length) {
      let curVertex = queue.shift();
      result.push(curVertex);

      this.adjacencyList[curVertex].forEach((el) => {
        if (!visited[el]) {
          visited[el] = true;
          queue.push(el);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

// Add vertexes
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

// Add edges
g.addEdge("A", "B");
g.addEdge("B", "D");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "C");
g.addEdge("F", "E");
g.addEdge("C", "A");

// Remove edges
// g.removeEdge("Halo", "Mario");
// g.removeEdge("Halo", "Call of Duty");

// Remove vertex
// g.removeVertex("Halo");

// console.log(g.depthFirstSearch("E"));

// console.log(g.depthFirstIterative("A"));

console.log(g.breadthFirstSearch("A"));

// console.log(JSON.stringify(g, "", 2));
