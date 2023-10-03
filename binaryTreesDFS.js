//Maximum Depth of Binary Tree

//Given the root of a binary tree, return its maximum depth.
//A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

//https://leetcode.com/problems/maximum-depth-of-binary-tree/description/


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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let right = maxDepth(root.right) + 1;
    let left = maxDepth(root.left) + 1;
    return Math.max(right, left);
};

//Count Good Nodes in Binary Tree

//Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
//Return the number of good nodes in the binary tree.

//https://leetcode.com/problems/count-good-nodes-in-binary-tree/

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
 * @return {number}
 */
var goodNodes = function(root) {
    const countGood = (root, currMax) => {
        if (!root) return 0;
        let left = countGood(root.left, Math.max(currMax, root.val));
        let right = countGood(root.right, Math.max(currMax, root.val));
        let ans = left + right;
        if (root.val >= currMax) ans++;
        return ans; 
    }
    
    return countGood(root, -Infinity);
};

//Path Sum

//Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
//A leaf is a node with no children.

//https://leetcode.com/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let curr = targetSum - root.val;
    if (!root.left && !root.right) {
        return curr === 0;
    }
    return hasPathSum(root.left, curr) || hasPathSum(root.right, curr)
};
