import { LinkedList, ListNode } from "./linkedList";

export class Queue {
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
        if (this.length === 0) this.values.head = null;
        else {
            let cur = this.values.head;
            if (cur !== null) {
                while (cur.next?.next) {
                    cur = cur.next
                }
                cur.next = null;
            }
        }
    }

    show(): void {
        console.log(`length: ${this.length}` + '\nvalues: ' + this.values.show());
    }

}