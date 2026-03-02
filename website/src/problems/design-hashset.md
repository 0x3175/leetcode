---
layout: "layout.njk"
title: "Design HashSet"
difficulty: ""
tags: 
  - problems
---

# Design HashSet

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Design a HashSet&nbsp;without using any built-in hash table libraries.</p>

<p>To be specific, your design should include these functions:</p>

<ul>
	<li><code>add(value)</code>:&nbsp;Insert a value into the HashSet.&nbsp;</li>
	<li><code>contains(value)</code> : Return whether the value exists in the HashSet or not.</li>
	<li><code>remove(value)</code>: Remove a value in&nbsp;the HashSet. If the value does not exist in the HashSet, do nothing.</li>
</ul>

<p><br />
<strong>Example:</strong></p>

<pre>
MyHashSet hashSet = new MyHashSet();
hashSet.add(1); &nbsp; &nbsp; &nbsp; &nbsp; 
hashSet.add(2); &nbsp; &nbsp; &nbsp; &nbsp; 
hashSet.contains(1); &nbsp;&nbsp;&nbsp;// returns true
hashSet.contains(3); &nbsp;&nbsp;&nbsp;// returns false (not found)
hashSet.add(2); &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
hashSet.contains(2); &nbsp;&nbsp;&nbsp;// returns true
hashSet.remove(2); &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
hashSet.contains(2); &nbsp;&nbsp;&nbsp;// returns false (already removed)
</pre>

<p><br />
<strong>Note:</strong></p>

<ul>
	<li>All values will be in the range of <code>[0, 1000000]</code>.</li>
	<li>The number of operations will be in the range of&nbsp;<code>[1, 10000]</code>.</li>
	<li>Please do not use the built-in HashSet library.</li>
</ul>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.hashset = new Set();
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.hashset.add(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.hashset.delete(key);
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.hashset.has(key);
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
```
