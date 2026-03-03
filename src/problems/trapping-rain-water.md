---
id: trapping-rain-water
title: Trapping Rain Water
sidebar_label: Trapping Rain Water
---
## Description
<div class="description">
<p>Given <em>n</em> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.</p>

<p><img src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png" style="width: 412px; height: 161px;" /><br />
<small>The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. <strong>Thanks Marcos</strong> for contributing this image!</small></p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input:</strong> [0,1,0,2,1,0,1,3,2,1,2,1]
<strong>Output:</strong> 6</pre>

</div>

## Solution(javascript)
```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0;
    let trap = 0;
    
    while(left <= right){
        if(height[left] <= height[right]){
            if(height[left] < maxLeft){
                trap += maxLeft - height[left];
            } else {
                maxLeft = height[left];
            }
            left ++;
        } else {
            if(height[right] < maxRight){
                trap += maxRight - height[right];
            } else {
                maxRight = height[right];
            }
            right --;
        }
    }
    
    return trap;
};
```