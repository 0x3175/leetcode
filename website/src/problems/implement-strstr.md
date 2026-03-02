---
layout: "layout.njk"
title: "Implement strStr()"
difficulty: "Migrated"
tags: 
  - problems
---

# Implement strStr()

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Implement <a href="http://www.cplusplus.com/reference/cstring/strstr/" target="_blank">strStr()</a>.</p>

<p>Return the index of the first occurrence of needle in haystack, or <strong>-1</strong> if needle is not part of haystack.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> haystack = &quot;hello&quot;, needle = &quot;ll&quot;
<strong>Output:</strong> 2
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> haystack = &quot;aaaaa&quot;, needle = &quot;bba&quot;
<strong>Output:</strong> -1
</pre>

<p><strong>Clarification:</strong></p>

<p>What should we return when <code>needle</code> is an empty string? This is a great question to ask during an interview.</p>

<p>For the purpose of this problem, we will return 0 when <code>needle</code> is an empty string. This is consistent to C&#39;s&nbsp;<a href="http://www.cplusplus.com/reference/cstring/strstr/" target="_blank">strstr()</a> and Java&#39;s&nbsp;<a href="https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)" target="_blank">indexOf()</a>.</p>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    function index(h, n, i) {
        if(h.length < n.length) return -1;
        if(h.substring(0, n.length) === n) return i;
        return index(h.slice(1), n, i+1);
    }
    return index(haystack, needle, 0);
};
```
