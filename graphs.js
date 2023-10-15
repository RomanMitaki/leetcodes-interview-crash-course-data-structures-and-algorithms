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

//Reorder Routes to Make All Paths Lead to the City Zero

//https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/

//There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
//Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.
//This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
//Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
//It's guaranteed that each city can reach city 0 after reorder.

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const seen = new Array(n).fill(false);
    const graph = new Map();
    const roads = new Set();
    const connectionsToRoads = (a, b) => {
        return a + ',' + b;
    }

    for (let i = 0; i < n; i++) {
       graph.set(i, []);   
    }
    for (let [a, b] of connections) {
        graph.get(a).push(b);
        graph.get(b).push(a);
        roads.add(connectionsToRoads(a, b));
    }

    const dfs = (node) => {
        let ans = 0;
        for (const neighbor of graph.get(node)) {
            if (!seen[neighbor]) {
                if (roads.has(connectionsToRoads(node, neighbor))) {
                    ans++;
                }
                seen[neighbor] = true;
                ans += dfs(neighbor);
            }
        }
        return ans;
    }
    seen[0] = true;
    return dfs(0)
};

//Keys and Rooms

//https://leetcode.com/problems/keys-and-rooms/description/

//There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.
//When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.
//Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const seen = new Array(rooms.length).fill(false);
    const dfs = (node) => {
        for (let neighbor of rooms[node]) {
            if (!seen[neighbor]) {
                seen[neighbor] = true;
                dfs(neighbor)
            }
        }
    }
    seen[0] = true;
    dfs(0);
    return seen.every(Boolean)
};
