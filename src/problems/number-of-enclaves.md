---
id: "number-of-enclaves"
title: "Number of Enclaves"
lang: "javascript"
---

# Number of Enclaves

<h2 id="problem-description">Problem Description</h2>

<p>You are given an <code>m x n</code> binary matrix <code>grid</code>, where <code>0</code> represents a sea cell and <code>1</code> represents a land cell.</p>

<p>A <strong>move</strong> consists of walking from one land cell to another adjacent (<strong>4-directionally</strong>) land cell or walking off the boundary of the <code>grid</code>.</p>

<p>Return <em>the number of land cells in</em> <code>grid</code> <em>for which we cannot walk off the boundary of the grid in any number of <strong>moves</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/enclaves1.jpg" style="width: 333px; height: 333px;" />
<pre>
<strong>Input:</strong> grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/enclaves2.jpg" style="width: 333px; height: 333px;" />
<pre>
<strong>Input:</strong> grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> All 1s are either on the boundary or can reach the boundary.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 500</code></li>
	<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const total = grid.map(ar => ar.reduce((sum, cur) => sum + cur, 0)).reduce((sum, cur) => sum + cur, 0);
    const s = new Set();

    const walk = (x, y) => {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || !grid[x][y]) return;
        const xy = `${x},${y}`;
        if (s.has(xy)) return;
        
        s.add(xy);
        walk(x-1, y);
        walk(x+1, y);
        walk(x, y-1);
        walk(x, y+1);
    }
    for(let i = 0; i < grid.length; i++) {
        walk(i, 0);
        walk(i, grid[0].length-1);
    }
    for(let j = 1; j < grid[0].length - 1; j++) {
        walk(0, j);
        walk(grid.length-1, j);
    }
    
    return total - s.size;
};
```
