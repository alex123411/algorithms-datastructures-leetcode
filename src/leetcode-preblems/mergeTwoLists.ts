import { ListNode } from "../data-structures/linkedList";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let mergedList: ListNode = new ListNode();
    let head = mergedList;

    while (list1 !== null && list2 !== null) {

        if (list1.val <= list2!.val) {
            mergedList.next = new ListNode(list1!.val);
            list1 = list1!.next;
        }
        else {
            mergedList.next = new ListNode(list2!.val);
            list2 = list2!.next;
        }

        mergedList = mergedList.next
    }

    if (list1) {
        mergedList.next = list1;
    }

    if (list2) {
        mergedList.next = list2;
    }

    return head.next
};
