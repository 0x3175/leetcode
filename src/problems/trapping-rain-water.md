---
id: "trapping-rain-water"
title: "Trapping Rain Water"
lang: "javascript"
---

# Trapping Rain Water

<h2 id="problem-description">Problem Description</h2>

<p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png" style="width: 412px; height: 161px;" />
<pre>
<strong>Input:</strong> height = [0,1,0,2,1,0,1,3,2,1,2,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> height = [4,2,0,3,2,5]
<strong>Output:</strong> 9
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == height.length</code></li>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
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
