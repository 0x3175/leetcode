---
layout: "layout.njk"
title: "Minimum Flips to Make a OR b Equal to c"
difficulty: ""
tags: 
  - problems
---

# Minimum Flips to Make a OR b Equal to c

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given 3 positives numbers <code>a</code>, <code>b</code> and <code>c</code>. Return the minimum flips required in some bits of <code>a</code> and <code>b</code> to make (&nbsp;<code>a</code> OR <code>b</code> == <code>c</code>&nbsp;). (bitwise OR operation).<br />
Flip operation&nbsp;consists of change&nbsp;<strong>any</strong>&nbsp;single bit 1 to 0 or change the bit 0 to 1&nbsp;in their binary representation.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/01/06/sample_3_1676.png" style="width: 260px; height: 87px;" /></p>

<pre>
<strong>Input:</strong> a = 2, b = 6, c = 5
<strong>Output:</strong> 3
<strong>Explanation: </strong>After flips a = 1 , b = 4 , c = 5 such that (<code>a</code> OR <code>b</code> == <code>c</code>)</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> a = 4, b = 2, c = 7
<strong>Output:</strong> 1
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> a = 1, b = 2, c = 3
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= a &lt;= 10^9</code></li>
	<li><code>1 &lt;= b&nbsp;&lt;= 10^9</code></li>
	<li><code>1 &lt;= c&nbsp;&lt;= 10^9</code></li>
</ul>
</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let sa = a.toString(2);
    let sb = b.toString(2);
    let sc = c.toString(2);
    
    const max = Math.max(sa.length, sb.length, sc.length);
    sa = sa.padStart(max, '0');
    sb = sb.padStart(max, '0');
    sc = sc.padStart(max, '0');
    
    let flips = 0;
    for(let i = 0; i < max; i++){
        flips += (Number(sc[i]) ? (1 - (sa[i] | sb[i])) : (Number(sa[i]) + Number(sb[i])));
    }
    
    return flips;
};
```
