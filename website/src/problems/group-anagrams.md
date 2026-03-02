---
layout: "layout.njk"
title: "Group Anagrams"
difficulty: ""
tags: 
  - problems
---

# Group Anagrams

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

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

<h2 id="solution">Solution (javascript)</h2>

```js
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
