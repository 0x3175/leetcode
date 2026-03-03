---
id: substring-with-concatenation-of-all-words
title: Substring with Concatenation of All Words
sidebar_label: Substring with Concatenation of All Words
---
## Description
<div class="description">
<p>You are given a string, <strong>s</strong>, and a list of words, <strong>words</strong>, that are all of the same length. Find all starting indices of substring(s) in <strong>s</strong> that is a concatenation of each word in <strong>words</strong> exactly once and without any intervening characters.</p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:
  s =</strong> &quot;barfoothefoobarman&quot;,
<strong>  words = </strong>[&quot;foo&quot;,&quot;bar&quot;]
<strong>Output:</strong> <code>[0,9]</code>
<strong>Explanation:</strong> Substrings starting at index 0 and 9 are &quot;barfoo&quot; and &quot;foobar&quot; respectively.
The output order does not matter, returning [9,0] is fine too.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:
  s =</strong> &quot;wordgoodgoodgoodbestword&quot;,
<strong>  words = </strong>[&quot;word&quot;,&quot;good&quot;,&quot;best&quot;,&quot;word&quot;]
<strong>Output:</strong> <code>[]</code>
</pre>

</div>

## Solution(javascript)
```javascript
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if(!words.length) return [];
    
    const wordLen = words[0].length;
    const arrLen = words.reduce((acc,element) => acc + element.length, 0);
    const re = new RegExp('(.{' + wordLen + '})');
    words = words.sort();
    
    function equalArr(arr1, arr2) {
        for(let j = 0; j < arr1.length; j++){
            if(arr1[j] != arr2[j]) return false;
        }
        return true;
    }
    
    let rst = [];
    for(let i = 0; i <= s.length - arrLen; i++) {
        const splitArr = s.slice(i, i+arrLen).split(re).filter(O=>O).sort();
        if(equalArr(words, splitArr)) rst.push(i);
    }
    
    return rst;
};
```