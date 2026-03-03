---
id: "permutations-ii"
title: "Permutations II"
lang: "javascript"
---

# Permutations II

<h2 id="problem-description">Problem Description</h2>

<p>Given a collection of numbers, <code>nums</code>,&nbsp;that might contain duplicates, return <em>all possible unique permutations <strong>in any order</strong>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong>
[[1,1,2],
 [1,2,1],
 [2,1,1]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 8</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

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
