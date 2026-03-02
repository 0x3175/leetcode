---
layout: "layout.njk"
title: "Random Pick Index"
difficulty: "Migrated"
tags: 
  - problems
---

# Random Pick Index

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given an array of integers with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.</p>

<p><b>Note:</b><br />
The array size can be very large. Solution that uses too much extra space will not pass the judge.</p>

<p><b>Example:</b></p>

<pre>
int[] nums = new int[] {1,2,3,3,3};
Solution solution = new Solution(nums);

// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
solution.pick(3);

// pick(1) should return 0. Since in the array only nums[0] is equal to 1.
solution.pick(1);
</pre>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map  = new Map();
    nums.forEach((n, i) => {
        this.map.set(n, this.map.get(n) ? this.map.get(n).concat([i]) : [i]);
    });
    
    this.pick = (f) => {
        const idx = this.map.has(f) ? Math.floor(Math.random() * this.map.get(f).length) : -1;
        return idx === -1 ? -1 : this.map.get(f)[idx];
    };
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
```
