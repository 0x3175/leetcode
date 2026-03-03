---
id: "bitwise-and-of-numbers-range"
title: "Bitwise AND of Numbers Range"
lang: "javascript"
---

# Bitwise AND of Numbers Range

<h2 id="problem-description">Problem Description</h2>

<p>Given two integers <code>left</code> and <code>right</code> that represent the range <code>[left, right]</code>, return <em>the bitwise AND of all numbers in this range, inclusive</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> left = 5, right = 7
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> left = 0, right = 0
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> left = 1, right = 2147483647
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= left &lt;= right &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    if (left === right) return left;
    const nextTwoPower = 2**Number(left).toString(2).length;
    if (nextTwoPower <= right) return 0;
    let res = left;
    for (let i = left+1; i <= right; i++) {
        res = res&i;
    }
    return res;
};
```
