---
layout: "layout.njk"
title: "Remove All Adjacent Duplicates In String"
difficulty: ""
tags: 
  - problems
---

# Remove All Adjacent Duplicates In String

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a string <code>S</code> of lowercase letters, a <em>duplicate removal</em> consists of choosing two adjacent and equal letters, and removing&nbsp;them.</p>

<p>We repeatedly make duplicate removals on S until we no longer can.</p>

<p>Return the final string after all such duplicate removals have been made.&nbsp; It is guaranteed the answer is unique.</p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input: </strong><span id="example-input-1-1">&quot;abbaca&quot;</span>
<strong>Output: </strong><span id="example-output-1">&quot;ca&quot;</span>
<strong>Explanation: </strong>
For example, in &quot;abbaca&quot; we could remove &quot;bb&quot; since the letters are adjacent and equal, and this is the only possible move.&nbsp; The result of this move is that the string is &quot;aaca&quot;, of which only &quot;aa&quot; is possible, so the final string is &quot;ca&quot;.
</pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li><code>1 &lt;= S.length &lt;= 20000</code></li>
	<li><code>S</code> consists only of English lowercase letters.</li>
</ol>
</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(stack[stack.length-1] === s[i]){
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.join('');
};
```
