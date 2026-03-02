---
layout: "layout.njk"
title: "Rotting Oranges"
difficulty: ""
tags: 
  - problems
---

# Rotting Oranges

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>In a given grid, each cell can have one of three&nbsp;values:</p>

<ul>
	<li>the value <code>0</code> representing an empty cell;</li>
	<li>the value <code>1</code> representing a fresh orange;</li>
	<li>the value <code>2</code> representing a rotten orange.</li>
</ul>

<p>Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.</p>

<p>Return the minimum number of minutes that must elapse until no cell has a fresh orange.&nbsp; If this is impossible, return <code>-1</code> instead.</p>

<p>&nbsp;</p>

<div>
<p><strong>Example 1:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/02/16/oranges.png" style="width: 712px; height: 150px;" /></strong></p>

<pre>
<strong>Input: </strong><span id="example-input-1-1">[[2,1,1],[1,1,0],[0,1,1]]</span>
<strong>Output: </strong><span id="example-output-1">4</span>
</pre>

<div>
<p><strong>Example 2:</strong></p>

<pre>
<strong>Input: </strong><span id="example-input-2-1">[[2,1,1],[0,1,1],[1,0,1]]</span>
<strong>Output: </strong><span id="example-output-2">-1</span>
<strong>Explanation: </strong> The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
</pre>

<div>
<p><strong>Example 3:</strong></p>

<pre>
<strong>Input: </strong><span id="example-input-3-1">[[0,2]]</span>
<strong>Output: </strong><span id="example-output-3">0</span>
<strong>Explanation: </strong> Since there are already no fresh oranges at minute 0, the answer is just 0.
</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li><code>1 &lt;= grid.length &lt;= 10</code></li>
	<li><code>1 &lt;= grid[0].length &lt;= 10</code></li>
	<li><code>grid[i][j]</code> is only <code>0</code>, <code>1</code>, or <code>2</code>.</li>
</ol>
</div>
</div>
</div>
</div>

<h2 id="solution">Solution (javascript)</h2>

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
