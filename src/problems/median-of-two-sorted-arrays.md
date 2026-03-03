---
id: "median-of-two-sorted-arrays"
title: "Median of Two Sorted Arrays"
lang: "javascript"
---

# Median of Two Sorted Arrays

<h2 id="problem-description">Problem Description</h2>

<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>

<p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,3], nums2 = [2]
<strong>Output:</strong> 2.00000
<strong>Explanation:</strong> merged array = [1,2,3] and median is 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
<strong>Output:</strong> 2.50000
<strong>Explanation:</strong> merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>nums1.length == m</code></li>
	<li><code>nums2.length == n</code></li>
	<li><code>0 &lt;= m &lt;= 1000</code></li>
	<li><code>0 &lt;= n &lt;= 1000</code></li>
	<li><code>1 &lt;= m + n &lt;= 2000</code></li>
	<li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    
    const x = nums1.length, y = nums2.length;
    let lo = 0, hi = x;
    
    while(lo <= hi) {
        let partitionX = (lo + hi) / 2 | 0,
            partitionY = (x + y + 1) / 2 - partitionX | 0;
        
        let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let minRightX = partitionX === x ? Infinity : nums1[partitionX];
        
        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minRightY = partitionY === y ? Infinity : nums2[partitionY];
        
        if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if((x + y) & 1) return Math.max(maxLeftX, maxLeftY);
            return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
        } else if(maxLeftX > minRightY) {
            hi = partitionX - 1;
        } else {
            lo = partitionX + 1;
        }
    }
};
```
