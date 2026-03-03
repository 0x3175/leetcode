---
id: median-of-two-sorted-arrays
title: Median of Two Sorted Arrays
sidebar_label: Median of Two Sorted Arrays
---
## Description
<div class="description">
<p>There are two sorted arrays <b>nums1</b> and <b>nums2</b> of size m and n respectively.</p>

<p>Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).</p>

<p>You may assume <strong>nums1</strong> and <strong>nums2</strong>&nbsp;cannot be both empty.</p>

<p><b>Example 1:</b></p>

<pre>
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
</pre>

<p><b>Example 2:</b></p>

<pre>
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
</pre>

</div>

## Solution(javascript)
```javascript
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