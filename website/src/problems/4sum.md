---
layout: "layout.njk"
title: "4Sum"
difficulty: ""
tags: 
  - problems
---

# 4Sum

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given an array <code>nums</code> of <em>n</em> integers and an integer <code>target</code>, are there elements <em>a</em>, <em>b</em>, <em>c</em>, and <em>d</em> in <code>nums</code> such that <em>a</em> + <em>b</em> + <em>c</em> + <em>d</em> = <code>target</code>? Find all unique quadruplets in the array which gives the sum of <code>target</code>.</p>

<p><strong>Note:</strong></p>

<p>The solution set must not contain duplicate quadruplets.</p>

<p><strong>Example:</strong></p>

<pre>
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
</pre>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var rtn = [];
    if (nums.length < 4) {
        return rtn;
    }
    
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    const res = new Set();
    
    for (var m = 0; m < nums.length - 3; m++) {
        for (var i = m + 1; i < nums.length - 2; i++) {
            for (var j = i + 1, k = nums.length - 1; j < k;) {
                if (nums[m] + nums[i] + nums[j] + nums[k] === target) {
                    const abcd = [nums[m], nums[i], nums[j], nums[k]];
                    res.add(abcd.sort().join(','));
                    j++;
                    k--;
                } else if (nums[m] + nums[i] + nums[j] + nums[k] > target) {
                    k--;
                } else {
                    j++;
                }
            }
        }
    }
    
    rtn = [...res].map(abcd => abcd.split(',').map(e => parseInt(e)));
    return rtn;
};
```
