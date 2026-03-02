---
layout: "layout.njk"
title: "Permutations"
difficulty: ""
tags: 
  - problems
---

# Permutations

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a collection of <strong>distinct</strong> integers, return all possible permutations.</p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input:</strong> [1,2,3]
<strong>Output:</strong>
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
</pre>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const permu = (perm, left, rst) => {
        if(!left.length){
            rst.push(perm);
        } else {
            left.forEach((l, i) => {
                let newPerm = perm.slice();
                newPerm.push(l);
                let newLeft = left.slice();
                newLeft.splice(i,1)
                permu(newPerm, newLeft, rst);
            });
        }
    }
    
    let rst = [];
    permu([], nums, rst);
    return rst;
};
```
