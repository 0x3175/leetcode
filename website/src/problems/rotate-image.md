---
layout: "layout.njk"
title: "Rotate Image"
difficulty: ""
tags: 
  - problems
---

# Rotate Image

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>You are given an <em>n</em> x <em>n</em> 2D matrix representing an image.</p>

<p>Rotate the image by 90 degrees (clockwise).</p>

<p><strong>Note:</strong></p>

<p>You have to rotate the image <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a>, which means you have to modify the input 2D matrix directly. <strong>DO NOT</strong> allocate another 2D matrix and do the rotation.</p>

<p><strong>Example 1:</strong></p>

<pre>
Given <strong>input matrix</strong> = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix <strong>in-place</strong> such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
Given <strong>input matrix</strong> =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix <strong>in-place</strong> such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
</pre>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;
    const half = Math.floor(len/2);
    let tmp;
    
    for(let i = 0; i < len; i++){
        for(let j = 0; j < half; j++){
            tmp = matrix[i][j];
            matrix[i][j] = matrix[i][len-1-j];
            matrix[i][len-1-j] = tmp;
        }
    }
    
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(i + j < len - 1){
                tmp = matrix[i][j];
                matrix[i][j] = matrix[len-1-j][len-1-i];
                matrix[len-1-j][len-1-i] = tmp;
            }
        }
    }
};
```
