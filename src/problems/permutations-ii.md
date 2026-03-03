---
id: permutations-ii
title: Permutations II
sidebar_label: Permutations II
---
## Description
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

## Solution(javascript)
```javascript
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