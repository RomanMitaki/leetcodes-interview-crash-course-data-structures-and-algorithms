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

//Minimum Depth of Binary Tree

//Given a binary tree, find its minimum depth.

//The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//Note: A leaf is a node with no children.

//https://leetcode.com/problems/minimum-depth-of-binary-tree/description/    

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
var minDepth = function(root) {
    if (!root) {
      return null;
    }
    
    let left = minDepth(root.left) + 1;
    let right = minDepth(root.right) + 1;
    return right === 1 ? left : left === 1 ? right : Math.min(right, left);
    
};

//Maximum Difference Between Node and Ancestor

//Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.
//A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

//https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/

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
var maxAncestorDiff = function(root) {
    const helper = (node, maxVal, minVal) => {
        if (!node) return null;
        maxVal = Math.max(maxVal, node.val);
        minVal = Math.min(minVal, node.val);
        let ans = Math.abs(maxVal - minVal);
        let left = helper(node.left, maxVal, minVal);
        let right = helper(node.right, maxVal, minVal);
        return Math.max(left, right, ans);
    }
    
    return helper(root, root.val, root.val)
};
