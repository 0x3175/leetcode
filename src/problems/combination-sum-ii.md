---
id: "combination-sum-ii"
title: "Combination Sum II"
lang: "javascript"
---

# Combination Sum II

<h2 id="problem-description">Problem Description</h2>

<p>Given a collection of candidate numbers (<code>candidates</code>) and a target number (<code>target</code>), find all unique combinations in <code>candidates</code>&nbsp;where the candidate numbers sum to <code>target</code>.</p>

<p>Each number in <code>candidates</code>&nbsp;may only be used <strong>once</strong> in the combination.</p>

<p><strong>Note:</strong>&nbsp;The solution set must not contain duplicate combinations.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> candidates = [10,1,2,7,6,1,5], target = 8
<strong>Output:</strong> 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> candidates = [2,5,2,1,2], target = 5
<strong>Output:</strong> 
[
[1,2,2],
[5]
]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;=&nbsp;candidates.length &lt;= 100</code></li>
	<li><code>1 &lt;=&nbsp;candidates[i] &lt;= 50</code></li>
	<li><code>1 &lt;= target &lt;= 30</code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
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
