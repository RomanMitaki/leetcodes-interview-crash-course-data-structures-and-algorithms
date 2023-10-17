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
