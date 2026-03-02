---
layout: "layout.njk"
title: "Palindrome Number"
difficulty: "Migrated"
tags: 
  - problems
---

# Palindrome Number

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Determine whether an integer is a palindrome. An integer&nbsp;is&nbsp;a&nbsp;palindrome when it&nbsp;reads the same backward as forward.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> 121
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
</pre>

<p><strong>Follow up:</strong></p>

<p>Coud you solve&nbsp;it without converting the integer to a string?</p>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
//     solution 1
//     let a = x.toString().split('');
    
//     return a.slice(0, Math.ceil(a.length/2)).join('') 
//         == a.slice(a.length - Math.ceil(a.length/2), a.length).reverse().join('');
    
    let str = x.toString();
    function isPal(s) {
        if([0, 1].includes(s.length))
            return true;
        if(s.slice(0,1) != s.slice(s.length-1, s.length))
            return false;
        return isPal(s.slice(1,s.length-1));
    }
    
    return isPal(str);
};
```
