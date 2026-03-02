---
id: triangle
title: Triangle
sidebar_label: Triangle
---
## Description
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

## Solution(javascript)
```javascript
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