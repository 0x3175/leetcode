---
id: "reverse-integer"
title: "Reverse Integer"
lang: "javascript"
---

# Reverse Integer

<h2 id="problem-description">Problem Description</h2>

<p>Given a signed 32-bit integer <code>x</code>, return <code>x</code><em> with its digits reversed</em>. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then return <code>0</code>.</p>

<p><strong>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</strong></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 123
<strong>Output:</strong> 321
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> x = -123
<strong>Output:</strong> -321
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> x = 120
<strong>Output:</strong> 21
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup> &lt;= x &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(y) {
    var reverseAbs = function(x){
        if (x == 0) return '';
        return x%10 + reverseAbs(Math.floor(x/10));
    }
    var limit = 2147483648;
    var rvsdY = reverseAbs(Math.abs(y));
    
    if(rvsdY > limit || y == 0) return 0;
    return parseInt((y < 0 ? '-' : '') + rvsdY);
};

```
