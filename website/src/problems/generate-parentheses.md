---
layout: "layout.njk"
title: "Generate Parentheses"
difficulty: ""
tags: 
  - problems
---

# Generate Parentheses

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>
Given <i>n</i> pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
</p>

<p>
For example, given <i>n</i> = 3, a solution set is:
</p>
<pre>
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
</pre>
</div>

<h2 id="solution">Solution (javascript)</h2>

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
