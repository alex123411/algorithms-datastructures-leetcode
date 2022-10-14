import { TreeNode } from "../data-structures/binaryTree";

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    let leftdepth = 1;
    let rightDepth = 1;

    if (root?.left) {
        leftdepth += maxDepth(root?.left)
    }
    if (root?.right) {
        rightDepth += maxDepth(root?.right)
    }
    if (leftdepth >= rightDepth) { 
        return leftdepth 
    } else { 
        return rightDepth 
    };

};