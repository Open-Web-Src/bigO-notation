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

    // Could use either preOrderDfs | postOrderDfs | inOrderDfs
    const parentNode = this.inOrderDfs(this.root, parentValue);
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

  // Depth First Search - PreOrder
  preOrderDfs(currentNode, valueToFind) {
    if (currentNode.value === valueToFind) return currentNode;

    for (const child of currentNode.childrens) {
      const result = this.preOrderDfs(child, valueToFind);
      if (result) return result;
    }

    return null;
  }

  // Depth First Search - PostOrder
  postOrderDfs(currentNode, valueToFind) {
    for (const child of currentNode.childrens) {
      const result = this.postOrderDfs(child, valueToFind);
      if (result) return result;
    }

    if (currentNode.value === valueToFind) return currentNode;

    return null;
  }

  // Depth First Search - InOrder
  /**
   * Notes: The concept of in-order DFS is well-defined only for binary trees,
   * where each node has at most two children (left and right).
   * In an arbitrary tree with multiple children (not ordered left/right),
   * there's no canonical "in-order" traversal
   *
   * Custom In-Order Rule for Arbitrary Trees: Visit the first n/2 children (left half), then the node itself,
   * then the remaining n/2 children (right half).
   */
  inOrderDfs(currentNode, valueToFind) {
    const n = currentNode.childrens.length;
    const half = Math.floor(n / 2);

    // Visit left half
    for (let i = 0; i < half; i++) {
      const result = this.inOrderDfs(currentNode.childrens[i], valueToFind);
      if (result) return result;
    }

    // Visit current node
    if (currentNode.value === valueToFind) return currentNode;

    // Visit right half
    for (let i = half; i < n; i++) {
      const result = this.inOrderDfs(currentNode.childrens[i], valueToFind);
      if (result) return result;
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
