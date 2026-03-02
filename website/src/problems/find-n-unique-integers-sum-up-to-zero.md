---
layout: "layout.njk"
title: "Find N Unique Integers Sum up to Zero"
difficulty: ""
tags: 
  - problems
---

# Find N Unique Integers Sum up to Zero

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given an integer <code>n</code>, return <strong>any</strong> array containing <code>n</code> <strong>unique</strong>&nbsp;integers such that they add up to 0.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> [-7,-1,1,3,4]
<strong>Explanation:</strong> These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> [-1,0,1]
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>
</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const arr = [];
    let sum = 0;
    for(let i = 1; i < n; i++){
        arr.push(i);
        sum += i;
    }
    arr.push(-sum);
    
    return arr;
};
```
