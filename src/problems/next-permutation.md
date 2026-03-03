---
id: next-permutation
title: Next Permutation
sidebar_label: Next Permutation
---
## Description
<div class="description">
<p>Implement <strong>next permutation</strong>, which rearranges numbers into the lexicographically next greater permutation of numbers.</p>

<p>If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).</p>

<p>The replacement must be <strong><a href="http://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></strong> and use only constant&nbsp;extra memory.</p>

<p>Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.</p>

<p><code>1,2,3</code> &rarr; <code>1,3,2</code><br />
<code>3,2,1</code> &rarr; <code>1,2,3</code><br />
<code>1,1,5</code> &rarr; <code>1,5,1</code></p>

</div>

## Solution(javascript)
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function swap(nums, i, j) {
        const t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }

    function reverse(nums, i, j) {
        while (i < j) {
            swap(nums, i, j);
            i++;
            j--;
        }
    }
    
    let left = -1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            left = i - 1;
            break;
        }
    }
 
    if (left == -1) {
        reverse(nums, 0, nums.length - 1);
        return;
    }
 
    let right = nums.length-1;
    for (let i = nums.length-1; i >= left+1; i--) {
        if (nums[i] > nums[left]) {
            right = i;
            break;
        }
    }
 
    swap(nums, left, right);
 
    reverse(nums, left + 1, nums.length - 1);
};
```