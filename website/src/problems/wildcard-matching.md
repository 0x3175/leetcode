---
layout: "layout.njk"
title: "Wildcard Matching"
difficulty: ""
tags: 
  - problems
---

# Wildcard Matching

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given an input string (<code>s</code>) and a pattern (<code>p</code>), implement wildcard pattern matching with support for <code>&#39;?&#39;</code> and <code>&#39;*&#39;</code>.</p>

<pre>
&#39;?&#39; Matches any single character.
&#39;*&#39; Matches any sequence of characters (including the empty sequence).
</pre>

<p>The matching should cover the <strong>entire</strong> input string (not partial).</p>

<p><strong>Note:</strong></p>

<ul>
	<li><code>s</code>&nbsp;could be empty and contains only lowercase letters <code>a-z</code>.</li>
	<li><code>p</code> could be empty and contains only lowercase letters <code>a-z</code>, and characters like <code><font face="monospace">?</font></code>&nbsp;or&nbsp;<code>*</code>.</li>
</ul>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong>
s = &quot;aa&quot;
p = &quot;a&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong> &quot;a&quot; does not match the entire string &quot;aa&quot;.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong>
s = &quot;aa&quot;
p = &quot;*&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong>&nbsp;&#39;*&#39; matches any sequence.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong>
s = &quot;cb&quot;
p = &quot;?a&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong>&nbsp;&#39;?&#39; matches &#39;c&#39;, but the second letter is &#39;a&#39;, which does not match &#39;b&#39;.
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong>
s = &quot;adceb&quot;
p = &quot;*a*b&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong>&nbsp;The first &#39;*&#39; matches the empty sequence, while the second &#39;*&#39; matches the substring &quot;dce&quot;.
</pre>

<p><strong>Example 5:</strong></p>

<pre>
<strong>Input:</strong>
s = &quot;acdcb&quot;
p = &quot;a*c?b&quot;
<strong>Output:</strong> false
</pre>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0, j = 0;
    let m = s.length, n = p.length;
    let last_match = -1, starj = -1;
    while (i < m){
        if (j < n && (s[i] == p[j] || p[j] == '?')){
            i++; j++;
        }
        else if (j < n && p[j] == '*'){
            starj = j;
            j++;
            last_match = i;
        }
        else if (starj != -1){
            j = starj + 1;
            last_match++;
            i = last_match;
        }
        else return false;
    }
    while (p[j] == '*' && j <n) j++;
    return j == n;
};
```
