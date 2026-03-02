---
id: powx-n
title: Pow(x, n)
sidebar_label: Pow(x, n)
---
## Description
<div class="description">
<p>Implement <a href="http://www.cplusplus.com/reference/valarray/pow/" target="_blank">pow(<em>x</em>, <em>n</em>)</a>, which calculates&nbsp;<em>x</em> raised to the power <em>n</em> (x<sup><span style="font-size:10.8333px">n</span></sup>).</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> 2.00000, 10
<strong>Output:</strong> 1024.00000
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> 2.10000, 3
<strong>Output:</strong> 9.26100
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> 2.00000, -2
<strong>Output:</strong> 0.25000
<strong>Explanation:</strong> 2<sup>-2</sup> = 1/2<sup>2</sup> = 1/4 = 0.25
</pre>

<p><strong>Note:</strong></p>

<ul>
	<li>-100.0 &lt; <em>x</em> &lt; 100.0</li>
	<li><em>n</em> is a 32-bit signed integer, within the range&nbsp;[&minus;2<sup>31</sup>,&nbsp;2<sup>31&nbsp;</sup>&minus; 1]</li>
</ul>

</div>

## Solution(javascript)
```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0)
        return 1;
    if(n<0){
        n = -n;
        x = 1/x;
    }
    return (n%2 == 0) ? myPow(x*x, Math.floor(n/2)) : x*myPow(x*x, Math.floor(n/2));
};


```