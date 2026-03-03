---
id: "climbing-stairs"
title: "Climbing Stairs"
lang: "javascript"
---

# Climbing Stairs

<h2 id="problem-description">Problem Description</h2>

<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>

<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 45</code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // https://leetcode.com/problems/climbing-stairs/solutions/25299/basically-it-s-a-fibonacci/comments/230554
    if (n<=2){
        return n;
    }
    let twoStepBefore = 1; // when n = 1
    let oneStepBefore = 2; // when n = 2
    let curStep = 0;
    for(let i = 3; i <= n; i++){
        curStep = twoStepBefore + oneStepBefore;
        twoStepBefore = oneStepBefore;
        oneStepBefore = curStep;
    }
    return curStep;
};
```
