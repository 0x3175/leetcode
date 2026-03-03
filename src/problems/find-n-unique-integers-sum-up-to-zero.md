---
id: "find-n-unique-integers-sum-up-to-zero"
title: "Find N Unique Integers Sum up to Zero"
lang: "javascript"
---

# Find N Unique Integers Sum up to Zero

<h2 id="problem-description">Problem Description</h2>

<p>Given an integer <code>n</code>, return <strong>any</strong> array containing <code>n</code> <strong>unique</strong> integers such that they add up to <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> [-7,-1,1,3,4]
<strong>Explanation:</strong> These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> [-1,0,1]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

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
