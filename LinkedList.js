//Middle of the Linked List

//Given the head of a singly linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
   
    return slow;
};

//Remove Duplicates from Sorted List

//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

//Input: head = [1,1,2,3,3]
//Output: [1,2,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head;
    let start = head.next;
    let end = head;
    
    while (start) {
       if (start.val === end.val) {
           start = start.next;
           end.next = start;
           
       } else {
           end = end.next;
           start = start.next;
       }
      
     
    }
    return head;
};
