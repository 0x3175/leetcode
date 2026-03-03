---
id: longest-valid-parentheses
title: Longest Valid Parentheses
sidebar_label: Longest Valid Parentheses
---
## Description
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

## Solution(javascript)
```javascript
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