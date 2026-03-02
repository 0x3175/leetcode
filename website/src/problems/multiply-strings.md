---
layout: "layout.njk"
title: "Multiply Strings"
difficulty: ""
tags: 
  - problems
---

# Multiply Strings

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given two non-negative integers <code>num1</code> and <code>num2</code> represented as strings, return the product of <code>num1</code> and <code>num2</code>, also represented as a string.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> num1 = &quot;2&quot;, num2 = &quot;3&quot;
<strong>Output:</strong> &quot;6&quot;</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> num1 = &quot;123&quot;, num2 = &quot;456&quot;
<strong>Output:</strong> &quot;56088&quot;
</pre>

<p><strong>Note:</strong></p>

<ol>
	<li>The length of both <code>num1</code> and <code>num2</code> is &lt; 110.</li>
	<li>Both <code>num1</code> and <code>num2</code> contain&nbsp;only digits <code>0-9</code>.</li>
	<li>Both <code>num1</code> and <code>num2</code>&nbsp;do not contain any leading zero, except the number 0 itself.</li>
	<li>You <strong>must not use any built-in BigInteger library</strong> or <strong>convert the inputs to integer</strong> directly.</li>
</ol>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let a = [];
    let mul, l, r, sum;
    
    for(let i = num1.length-1; i >= 0; i--){
        for(let j = num2.length-1; j >= 0; j--){
            mul = Number(num1.charAt(i)) * Number(num2.charAt(j));
            sum  = a[i+j+1] ? a[i+j+1] + mul : mul;
            l = Math.floor(sum/10);
            r = sum%10;
            
            a[i+j+1] = r;
            
            if(a[i+j]){
                a[i+j] = a[i+j] + l;
            } else {
                a[i+j] = l;
            }
        }    
    }
    
    let s = 0;
    while(s < a.length && !a[s]){
        s++;
    }
    
    return a.slice(s).join('') || '0';
};
```
