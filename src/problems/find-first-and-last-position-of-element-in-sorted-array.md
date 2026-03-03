---
id: find-first-and-last-position-of-element-in-sorted-array
title: Find First and Last Position of Element in Sorted Array
sidebar_label: Find First and Last Position of Element in Sorted Array
---
## Description
<div class="description">
<p>Given an array of integers <code>nums</code> sorted in ascending order, find the starting and ending position of a given <code>target</code> value.</p>

<p>Your algorithm&#39;s runtime complexity must be in the order of <em>O</em>(log <em>n</em>).</p>

<p>If the target is not found in the array, return <code>[-1, -1]</code>.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [<code>5,7,7,8,8,10]</code>, target = 8
<strong>Output:</strong> [3,4]</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [<code>5,7,7,8,8,10]</code>, target = 6
<strong>Output:</strong> [-1,-1]</pre>

</div>

## Solution(javascript)
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let firstleft = 0, lastleft = 0;
    let firstright = nums.length - 1, lastright = nums.length - 1;
    let first = -1, last = -1;
    let mid;
    
    while (firstleft <= firstright) {
        mid = Math.floor((firstleft + firstright) / 2);

        if (nums[mid] === target && ( nums[mid-1] < nums[mid] || mid === 0)) {
            first = mid;
            break;
        } else if (nums[mid] < target) {
            firstleft = mid + 1;
        } else {
            firstright = mid - 1;
        }
    }
    
    while (lastleft <= lastright) {
        mid = Math.floor((lastleft + lastright) / 2);

        if (nums[mid] === target && ( nums[mid+1] > nums[mid] || mid === nums.length-1)) {
            last = mid;
            break;
        } else if (nums[mid] > target) {
            lastright = mid - 1;
        } else {
            lastleft = mid + 1;
        }
    }
    
    return [first, last];
};
```