import { LinkedList, ListNode } from "./linkedList";

export class Stack {
    values: LinkedList;
    length: number;

    constructor() {
        this.values = new LinkedList();
        this.length = 0;
    }

    push(value: number): void {
        this.length++;
        let newHead = new ListNode(value, this.values.head);
        this.values.head = newHead;
    }

    pop(): void {
        if (this.length !== 0)this.length--;
        if (this.values.head?.next) this.values.head = this.values.head?.next;
        else this.values.head = null;
    }

    show(): void {
        console.log(`length: ${this.length}` + '\nvalues: ' + this.values.show());
    }

}