---
id: "repeated-string-match"
title: "Repeated String Match"
lang: "javascript"
---

# Repeated String Match

<h2 id="problem-description">Problem Description</h2>

<p>Given two strings <code>a</code> and <code>b</code>, return <em>the minimum number of times you should repeat string </em><code>a</code><em> so that string</em> <code>b</code> <em>is a substring of it</em>. If it is impossible for <code>b</code>​​​​​​ to be a substring of <code>a</code> after repeating it, return <code>-1</code>.</p>

<p><strong>Notice:</strong> string <code>&quot;abc&quot;</code> repeated 0 times is <code>&quot;&quot;</code>, repeated 1 time is <code>&quot;abc&quot;</code> and repeated 2 times is <code>&quot;abcabc&quot;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> a = &quot;abcd&quot;, b = &quot;cdabcdab&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> We return 3 because by repeating a three times &quot;ab<strong>cdabcdab</strong>cd&quot;, b is a substring of it.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> a = &quot;a&quot;, b = &quot;aa&quot;
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= a.length, b.length &lt;= 10<sup>4</sup></code></li>
	<li><code>a</code> and <code>b</code> consist of lowercase English letters.</li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let num = 1, s = A;
    while(s.length < B.length){
            s += A;
            num++;
    }
    
    if(s.includes(B)) return num;
    if((s+A).includes(B)) return num+1;
    return -1;
};
```
