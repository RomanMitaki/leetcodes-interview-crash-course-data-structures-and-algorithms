//Shortest Path in Binary Matrix

//https://leetcode.com/problems/shortest-path-in-binary-matrix/description/

//Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
//A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
//All the visited cells of the path are 0.
//All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
//The length of a clear path is the number of visited cells of this path.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] === 1) {
        return -1;
    }
    
    let depth = 0;
    const directions = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
    const isValid = (row, col) => {
        return 0 <= row && row < n && 0 <= col && col < n && grid[row][col] === 0;
    }
    let n = grid.length;
    const seen = [];
    for (let i = 0; i < n; i++) {
        seen.push(new Array(n).fill(false))
    }
    seen[0][0] = true;
    let queue = [[0, 0]]
    while (queue.length) {
        depth++;
        let currLen = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currLen; i++) {
            let [row, col] = queue[i];
            if (row === n - 1 && col === n - 1) {
                return depth;
            }

            for (let neighbor of directions) {
                let nextRow = neighbor[0] + row;
                let nextCol = neighbor[1] + col;
                if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                   seen[nextRow][nextCol] = true;
                   nextQueue.push([nextRow, nextCol]);
                }
            }
        }
        queue = nextQueue;
    }
    return -1;
};

//All Nodes Distance K in Binary Tree

//https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/

//Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.
//You can return the answer in any order.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const dfs = (node, parent) => {
        if (!node) {
            return
        }
        
        node.parent = parent;
        dfs(node.left, node);
        dfs(node.right, node);
    }

    dfs(root, null);

    let queue = [target];
    const seen = new Set();
    seen.add(target)
    let depth = 0;

    while (queue.length && depth < k) {
        depth++;
        let currLen = queue.length;
        let newQueue = [];

        for (let i = 0; i < currLen; i++) {
            let node = queue[i];
            for(const neighbor of [node.left, node.right, node.parent]) {
                if (neighbor && !seen.has(neighbor)) {
                    seen.add(neighbor);
                    newQueue.push(neighbor);
                }
            }
        }
        queue = newQueue;
    }
    
    return queue.map(node => node.val);
};

//01 Matrix

//https://leetcode.com/problems/01-matrix/description/

//Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
//The distance between two adjacent cells is 1.

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const isValid = (row, col) => {
        return 0 <= row && row < m && 0 <= col && col < n && mat[row][col] === 1;
    }
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let depth = 0;
    const seen = [];
    for (let row = 0; row < m; row++) {
        seen.push(new Array(n).fill(false))
    }
    let queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                seen[i][j] = true;
            }
        }
    }

    while (queue.length) {
        let len = queue.length;
        let nextQueue = [];
        depth++;
        for (let i = 0; i < len; i++) {
            let [row, col] = queue[i];
            for (let neighbor of directions) {
                let nextRow = row + neighbor[0], nextCol = col + neighbor[1];
                if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    nextQueue.push([nextRow, nextCol]);
                    mat[nextRow][nextCol] = depth;
                }
            }
        }
        queue = nextQueue;
    }

    return mat;
};

//1926. Nearest Exit from Entrance in Maze
//https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;
    const [ir, ic] = entrance;
    let ans = 0;

    const isValid = (row, col) => {
        return row >= 0 && row < m && col >= 0 && col < n;
    }

    const isEntrance = (row, col) => {
        return row === ir && col === ic;
    }

    const destinations = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    const seen = [];
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false))
    }
    seen[ir][ic] = true;

    let queue = [entrance];

    while (queue.length) {
        let nextQueue = [];

        for (let i = 0; i < queue.length; i++) {
            let [row, col] = queue[i];

            for (let nei of destinations) {
                let nextRow = row + nei[0];
                let nextCol = col + nei[1];

                if (!isValid(nextRow, nextCol) && !isEntrance(row, col)) {
                    return ans;
                }
                if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol] && maze[nextRow][nextCol] !== '+') {
                    seen[nextRow][nextCol] = true;
                    nextQueue.push([nextRow, nextCol]);
                }
            }
        }
        ans++;
        queue = nextQueue;
    }
    return -1;
};
