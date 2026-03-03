---
id: "find-first-and-last-position-of-element-in-sorted-array"
title: "Find First and Last Position of Element in Sorted Array"
lang: "javascript"
---

# Find First and Last Position of Element in Sorted Array

<h2 id="problem-description">Problem Description</h2>

<p>Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value.</p>

<p>If <code>target</code> is not found in the array, return <code>[-1, -1]</code>.</p>

<p>You must&nbsp;write an algorithm with&nbsp;<code>O(log n)</code> runtime complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 8
<strong>Output:</strong> [3,4]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [5,7,7,8,8,10], target = 6
<strong>Output:</strong> [-1,-1]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [], target = 0
<strong>Output:</strong> [-1,-1]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup>&nbsp;&lt;= nums[i]&nbsp;&lt;= 10<sup>9</sup></code></li>
	<li><code>nums</code> is a non-decreasing array.</li>
	<li><code>-10<sup>9</sup>&nbsp;&lt;= target&nbsp;&lt;= 10<sup>9</sup></code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
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
