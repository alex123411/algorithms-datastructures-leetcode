export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    push(value: number){
        let cur = this.next;
        if (cur !== null) {
            while (cur.next) {
                cur = cur.next
            }
            cur.next = new ListNode(value);
        } else {
            this.next = new ListNode(value);
        }
    }

    show() {
        let temp = this.next
        let output = `${this.val}`;
        while (1) {
            output += ` -> ${temp?.val}`
            if (temp?.next === null) {
                break
            } else {
                temp = temp!.next;
            }
        }
        console.log(output)
    }
}

export class LinkedList {
    head: ListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value: number): void {
        let cur = this.head;
        if (cur !== null) {
            while (cur.next) {
                cur = cur.next
            }
            cur.next = new ListNode(value);
        } else {
            this.head = new ListNode(value);
        }

    }

    show(): string {
        if(this.head === null) return "List is blank";
        let temp = this.head
        let output = "";
        while (1) {
            output += ` -> ${temp?.val}`
            if (temp?.next === null) {
                break
            } else {
                temp = temp!.next;
            }
        }
        return output;
    }
}