import { BinarySearch } from "./algorithms/binarySearch";
import { TreeNode } from "./data-structures/binaryTree";
import { LinkedList, ListNode } from "./data-structures/linkedList"
import { Queue } from "./data-structures/queue";
import { Stack } from "./data-structures/stack";

// let list1 = new LinkedList()

// let stack = new Stack();

// let queue = new Queue;

// let root = new TreeNode(3);
let arr = [1,3,4, 6, 9, 11, 12]
console.log(BinarySearch(arr, 9))
console.log(BinarySearch(arr, 6))
console.log(BinarySearch(arr, 4))
console.log(BinarySearch(arr, 3))
console.log(BinarySearch(arr, 1))

