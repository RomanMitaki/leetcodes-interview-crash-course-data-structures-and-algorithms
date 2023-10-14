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
