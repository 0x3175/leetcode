---
layout: "layout.njk"
title: "ZigZag Conversion"
difficulty: ""
tags: 
  - problems
---

# ZigZag Conversion

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>The string <code>&quot;PAYPALISHIRING&quot;</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</p>

<pre>
P   A   H   N
A P L S I I G
Y   I   R
</pre>

<p>And then read line by line: <code>&quot;PAHNAPLSIIGYIR&quot;</code></p>

<p>Write the code that will take a string and make this conversion given a number of rows:</p>

<pre>
string convert(string s, int numRows);</pre>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 3
<strong>Output:</strong> &quot;PAHNAPLSIIGYIR&quot;
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows =&nbsp;4
<strong>Output:</strong>&nbsp;&quot;PINALSIGYAHRPI&quot;
<strong>Explanation:</strong>

P     I    N
A   L S  I G
Y A   H R
P     I</pre>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    
    var getChar = function(str, idx){
        if(idx < 0 || idx >= str.length) return '';
        return str.charAt(idx);
    }
    
    var out = '';
    var len = s.length;
    for(var i = 0; i < numRows; i++){
        var pos = 0;
        while(pos + 2 - numRows <= len){
            if(i == 0 || i == numRows - 1){
                out += getChar(s, pos + i);
            } else {
                out += getChar(s, pos - i) + getChar(s, pos + i);
            }
            pos += 2 * numRows - 2;
        }
    }
    
    return out;
};
```
