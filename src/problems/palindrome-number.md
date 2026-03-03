---
id: "palindrome-number"
title: "Palindrome Number"
lang: "javascript"
---

# Palindrome Number

<h2 id="problem-description">Problem Description</h2>

<p>Given an integer <code>x</code>, return <code>true</code><em> if </em><code>x</code><em> is a </em><span data-keyword="palindrome-integer"><em><strong>palindrome</strong></em></span><em>, and </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 121
<strong>Output:</strong> true
<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> x = -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> x = 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it without converting the integer to a string?

<h2 id="solution">Solution (JavaScript)</h2>

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
