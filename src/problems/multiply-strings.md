---
id: "multiply-strings"
title: "Multiply Strings"
lang: "javascript"
---

# Multiply Strings

<h2 id="problem-description">Problem Description</h2>

<p>Given two non-negative integers <code>num1</code> and <code>num2</code> represented as strings, return the product of <code>num1</code> and <code>num2</code>, also represented as a string.</p>

<p><strong>Note:</strong>&nbsp;You must not use any built-in BigInteger library or convert the inputs to integer directly.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> num1 = "2", num2 = "3"
<strong>Output:</strong> "6"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> num1 = "123", num2 = "456"
<strong>Output:</strong> "56088"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= num1.length, num2.length &lt;= 200</code></li>
	<li><code>num1</code> and <code>num2</code> consist of digits only.</li>
	<li>Both <code>num1</code> and <code>num2</code>&nbsp;do not contain any leading zero, except the number <code>0</code> itself.</li>
</ul>


<h2 id="solution">Solution (JavaScript)</h2>

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
