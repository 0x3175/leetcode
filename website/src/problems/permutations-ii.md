---
layout: "layout.njk"
title: "Permutations II"
difficulty: "Migrated"
tags: 
  - problems
---

# Permutations II

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a collection of numbers that might contain duplicates, return all possible unique permutations.</p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input:</strong> [1,1,2]
<strong>Output:</strong>
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
</pre>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const permu = (perm, left, rst) => {
        if(!left.length){
            rst.push(perm);
        } else {
            let prev;
            left.forEach((l, i) => {
                if(l !== prev) {
                    let newPerm = perm.slice();
                    newPerm.push(l);
                    let newLeft = left.slice();
                    newLeft.splice(i,1)
                    permu(newPerm, newLeft, rst);    
                }
                prev = l;
            });
        }
    }
    
    let rst = [];
    nums.sort();
    permu([], nums, rst);
    return rst;
};
```
