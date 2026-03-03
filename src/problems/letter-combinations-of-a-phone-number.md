---
id: "letter-combinations-of-a-phone-number"
title: "Letter Combinations of a Phone Number"
lang: "javascript"
---

# Letter Combinations of a Phone Number

<h2 id="problem-description">Problem Description</h2>

<p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent. Return the answer in <strong>any order</strong>.</p>

<p>A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png" style="width: 300px; height: 243px;" />
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> digits = &quot;23&quot;
<strong>Output:</strong> [&quot;ad&quot;,&quot;ae&quot;,&quot;af&quot;,&quot;bd&quot;,&quot;be&quot;,&quot;bf&quot;,&quot;cd&quot;,&quot;ce&quot;,&quot;cf&quot;]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> digits = &quot;2&quot;
<strong>Output:</strong> [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= digits.length &lt;= 4</code></li>
	<li><code>digits[i]</code> is a digit in the range <code>[&#39;2&#39;, &#39;9&#39;]</code>.</li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
    const map = {
		"2": ["a", "b", "c"],
		"3": ["d", "e", "f"],
		"4": ["g", "h", "i"],
		"5": ["j", "k", "l"],
		"6": ["m", "n", "o"],
		"7": ["p", "q", "r", "s"],
		"8": ["t", "u", "v"],
		"9": ["w", "x", "y", "z"]
	};
    
    function appendLetter(pee, per) {
        let a = [];
        for(let i = 0; i < pee.length; i++){
            for(let j = 0; j < per.length; j++){
                a.push(pee[i] + per[j]);
            }    
        }
        return a;
    }
    
    function combLetter(arr, nums) {
        if(!nums) {
            return arr;
        }
        return combLetter(appendLetter(arr, map[nums[0]]), nums.slice(1));
    }
    
    if(!digits)
        return [];
    return combLetter(map[digits[0]], digits.slice(1));
};
```
