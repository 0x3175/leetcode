---
id: count-and-say
title: Count and Say
sidebar_label: Count and Say
---
## Description
<div class="description">
<p>The count-and-say sequence is the sequence of integers with the first five terms as following:</p>

<pre>
1.     1
2.     11
3.     21
4.     1211
5.     111221
</pre>

<p><code>1</code> is read off as <code>&quot;one 1&quot;</code> or <code>11</code>.<br />
<code>11</code> is read off as <code>&quot;two 1s&quot;</code> or <code>21</code>.<br />
<code>21</code> is read off as <code>&quot;one 2</code>, then <code>one 1&quot;</code> or <code>1211</code>.</p>

<p>Given an integer <i>n</i>&nbsp;where 1 &le; <em>n</em> &le; 30, generate the <i>n</i><sup>th</sup> term of the count-and-say sequence. You can do so recursively, in other words from the previous member&nbsp;read off the digits, counting the number of digits in groups of the same digit.</p>

<p>Note: Each term of the sequence of integers will be represented as a string.</p>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre>
<b>Input:</b> 1
<b>Output:</b> &quot;1&quot;
<b>Explanation:</b> This is the base case.
</pre>

<p><b>Example 2:</b></p>

<pre>
<b>Input:</b> 4
<b>Output:</b> &quot;1211&quot;
<b>Explanation:</b> For n = 3 the term was &quot;21&quot; in which we have two groups &quot;2&quot; and &quot;1&quot;, &quot;2&quot; can be read as &quot;12&quot; which means frequency = 1 and value = 2, the same way &quot;1&quot; is read as &quot;11&quot;, so the answer is the concatenation of &quot;12&quot; and &quot;11&quot; which is &quot;1211&quot;.
</pre>

</div>

## Solution(javascript)
```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function next(si, n){
        if(n === 1) {
            return si;
        }
        
        let so = '';
        let ar = [];
        let id = 0;
        let mp = new Map();
        let lc = '0';
        
        for(let i = 0; i < si.length; i++){
            const ch = si.charAt(i);
            if(ch != lc){
                ar.push(id);
                mp.set(id, new Map([[ch, {val: 1}]]));
                id += 1;
            } else {
                mp.get(id-1).get(ch).val++;
            }
            lc = ch;
        }
        
        for(let i = 0; i < ar.length; i++){
            mp.get(ar[i]).forEach(function(v, k){
                so += (v.val + k);
            });
        }
        
        return next(so, n-1);    
    }
    return next('1', n);
};
```