---
id: first-missing-positive
title: First Missing Positive
sidebar_label: First Missing Positive
---
## Description
<div class="description">
<p>Given an unsorted integer array, find the smallest missing&nbsp;positive integer.</p>

<p><strong>Example 1:</strong></p>

<pre>
Input: [1,2,0]
Output: 3
</pre>

<p><strong>Example 2:</strong></p>

<pre>
Input: [3,4,-1,1]
Output: 2
</pre>

<p><strong>Example 3:</strong></p>

<pre>
Input: [7,8,9,11,12]
Output: 1
</pre>

<p><strong>Note:</strong></p>

<p>Your algorithm should run in <em>O</em>(<em>n</em>) time and uses constant extra space.</p>

</div>

## Solution(javascript)
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const len = nums.length;
    
    let middleman;
    for(let i = 0; i < len; i++){
        while(nums[i] > 0 && nums[i] <= len && (nums[nums[i]-1] != nums[i])){
            middleman = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = middleman;
        }
    }
    
    for(let i = 0; i < len; i++){
        if(nums[i] != i+1){
            return i + 1;
        }
    }
    
    return len + 1;
};
```