---
layout: "layout.njk"
title: "Maximum Length of Pair Chain"
difficulty: "Migrated"
tags: 
  - problems
---

# Maximum Length of Pair Chain

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>
You are given <code>n</code> pairs of numbers. In every pair, the first number is always smaller than the second number.
</p>

<p>
Now, we define a pair <code>(c, d)</code> can follow another pair <code>(a, b)</code> if and only if <code>b < c</code>. Chain of pairs can be formed in this fashion. 
</p>

<p>
Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.
</p>


<p><b>Example 1:</b><br />
<pre>
<b>Input:</b> [[1,2], [2,3], [3,4]]
<b>Output:</b> 2
<b>Explanation:</b> The longest chain is [1,2] -> [3,4]
</pre>
</p>

<p><b>Note:</b><br>
<ol>
<li>The number of given pairs will be in the range [1, 1000].</li>
</ol>
</p>
</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1]-b[1]);
    let cur = -9007199254740991, ans = 0
    for(let pair of pairs){
        if(pair[0] > cur){
            cur = pair[1];
            ans++;
        }
    }
    return ans;
};
```
