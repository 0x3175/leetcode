---
id: "longest-palindromic-substring"
title: "Longest Palindromic Substring"
lang: "javascript"
---

# Longest Palindromic Substring

<h2 id="problem-description">Problem Description</h2>

<p>Given a string <code>s</code>, return <em>the longest</em> <span data-keyword="palindromic-string"><em>palindromic</em></span> <span data-keyword="substring-nonempty"><em>substring</em></span> in <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;babad&quot;
<strong>Output:</strong> &quot;bab&quot;
<strong>Explanation:</strong> &quot;aba&quot; is also a valid answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cbbd&quot;
<strong>Output:</strong> &quot;bb&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consist of only digits and English letters.</li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length;
    var pal = "";
    
    var offset = 1;
    for(var i = 0; i < len; i++){
        if(i < len - 1 && s.charAt(i) == s.charAt(i+1)){
            while(i-offset >= 0 && i+1+offset < len 
                  && s.charAt(i-offset) ==  s.charAt(i+1+offset)){
                offset ++;
            }
            var palEven = s.substring(i+1-offset, i+1+offset);
            pal = pal.length >= palEven.length ? pal : palEven;
            offset = 1;
        }
        
        while(i-offset >= 0 && i+offset < len 
              && s.charAt(i-offset) ==  s.charAt(i+offset)){
            offset ++;
        }
        var palOdd = s.substring(i+1-offset, i+offset);
        pal = pal.length >= palOdd.length ? pal : palOdd;
        offset = 1;
    }
    
    return pal;
};
```
