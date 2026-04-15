---
id: "coin-change"
title: "Coin Change"
lang: "javascript"
---

# Coin Change

<h2 id="problem-description">Problem Description</h2>

<p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p>

<p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p>

<p>You may assume that you have an infinite number of each kind of coin.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> coins = [1,2,5], amount = 11
<strong>Output:</strong> 3
<strong>Explanation:</strong> 11 = 5 + 5 + 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> coins = [2], amount = 3
<strong>Output:</strong> -1
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> coins = [1], amount = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= coins.length &lt;= 12</code></li>
	<li><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * refer to:
 * https://leetcode.com/problems/coin-change/solutions/778548/c-dp-solution-explained-100-time-100-spa-yjm8
 */
var coinChange = function(coins, amount) {
    const a = Array(amount + 1).fill(Number.MAX_VALUE);
    a[0] = 0;

    for (let i = 1; i <= amount; i++) {
        const okCoins = coins.filter(c => c<=i);
        for (let oc of okCoins) {
            if (a[i-oc] !== Number.MAX_VALUE) {
                a[i] = Math.min(a[i-oc]+1, a[i]);
            }
        }
    }

    if (a[amount] === Number.MAX_VALUE) a[amount] = -1;

    return a[amount];
};
```
