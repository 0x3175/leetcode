---
layout: "layout.njk"
title: "Letter Combinations of a Phone Number"
difficulty: "Migrated"
tags: 
  - problems
---

# Letter Combinations of a Phone Number

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent.</p>

<p>A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p>

<p><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png" /></p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input: </strong>&quot;23&quot;
<strong>Output:</strong> [&quot;ad&quot;, &quot;ae&quot;, &quot;af&quot;, &quot;bd&quot;, &quot;be&quot;, &quot;bf&quot;, &quot;cd&quot;, &quot;ce&quot;, &quot;cf&quot;].
</pre>

<p><strong>Note:</strong></p>

<p>Although the above answer is in lexicographical order, your answer could be in any order you want.</p>

</div>

<h2 id="solution">Solution (javascript)</h2>

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
