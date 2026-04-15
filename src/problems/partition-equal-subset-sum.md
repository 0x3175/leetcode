---
id: "partition-equal-subset-sum"
title: "Partition Equal Subset Sum"
lang: "rust"
---

# Partition Equal Subset Sum

<h2 id="problem-description">Problem Description</h2>

<p>Given an integer array <code>nums</code>, return <code>true</code> <em>if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,11,5]
<strong>Output:</strong> true
<strong>Explanation:</strong> The array can be partitioned as [1, 5, 5] and [11].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,5]
<strong>Output:</strong> false
<strong>Explanation:</strong> The array cannot be partitioned into equal sum subsets.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 200</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>


<h2 id="solution">Solution (Rust)</h2>

```rust
// https://leetcode.com/problems/partition-equal-subset-sum/solutions/90592/01-knapsack-detailed-explanation-by-zhue-y5hc
impl Solution {
    pub fn can_partition(nums: Vec<i32>) -> bool {
        let sum: i32 = nums.iter().sum();
        if sum % 2 != 0 {
            return false;
        }
        let target = sum / 2;
        let mut dp = vec![false; (target + 1) as usize];
        dp[0] = true;
        for num in nums {
            for j in (num..=target).rev() {
                dp[j as usize] = dp[j as usize] || dp[(j - num) as usize];
            }
        }
        dp[target as usize]
    }
}

```
