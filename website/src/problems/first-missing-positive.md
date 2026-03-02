---
layout: "layout.njk"
title: "First Missing Positive"
difficulty: ""
tags: 
  - problems
---

# First Missing Positive

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

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

<h2 id="solution">Solution (javascript)</h2>

```js
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
