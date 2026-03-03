---
id: "3sum-closest"
title: "3Sum Closest"
lang: "javascript"
---

# 3Sum Closest

<h2 id="problem-description">Problem Description</h2>

<p>Given an integer array <code>nums</code> of length <code>n</code> and an integer <code>target</code>, find three integers at <strong>distinct indices</strong> in <code>nums</code> such that the sum is closest to <code>target</code>.</p>

<p>Return <em>the sum of the three integers</em>.</p>

<p>You may assume that each input would have exactly one solution.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,2,1,-4], target = 1
<strong>Output:</strong> 2
<strong>Explanation:</strong> The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,0,0], target = 1
<strong>Output:</strong> 0
<strong>Explanation:</strong> The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;= 500</code></li>
	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    
    var rtn = nums.slice(0, 3).reduce((sum, a) => sum + a,0);
    var dif = Math.abs(rtn - target);
    
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1, k = nums.length - 1; j < k;) {
            var sum = nums[i] + nums[j] + nums[k];
            if (sum - target === 0) {
                return target;
            } else if (Math.abs(sum - target) < dif) {
                dif = Math.abs(sum - target);
                rtn = sum;
            }
            
            if (nums[i] + nums[j] + nums[k] - target > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return rtn;
};
```
