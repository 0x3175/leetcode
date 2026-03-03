---
id: 3sum-closest
title: 3Sum Closest
sidebar_label: 3Sum Closest
---
## Description
<div class="description">
<p>Given an array <code>nums</code> of <em>n</em> integers and an integer <code>target</code>, find three integers in <code>nums</code>&nbsp;such that the sum is closest to&nbsp;<code>target</code>. Return the sum of the three integers. You may assume that each input would have exactly one solution.</p>

<p><strong>Example:</strong></p>

<pre>
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
</pre>

</div>

## Solution(javascript)
```javascript
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