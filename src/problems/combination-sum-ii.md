---
id: combination-sum-ii
title: Combination Sum II
sidebar_label: Combination Sum II
---
## Description
<div class="description">
<p>Given a collection of candidate numbers (<code>candidates</code>) and a target number (<code>target</code>), find all unique combinations in <code>candidates</code>&nbsp;where the candidate numbers sums to <code>target</code>.</p>

<p>Each number in <code>candidates</code>&nbsp;may only be used <strong>once</strong> in the combination.</p>

<p><strong>Note:</strong></p>

<ul>
	<li>All numbers (including <code>target</code>) will be positive integers.</li>
	<li>The solution set must not contain duplicate combinations.</li>
</ul>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> candidates =&nbsp;<code>[10,1,2,7,6,1,5]</code>, target =&nbsp;<code>8</code>,
<strong>A solution set is:</strong>
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> candidates =&nbsp;[2,5,2,1,2], target =&nbsp;5,
<strong>A solution set is:</strong>
[
&nbsp; [1,2,2],
&nbsp; [5]
]
</pre>

</div>

## Solution(javascript)
```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    function findCom(cans, target, rst, arr) {
        if(target === 0){
            rst.push(arr);
        } else {
            let last = -1;
            for(let i = 0; i < cans.length; i++){
                if(last != cans[i] && cans[i] <= target){
                    let newArr = arr.slice();
                    newArr.push(cans[i]);
                    findCom(cans.slice(i+1), target-cans[i], rst, newArr);
                }
                last = cans[i];
            }
        }
    }
    
    candidates.sort((a, b) => a - b);
    let rst = new Array();
    let last = -1;
    for(let i = 0; i < candidates.length; i++){
        if(last != candidates[i] && candidates[i] <= target){
            findCom(candidates.slice(i+1), target-candidates[i], rst, [candidates[i]]);
        }
        last = candidates[i];
    }
    
    return rst;
};
```