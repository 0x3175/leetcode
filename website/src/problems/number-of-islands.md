---
layout: "layout.njk"
title: "Number of Islands"
difficulty: ""
tags: 
  - problems
---

# Number of Islands

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a 2d grid map of <code>&#39;1&#39;</code>s (land) and <code>&#39;0&#39;</code>s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>

<p><b>Example 1:</b></p>

<pre>
<strong>Input:</strong>
11110
11010
11000
00000

<strong>Output:</strong>&nbsp;1
</pre>

<p><b>Example 2:</b></p>

<pre>
<strong>Input:</strong>
11000
11000
00100
00011

<strong>Output: </strong>3
</pre>
</div>

<h2 id="solution">Solution (javascript)</h2>

```js
function DFSMarking(grid, i, j, m, n) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') return;
    
    grid[i][j] = '0';
    DFSMarking(grid, i + 1, j, m, n);
    DFSMarking(grid, i - 1, j, m, n);
    DFSMarking(grid, i, j + 1, m, n);
    DFSMarking(grid, i, j - 1, m, n);    
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const n = grid.length;
    if (n === 0) return 0;
    const m = grid[0].length;
    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++)
            if (grid[i][j] === '1') {
                DFSMarking(grid, i, j, m, n);
                ++count;
            }
    }    
    
    return count;
};

```
