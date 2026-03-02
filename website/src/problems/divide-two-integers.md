---
id: divide-two-integers
title: Divide Two Integers
sidebar_label: Divide Two Integers
---
## Description
<div class="description">
<p>Given two integers <code>dividend</code> and <code>divisor</code>, divide two integers without using multiplication, division and mod operator.</p>

<p>Return the quotient after dividing <code>dividend</code> by <code>divisor</code>.</p>

<p>The integer division should truncate toward zero.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> dividend = 10, divisor = 3
<strong>Output:</strong> 3</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> dividend = 7, divisor = -3
<strong>Output:</strong> -2</pre>

<p><strong>Note:</strong></p>

<ul>
	<li>Both dividend and divisor&nbsp;will be&nbsp;32-bit&nbsp;signed integers.</li>
	<li>The divisor will never be 0.</li>
	<li>Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [&minus;2<sup>31</sup>, &nbsp;2<sup>31</sup> &minus; 1]. For the purpose of this problem, assume that your function returns 2<sup>31</sup> &minus; 1 when the division result&nbsp;overflows.</li>
</ul>

</div>

## Solution(javascript)
```javascript
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 0) return 0;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  var isPositive = true;
  if (dividend > 0 !== divisor > 0) isPositive = false;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  var count = 1,
    result = 0,
    base = divisor;

  while (dividend >= divisor) {
    count = 1;
    base = divisor;
    while (base <= (dividend >> 1)) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }

  if (!isPositive) result = -result;
  return result;
};
```