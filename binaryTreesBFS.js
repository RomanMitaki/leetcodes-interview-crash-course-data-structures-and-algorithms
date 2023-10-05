//Binary Tree Right Side View

//Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

//https://leetcode.com/problems/binary-tree-right-side-view/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const ans = [];
    let queue = [root];
    while (queue.length) {
        ans.push(queue[queue.length-1].val);
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            let currNode = queue[i];
            if (currNode.left) newQueue.push(currNode.left);
            if (currNode.right) newQueue.push(currNode.right);
        }
        queue = newQueue;
    }

    return ans;
};

//Find Largest Value in Each Tree Row

//Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

//https://leetcode.com/problems/find-largest-value-in-each-tree-row/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    const ans = [];
    let queue = [root];
    while (queue.length) {
        let max = -Infinity;
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            let currNode = queue[i];
            max = Math.max(max, currNode.val);
            if (currNode.left) newQueue.push(currNode.left);
            if (currNode.right) newQueue.push(currNode.right);
        }
        ans.push(max);
        queue = newQueue;
    }

    return ans;
};
