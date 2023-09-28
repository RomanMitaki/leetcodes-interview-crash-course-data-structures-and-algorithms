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

//Maximum Twin Sum of a Linked List

//In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
//For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
//The twin sum is defined as the sum of a node and its twin.
//Given the head of a linked list with even length, return the maximum twin sum of the linked list.

/*
Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;
    let dummy = head;
    let n = 1;
    while (fast) {
      n += fast.next.next ? 2 : 1;
      fast = fast.next.next;
      slow = slow.next;
    }
    
    let curr = slow;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    
    let ans = 0;
    while(prev) {
      let sum = dummy.val + prev.val;
      ans = Math.max(ans, sum);
      prev = prev.next;
      dummy = dummy.next;
    }
    return ans
};

//Reverse Linked List II

//Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

//Input: head = [1,2,3,4,5], left = 2, right = 4
//Output: [1,4,3,2,5]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let ans = head;
    let leftNode = head;
    let prevLeft = null;
    let nextRight = null;
    let count = 1;
    if (!head.next) return head;
    //get initialState
    while(head && count <= right + 1) {
        if (count + 1 === left) {
            prevLeft = head;
        }
        if (count === left) {
            leftNode = head;
        }
        if (count - 1 === right) {
            nextRight = head;
        }
        head = head.next;
        count++;
    }
    
    let count2 = right - left;
    let prev = nextRight;
    let curr = leftNode;
    while (count2 >= 0) {
        count2--;
        let next = curr.next;
        curr.next = prev;         
        prev = curr;             
        curr = next;
    
    }
    if (prevLeft) prevLeft.next = prev;
    return prevLeft ? ans : prev;
};

//Delete the Middle Node of a Linked List

//You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
//The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
//For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

/*
Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 
*/

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
var deleteMiddle = function(head) {
    let dummy = head;
    let fast = head;
    let slow = head;
    let prev = null;
    if (!head.next) return null;
    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    if (!slow.next) {
        prev.next = null;
    } else {
        prev.next = slow.next
    }
    return dummy
};
