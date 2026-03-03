---
id: longest-palindromic-substring
title: Longest Palindromic Substring
sidebar_label: Longest Palindromic Substring
---
## Description
<div class="description">
<p>Given a string <strong>s</strong>, find the longest palindromic substring in <strong>s</strong>. You may assume that the maximum length of <strong>s</strong> is 1000.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> &quot;babad&quot;
<strong>Output:</strong> &quot;bab&quot;
<strong>Note:</strong> &quot;aba&quot; is also a valid answer.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> &quot;cbbd&quot;
<strong>Output:</strong> &quot;bb&quot;
</pre>

</div>

## Solution(javascript)
```javascript
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