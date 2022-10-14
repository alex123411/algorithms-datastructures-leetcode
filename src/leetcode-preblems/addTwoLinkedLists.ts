import { ListNode } from "../data-structures/linkedList";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let list = new ListNode()
    let nextVal = 0;
    let arr: number[] = [];
    if (l1 !== null && l2 !== null) {
        while (1) {
            let currentVal = l1.val + l2.val + nextVal;
            nextVal = 0;
            if (currentVal > 9) {
                currentVal -= 10;
                nextVal++;
            }
            arr.push(currentVal);
            if (l1?.next && l2?.next) {
                l1 = l1.next;
                l2 = l2.next;
            } else {
                if (nextVal === 0) {
                    break;
                }
                else {
                    arr.push(nextVal)
                    break;
                }
            }

        }

    }
    for (let i = 0; i < arr.length; i++) {
        let cur = list;
        if (cur !== null) {
            while (cur.next) {
                cur = cur.next
            }
            cur.next = new ListNode(arr[i]);
        } else {
            cur = new ListNode(arr[i]);
        }
    }
    return list
};


