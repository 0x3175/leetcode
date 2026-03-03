---
id: "count-and-say"
title: "Count and Say"
lang: "javascript"
---

# Count and Say

<h2 id="problem-description">Problem Description</h2>

<p>The <strong>count-and-say</strong> sequence is a sequence of digit strings defined by the recursive formula:</p>

<ul>
	<li><code>countAndSay(1) = &quot;1&quot;</code></li>
	<li><code>countAndSay(n)</code> is the run-length encoding of <code>countAndSay(n - 1)</code>.</li>
</ul>

<p><a href="http://en.wikipedia.org/wiki/Run-length_encoding" target="_blank">Run-length encoding</a> (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string <code>&quot;3322251&quot;</code> we replace <code>&quot;33&quot;</code> with <code>&quot;23&quot;</code>, replace <code>&quot;222&quot;</code> with <code>&quot;32&quot;</code>, replace <code>&quot;5&quot;</code> with <code>&quot;15&quot;</code> and replace <code>&quot;1&quot;</code> with <code>&quot;11&quot;</code>. Thus the compressed string becomes <code>&quot;23321511&quot;</code>.</p>

<p>Given a positive integer <code>n</code>, return <em>the </em><code>n<sup>th</sup></code><em> element of the <strong>count-and-say</strong> sequence</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 4</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;1211&quot;</span></p>

<p><strong>Explanation:</strong></p>

<pre>
countAndSay(1) = &quot;1&quot;
countAndSay(2) = RLE of &quot;1&quot; = &quot;11&quot;
countAndSay(3) = RLE of &quot;11&quot; = &quot;21&quot;
countAndSay(4) = RLE of &quot;21&quot; = &quot;1211&quot;
</pre>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;1&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>This is the base case.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 30</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it iteratively?

<h2 id="solution">Solution (JavaScript)</h2>

```js
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
