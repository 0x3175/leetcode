---
id: "longest-palindrome"
title: "Longest Palindrome"
lang: "javascript"
---

# Longest Palindrome

<h2 id="problem-description">Problem Description</h2>

<p>Given a string <code>s</code> which consists of lowercase or uppercase letters, return the length of the <strong>longest <span data-keyword="palindrome-string">palindrome</span></strong>&nbsp;that can be built with those letters.</p>

<p>Letters are <strong>case sensitive</strong>, for example, <code>&quot;Aa&quot;</code> is not considered a palindrome.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abccccdd&quot;
<strong>Output:</strong> 7
<strong>Explanation:</strong> One longest palindrome that can be built is &quot;dccaccd&quot;, whose length is 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The longest palindrome that can be built is &quot;a&quot;, whose length is 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2000</code></li>
	<li><code>s</code> consists of lowercase <strong>and/or</strong> uppercase English&nbsp;letters only.</li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const m = new Map();
    const ss = s.split('');
    ss.forEach(v => m.set(v, (m.get(v) ?? 0) + 1));
    let l = 0;
    m.forEach(v => l+=2*Math.floor(v/2));
    return s.length > l ? l + 1 : l;
};
```
