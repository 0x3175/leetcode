---
id: generate-parentheses
title: Generate Parentheses
sidebar_label: Generate Parentheses
---
## Description
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

## Solution(javascript)
```javascript
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