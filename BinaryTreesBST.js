//Insert into a Binary Search Tree

//You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
//Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

//https://leetcode.com/problems/insert-into-a-binary-search-tree/description/

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val);
    if (!root) return newNode;
    const helper = (node, val) => {
        if (val < node.val && !node.left) {
            node.left = newNode;
            return
        } 
        if (val < node.val && node.left) {
            return helper(node.left, val)
        } 
        if (val > node.val && !node.right) {
            node.right = newNode;
            return
        }
        if (val > node.val && node.right) {
            return helper(node.right, val)
        } 
    }
    helper(root, val);
    return root
};

//Range Sum of BST

//Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

//https://leetcode.com/problems/range-sum-of-bst/description/

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (!root) return null;
    let ans = 0;
    if (root.val >= low && root.val <= high) {
        ans += root.val
    }
    if (root.val > low) {
        ans += rangeSumBST(root.left, low, high)
    }   
    if (root.val < high) {
        ans += rangeSumBST(root.right, low, high)
    }
    return ans;
};

//Minimum Absolute Difference in BST

//Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

//https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/

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
var getMinimumDifference = function(root) {
    const values = [];
    const getValues = (node) => {
        if (!node) return;
        getValues(node.left);
        values.push(node.val);
        getValues(node.right);
    }
    getValues(root);
    let ans = Infinity;
    for (let i = 1; i < values.length; i++) {
        ans = Math.min(ans, values[i] - values[i-1])
    }
    return ans;

};

//Validate Binary Search Tree

//Given the root of a binary tree, determine if it is a valid binary search tree (BST).

//A valid BST is defined as follows:
    //The left
    //subtree
    //of a node contains only nodes with keys less than the node's key.
    //The right subtree of a node contains only nodes with keys greater than the node's key.
    //Both the left and right subtrees must also be binary search trees.

//https://leetcode.com/problems/validate-binary-search-tree/description/

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const helper = (node, min, max) => {
        if (!node) return true;
        if (node.val <= min || node.val >= max) {
            return false;
        }
        let left = helper(node.left, min, node.val);
        let right = helper(node.right, node.val, max);
        return left && right;
    }
    return helper(root, -Infinity, Infinity)
};

//Closest Binary Search Tree Value

//Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. If there are multiple answers, print the smallest.

//https://leetcode.com/problems/closest-binary-search-tree-value/description/

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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    target = Number.isInteger(target + 0.5) ? Math.floor(target) : Math.round(target);
    let diff = [Infinity, null];
    let [minDiff, val] = diff;
    const helper = (node, diff) => {
        if (!node) return;
        let currMin = Math.abs(node.val - target);
        if (minDiff > currMin) {
            minDiff = currMin;
            val = node.val;
        }
        if (minDiff === 0) return;
        helper(node.left, currMin)
        helper(node.right, currMin)
        return
    }
    helper(root, Infinity);
    return val;
};
