class TreeNode {
  constructor(value) {
    this.value = value;
    this.childrens = [];
  }

  addChild(childNode) {
    this.childrens.push(childNode);
  }

  toString(indent = 0) {
    let result = "  ".repeat(indent) + this.value + "\n";

    for (const child of this.childrens) {
      result += child.toString(indent + 1);
    }

    return result;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(parentValue, newValue) {
    // Tree is empty
    if (!this.root) {
      if (parentValue !== null) {
        console.log(
          "Cannot insert: tree is empty. First insert must have parentValue = null."
        );
        return;
      }
      this.root = new TreeNode(newValue);
      return;
    }

    const parentNode = this.bfs(parentValue);
    if (parentNode) {
      parentNode.addChild(new TreeNode(newValue));
    } else {
      console.log(`Parent value ${parentValue} not found.`);
    }
  }

  print() {
    if (!this.root) {
      console.log("Tree is empty.");
    } else {
      console.log(this.root.toString());
    }
  }

  // Breadth First Search
  bfs(valueToFind) {
    let node = this.root,
      queue = [];

    if (node) queue.push(node);

    while (queue.length) {
      node = queue.shift();

      if (node.value === valueToFind) return node;

      for (const child of node.childrens) {
        queue.push(child);
      }
    }

    return null;
  }
}

const tree = new Tree();

tree.insert(null, 1);

tree.insert(1, 5);
tree.insert(1, 10);
tree.insert(1, 7);

tree.insert(5, 8);
tree.insert(5, 33);

tree.insert(10, 3);
tree.insert(10, 55);
tree.insert(10, 78);
tree.insert(10, 101);

tree.print();
