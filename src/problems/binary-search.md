---
id: "binary-search"
title: "Binary Search"
lang: "javascript"
---

# Binary Search

<h2 id="problem-description">Problem Description</h2>

<p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p>

<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 9
<strong>Output:</strong> 4
<strong>Explanation:</strong> 9 exists in nums and its index is 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 2
<strong>Output:</strong> -1
<strong>Explanation:</strong> 2 does not exist in nums so return -1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt; nums[i], target &lt; 10<sup>4</sup></code></li>
	<li>All the integers in <code>nums</code> are <strong>unique</strong>.</li>
	<li><code>nums</code> is sorted in ascending order.</li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const searchTarget = (nums, target, left, right) => {
        if (left > right) {
            return -1;
        }
        const mid = left+Math.floor((right-left)/2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            return searchTarget(nums, target, mid+1, right);
        } else {
            return searchTarget(nums, target, left, mid-1);
        }
    };
    return searchTarget(nums, target, 0, nums.length-1);
};
```
