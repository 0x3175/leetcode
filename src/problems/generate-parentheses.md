---
id: "generate-parentheses"
title: "Generate Parentheses"
lang: "javascript"
---

# Generate Parentheses

<h2 id="problem-description">Problem Description</h2>

<p>Given <code>n</code> pairs of parentheses, write a function to <em>generate all combinations of well-formed parentheses</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> ["((()))","(()())","(())()","()(())","()()()"]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> ["()"]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 8</code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];
    function backtrack(s = '', left = 0, right = 0) {
        if(s.length === 2 * n) {
            ans.push(s);
            return;
        }
        if(left < n)
            backtrack(s+'(', left+1, right);
        if(right < left)
            backtrack(s+')', left, right+1);
    }
    backtrack();
    return ans;
};
```
