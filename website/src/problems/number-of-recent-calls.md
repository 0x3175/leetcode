---
layout: "layout.njk"
title: "Number of Recent Calls"
difficulty: ""
tags: 
  - problems
---

# Number of Recent Calls

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Write a class <code>RecentCounter</code> to count recent requests.</p>

<p>It has only one method:&nbsp;<code>ping(int t)</code>, where t represents some time in milliseconds.</p>

<p>Return the number of <code>ping</code>s that have been made from 3000 milliseconds ago until now.</p>

<p>Any ping with time in <code>[t - 3000, t]</code> will count, including the current ping.</p>

<p>It is guaranteed that every call to <code>ping</code> uses a strictly larger value of&nbsp;<code>t</code> than before.</p>

<p>&nbsp;</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input: </strong>inputs = <span id="example-input-1-1">[&quot;RecentCounter&quot;,&quot;ping&quot;,&quot;ping&quot;,&quot;ping&quot;,&quot;ping&quot;]</span>, inputs = <span id="example-input-1-2">[[],[1],[100],[3001],[3002]]</span>
<strong>Output: </strong><span id="example-output-1">[null,1,2,3,3]</span></pre>

<p>&nbsp;</p>

<p><strong>Note:</strong></p>

<ol>
	<li>Each test case will have at most <code>10000</code> calls to <code>ping</code>.</li>
	<li>Each test case will call&nbsp;<code>ping</code> with strictly increasing values of <code>t</code>.</li>
	<li>Each call to ping will have <code>1 &lt;= t &lt;= 10^9</code>.</li>
</ol>

<div>
<p>&nbsp;</p>
</div>
</div>

<h2 id="solution">Solution (javascript)</h2>

```js

var RecentCounter = function() {
    this.head = this.tail = null;
    this.qt = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    if(!this.head){
        this.head = this.tail = {t, next: null};
        this.qt = 1;
    } else {
        this.tail.next = {t, next: null};
        this.tail = this.tail.next;
        this.qt += 1;
        
        while(t - this.head.t > 3000){
            this.head = this.head.next;
            this.qt -= 1;
        }
    }
    return this.qt;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```
