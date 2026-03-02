---
id: group-anagrams
title: Group Anagrams
sidebar_label: Group Anagrams
---
## Description
<div class="description">
<p>Given an array of strings, group anagrams together.</p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input:</strong> <code>[&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;]</code>,
<strong>Output:</strong>
[
  [&quot;ate&quot;,&quot;eat&quot;,&quot;tea&quot;],
  [&quot;nat&quot;,&quot;tan&quot;],
  [&quot;bat&quot;]
]</pre>

<p><strong>Note:</strong></p>

<ul>
	<li>All inputs will be in lowercase.</li>
	<li>The order of your output does not&nbsp;matter.</li>
</ul>

</div>

## Solution(javascript)
```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let str of strs){
        const s = sort(str);
        let l = map.get(s) || [];
        l.push(str);
        map.set(s, l);
    }
    return Array.from(map.values());
};

const sort = function(str) {
    return str
        .split("")
        .sort()
        .join("");
};
```