---
id: longest-common-prefix
title: Longest Common Prefix
sidebar_label: Longest Common Prefix
---
## Description
<div class="description">
<p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>&quot;&quot;</code>.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input: </strong>[&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
<strong>Output:</strong> &quot;fl&quot;
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input: </strong>[&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p><strong>Note:</strong></p>

<p>All given inputs are in lowercase letters <code>a-z</code>.</p>

</div>

## Solution(javascript)
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    function cmnPrefix(a, b){
        let i = 0;
        let p = '';
        while (i < a.length && i < b.length){
            if(a[i] === b[i]) {
                p += a[i];
                i++;
            } else {
                break;
            }
        }
        return p;
    }
    
    function findCmnPrefix(strArr, prefix){
        if(!strArr.length || !prefix.length)
            return prefix;
        return findCmnPrefix(strArr.splice(1, strArr.length), cmnPrefix(prefix, strArr[0]));
    }
    
    if(!strs || !strs.length) return '';
    return findCmnPrefix(strs.splice(1, strs.length), strs[0]);
};
```