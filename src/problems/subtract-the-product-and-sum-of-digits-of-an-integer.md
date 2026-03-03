---
id: "subtract-the-product-and-sum-of-digits-of-an-integer"
title: "Subtract the Product and Sum of Digits of an Integer"
lang: "javascript"
---

# Subtract the Product and Sum of Digits of an Integer

<h2 id="problem-description">Problem Description</h2>

Given an integer number <code>n</code>, return the difference between the product of its digits and the sum of its digits.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 234
<strong>Output:</strong> 15 
<b>Explanation:</b> 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 4421
<strong>Output:</strong> 21
<b>Explanation: 
</b>Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10^5</code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = String(n).split('').map((e) => Number(e));
    const pro = arr.reduce((p, c) => p*c, 1);
    const sum = arr.reduce((p, c) => p+c, 0);
    return pro - sum;
};
```
