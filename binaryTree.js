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

    findMinNode(node) {
        if (node.left === null) return node;
        else
            return this.findMinNode(node.left);
    }

    get RootNode() { return console.log("Root Node -> ", this.root) };

    search(node, data) {
        if (node === null) return null;
        else if (data < node.data)
            return this.search(node.left, data);
        else if (data > node.data)
            return this.search(node.right, data);
        else
            return node;
    }

    // In-order traversal to print the tree structure
    inOrderTraversal(root) {
        if (root !== null) {
            this.inOrderTraversal(root.left);
            console.log(root.data);
            this.inOrderTraversal(root.right);
        }
    }

    // Pre-order traversal to print the tree structure
    preOrderTraversal(root) {
        if (root !== null) {
            console.log(root.data);
            this.preOrderTraversal(root.left);
            this.preOrderTraversal(root.right);
        }
    }

    // Post-order traversal to print the tree structure
    postOrderTraversal(root) {
        if (root !== null) {
            this.postOrderTraversal(root.left);
            this.postOrderTraversal(root.right);
            console.log(root.data);
        }
    }
}

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
BST.inOrderTraversal(BST.root);

foundNode = BST.search(BST.root, 27);
if (foundNode) {
    console.log("Node found:", foundNode.data);
} else {
    console.log("Node not found.");
}
