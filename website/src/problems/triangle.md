---
layout: "layout.njk"
title: "Triangle"
difficulty: "Migrated"
tags: 
  - problems
---

# Triangle

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.</p>

<p>For example, given the following triangle</p>

<pre>
[
     [<strong>2</strong>],
    [<strong>3</strong>,4],
   [6,<strong>5</strong>,7],
  [4,<strong>1</strong>,8,3]
]
</pre>

<p>The minimum path sum from top to bottom is <code>11</code> (i.e., <strong>2</strong> + <strong>3</strong> + <strong>5</strong> + <strong>1</strong> = 11).</p>

<p><strong>Note:</strong></p>

<p>Bonus point if you are able to do this using only <em>O</em>(<em>n</em>) extra space, where <em>n</em> is the total number of rows in the triangle.</p>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for(let d = triangle.length-2; d >=0; d--){
        const row = triangle[d];
        for(let i = 0; i < row.length; i++){
            row[i] += Math.min(triangle[d+1][i], triangle[d+1][i+1]);
        }
    }
    return triangle[0][0];
};
```
