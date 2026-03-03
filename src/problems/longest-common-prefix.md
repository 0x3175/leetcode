---
id: "longest-common-prefix"
title: "Longest Common Prefix"
lang: "javascript"
---

# Longest Common Prefix

<h2 id="problem-description">Problem Description</h2>

<p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>&quot;&quot;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
<strong>Output:</strong> &quot;fl&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lowercase English letters if it is non-empty.</li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

```js
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
