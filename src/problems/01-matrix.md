---
id: "01-matrix"
title: "01 Matrix"
lang: "javascript"
---

# 01 Matrix

<h2 id="problem-description">Problem Description</h2>

<p>Given an <code>m x n</code> binary matrix <code>mat</code>, return <em>the distance of the nearest </em><code>0</code><em> for each cell</em>.</p>

<p>The distance between two cells sharing a common edge is <code>1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg" style="width: 253px; height: 253px;" />
<pre>
<strong>Input:</strong> mat = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[0,0,0]]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg" style="width: 253px; height: 253px;" />
<pre>
<strong>Input:</strong> mat = [[0,0,0],[0,1,0],[1,1,1]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[1,2,1]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == mat.length</code></li>
	<li><code>n == mat[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= m * n &lt;= 10<sup>4</sup></code></li>
	<li><code>mat[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
	<li>There is at least one <code>0</code> in <code>mat</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Note:</strong> This question is the same as 1765: <a href="https://leetcode.com/problems/map-of-highest-peak/description/" target="_blank">https://leetcode.com/problems/map-of-highest-peak/</a></p>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length, n = mat[0].length;
    let cells = [];
    for(let i = 0; i<m; i++) {
        for(let j = 0; j<n; j++) {
            if(mat[i][j] === 0) {
                cells.push([i,j]);
            } else {
                mat[i][j] = null;
            }
        }
    }

    const DIR = [0, 1, 0, -1, 0];
    while(cells.length) {
        let newCells = [];
        for(const cell of cells) {
            const distance = mat[cell[0]][cell[1]] + 1;
            for(let i = 0; i<4; i++) {
                const nr = cell[0] + DIR[i], nc = cell[1] + DIR[i+1];
                if (nr < 0 || nr == m || nc < 0 || nc == n || mat[nr][nc] != null) {
                    continue
                }
                mat[nr][nc] = distance;
                newCells.push([nr, nc]);
            }
        }
        cells = newCells;
    }

    return mat;
};
```
