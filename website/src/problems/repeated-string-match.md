---
layout: "layout.njk"
title: "Repeated String Match"
difficulty: "Migrated"
tags: 
  - problems
---

# Repeated String Match

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.</p>

<p>For example, with A = &quot;abcd&quot; and B = &quot;cdabcdab&quot;.</p>

<p>Return 3, because by repeating A three times (&ldquo;abcdabcdabcd&rdquo;), B is a substring of it; and B is not a substring of A repeated two times (&quot;abcdabcd&quot;).</p>

<p><b>Note:</b><br />
The length of <code>A</code> and <code>B</code> will be between 1 and 10000.</p>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let num = 1, s = A;
    while(s.length < B.length){
            s += A;
            num++;
    }
    
    if(s.includes(B)) return num;
    if((s+A).includes(B)) return num+1;
    return -1;
};
```
