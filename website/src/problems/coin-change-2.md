---
layout: "layout.njk"
title: "Coin Change 2"
difficulty: "Migrated"
tags: 
  - problems
---

# Coin Change 2

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.</p>

<ul>
</ul>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre>
<b>Input:</b> amount = 5, coins = [1, 2, 5]
<b>Output:</b> 4
<b>Explanation:</b> there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
</pre>

<p><b>Example 2:</b></p>

<pre>
<b>Input:</b> amount = 3, coins = [2]
<b>Output:</b> 0
<b>Explanation:</b> the amount of 3 cannot be made up just with coins of 2.
</pre>

<p><b>Example 3:</b></p>

<pre>
<b>Input:</b> amount = 10, coins = [10] 
<b>Output:</b> 1
</pre>

<p>&nbsp;</p>

<p><b>Note:</b></p>

<p>You can assume that</p>

<ul>
	<li>0 &lt;= amount &lt;= 5000</li>
	<li>1 &lt;= coin &lt;= 5000</li>
	<li>the number of coins is less than 500</li>
	<li>the answer is guaranteed to fit into signed 32-bit integer</li>
</ul>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
// Algorithm explanation: https://youtu.be/jaNZ83Q3QGc

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const arr = Array(amount+1).fill(0);
    arr[0]=1;
    
    for(let coin of coins) {
        for(let i = 0; i <= amount; i++){
            const dif = i - coin;
            if(dif >= 0){
                arr[i] += arr[i-coin];
            }
        }
    }
    
    return arr[amount];
};
```
