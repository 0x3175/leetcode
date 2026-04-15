---
id: "maximum-sum-of-two-non-overlapping-subarrays"
title: "Maximum Sum of Two Non-Overlapping Subarrays"
lang: "javascript"
---

# Maximum Sum of Two Non-Overlapping Subarrays

<h2 id="problem-description">Problem Description</h2>

<p>Given an integer array <code>nums</code> and two integers <code>firstLen</code> and <code>secondLen</code>, return <em>the maximum sum of elements in two non-overlapping <strong>subarrays</strong> with lengths </em><code>firstLen</code><em> and </em><code>secondLen</code>.</p>

<p>The array with length <code>firstLen</code> could occur before or after the array with length <code>secondLen</code>, but they have to be non-overlapping.</p>

<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
<strong>Output:</strong> 20
<strong>Explanation:</strong> One choice of subarrays is [9] with length 1, and [6,5] with length 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
<strong>Output:</strong> 29
<strong>Explanation:</strong> One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
<strong>Output:</strong> 31
<strong>Explanation:</strong> One choice of subarrays is [5,6,0,9] with length 4, and [0,3,8] with length 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= firstLen, secondLen &lt;= 1000</code></li>
	<li><code>2 &lt;= firstLen + secondLen &lt;= 1000</code></li>
	<li><code>firstLen + secondLen &lt;= nums.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    const xs = [], ys = [];

    let x = nums.slice(0, firstLen).reduce((acc, curr) => acc + curr, 0);
    xs.push(x);
    for (let i = firstLen; i < nums.length; i++) {
        x = x + nums[i] - nums[i-firstLen];
        xs.push(x);
    }

    let y = nums.slice(0, secondLen).reduce((acc, curr) => acc + curr, 0);
    ys.push(y);
    for (let i = secondLen; i < nums.length; i++) {
        y = y + nums[i] - nums[i-secondLen];
        ys.push(y);
    }

    let max = 0;
    for (let i = 0; i < xs.length; i++) {
        for (let j = 0; j < ys.length; j++) {
            if (i + firstLen <= j || j + secondLen <= i) {
                const sum = xs[i] + ys[j];
                max = max < sum ? sum: max;
            }
        }
    }

    return max;
};
```
