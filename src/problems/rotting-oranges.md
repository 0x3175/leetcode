---
id: "rotting-oranges"
title: "Rotting Oranges"
lang: "javascript"
---

# Rotting Oranges

<h2 id="problem-description">Problem Description</h2>

<p>You are given an <code>m x n</code> <code>grid</code> where each cell can have one of three values:</p>

<ul>
	<li><code>0</code> representing an empty cell,</li>
	<li><code>1</code> representing a fresh orange, or</li>
	<li><code>2</code> representing a rotten orange.</li>
</ul>

<p>Every minute, any fresh orange that is <strong>4-directionally adjacent</strong> to a rotten orange becomes rotten.</p>

<p>Return <em>the minimum number of minutes that must elapse until no cell has a fresh orange</em>. If <em>this is impossible, return</em> <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/16/oranges.png" style="width: 650px; height: 137px;" />
<pre>
<strong>Input:</strong> grid = [[2,1,1],[1,1,0],[0,1,1]]
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[2,1,1],[0,1,1],[1,0,1]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> grid = [[0,2]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Since there are already no fresh oranges at minute 0, the answer is just 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10</code></li>
	<li><code>grid[i][j]</code> is <code>0</code>, <code>1</code>, or <code>2</code>.</li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js


/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const flatten = (a) => a.reduce((p, c) => p.concat(c));
    const by2 = (flat, idx, wth) => {
        return flat[idx-1] === 2 || flat[idx+1] === 2 || flat[idx-wth] === 2 || flat[idx+wth] === 2;
    }
    
    const h = grid.length, w = grid[0].length;
    let loop = h*w;
    let days = 0, tmp = 0;
    
    while(loop){
        const flat = flatten(grid.map((a) => a.concat([0])));
        for(let i = 0; i < h; i++){
            for(let j = 0; j < w; j++){
                if(grid[i][j] === 1 && by2(flat, (w+1)*i+j, w+1)){
                    tmp = tmp | 1;
                    grid[i][j] = 2;
                    console.log('tada', i, j);
                }
            }
        }
        if(tmp){
            days += tmp;
            console.log('tmp', tmp);
        } else {
            console.log('break');
            break;
        }
        tmp = 0;
        loop -= 1;
    }
    
    if(flatten(grid).includes(1)){
        return -1;
    } else {
        return days;
    }
};
```
