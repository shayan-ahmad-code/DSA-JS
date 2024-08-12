class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let node = new Node(data);

        if (this.root === null) {
            this.root = node;
            return;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.data < root.data) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null) return null;

        if (key < node.data) {
            node.left = this.removeNode(node.left, key);
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }

            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            let aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
        }
        return node;
    }

    findMinNode(node) {
        if (node.left === null) return node;
        return this.findMinNode(node.left);
    }

    // Return the root node
    getRootNode() {
        return this.root;
    }

    search(node, data) {
        if (node === null) return null;
        else if (data < node.data)
            return this.search(node.left, data);
        else if (data > node.data)
            return this.search(node.right, data);
        else
            return node;
    }

    inOrderTraversal(root) {
        if (root !== null) {
            this.inOrderTraversal(root.left);
            console.log(root.data);
            this.inOrderTraversal(root.right);
        }
    }

    preOrderTraversal(root) {
        if (root !== null) {
            console.log(root.data);
            this.preOrderTraversal(root.left);
            this.preOrderTraversal(root.right);
        }
    }

    postOrderTraversal(root) {
        if (root !== null) {
            this.postOrderTraversal(root.left);
            this.postOrderTraversal(root.right);
            console.log(root.data);
        }
    }
}

// Testing the Binary Search Tree

let BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

// Print the entire tree in order
console.log("In-order Traversal of Binary Tree:");
BST.inOrderTraversal(BST.getRootNode());

// Print the entire tree in pre-order
console.log("Pre-order Traversal of Binary Tree:");
BST.preOrderTraversal(BST.getRootNode());

// Print the entire tree in post-order
console.log("Post-order Traversal of Binary Tree:");
BST.postOrderTraversal(BST.getRootNode());

// Search for a node
let foundNode = BST.search(BST.getRootNode(), 27);
if (foundNode) {
    console.log("Node found:", foundNode.data);
} else {
    console.log("Node not found.");
}

// Remove a node
console.log("Removing node with value 17...");
BST.remove(17);

// Print the entire tree in order after removal
console.log("In-order Traversal of Binary Tree after removal:");
BST.inOrderTraversal(BST.getRootNode());

// Search for a removed node
foundNode = BST.search(BST.getRootNode(), 17);
if (foundNode) {
    console.log("Node found:", foundNode.data);
} else {
    console.log("Node not found.");
}

// Get and print the root node
console.log("Root Node:");
console.log(BST.getRootNode());
