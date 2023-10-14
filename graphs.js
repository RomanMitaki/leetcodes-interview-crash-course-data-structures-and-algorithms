//Number of Provinces

//https://leetcode.com/problems/number-of-provinces/description/

//There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
//A province is a group of directly or indirectly connected cities and no other cities outside of the group.
//You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
//Return the total number of provinces.

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let ans = 0;
    const graph = new Map();
    const n = isConnected.length;
    const seen = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        graph.set(i, [])
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j]) {
                graph.get(i).push(j);
                graph.get(j).push(i);
            }
        }
    }

    const traverseDFS = (node) => {
        for (let neighbor of graph.get(node)) {
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                traverseDFS(neighbor)
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            seen[i] = true;
            ans++;
            traverseDFS(i);
        }
    }

    return ans;
};

//Number of Islands

//https://leetcode.com/problems/number-of-islands/description/

//Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ans = 0;
    const m = grid.length;
    const n = grid[0].length;
    const seen = [];
    for (let i = 0; i < m; i++) {
        seen.push(new Array(n).fill(false))
    } 
    const isValid = (row, col) => {
        return 0 <= row && row < m && 0<= col && col < n && grid[row][col] === '1';
    }
    const directions = [[0, 1],[1, 0],[0, -1],[-1, 0]];
    const dfs = (row, col) => {
        for (let neighbor of directions) {
            let nextRow = neighbor[1] + row;
            let nextCol = neighbor[0]  + col;
            if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true;
                dfs(nextRow, nextCol);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!seen[i][j] && grid[i][j] === '1') {
                seen[i][j] = true;
                ans++;
                dfs(i, j)
            }
        } 
    }

    return ans;
};
