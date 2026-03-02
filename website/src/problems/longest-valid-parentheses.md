---
layout: "layout.njk"
title: "Longest Valid Parentheses"
difficulty: "Migrated"
tags: 
  - problems
---

# Longest Valid Parentheses

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a string containing just the characters <code>&#39;(&#39;</code> and <code>&#39;)&#39;</code>, find the length of the longest valid (well-formed) parentheses substring.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> &quot;(()&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> The longest valid parentheses substring is <code>&quot;()&quot;</code>
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> &quot;<code>)()())</code>&quot;
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest valid parentheses substring is <code>&quot;()()&quot;</code>
</pre>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let n = s.length, longest = 0;
    let st = [];
    for (let i = 0; i < n; i++) {
        if (s[i] == '(') {
            st.push(i);
        } else {
            if (st.length) {
                if (s[st[st.length-1]] == '(') st.pop();
                else st.push(i);
            } else {
                st.push(i);
            }
        }
    }
    if (!st.length) {
        longest = n;
    } else {
        let a = n, b = 0;
        while (st.length) {
            b = st[st.length-1];
            st.pop();
            longest = Math.max(longest, a - b - 1);
            a = b;
        }
        longest = Math.max(longest, a);
    }
    return longest;
};
```
