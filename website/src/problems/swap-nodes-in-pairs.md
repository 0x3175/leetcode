---
layout: "layout.njk"
title: "Swap Nodes in Pairs"
difficulty: ""
tags: 
  - problems
---

# Swap Nodes in Pairs

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a&nbsp;linked list, swap every two adjacent nodes and return its head.</p>

<p>You may <strong>not</strong> modify the values in the list&#39;s nodes, only nodes itself may be changed.</p>

<p>&nbsp;</p>

<p><strong>Example:</strong></p>

<pre>
Given <code>1-&gt;2-&gt;3-&gt;4</code>, you should return the list as <code>2-&gt;1-&gt;4-&gt;3</code>.
</pre>

</div>

<h2 id="solution">Solution (javascript)</h2>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) 
        return head;
    let r = head.next;
    head.next = r.next
    r.next = head;
    head.next = swapPairs(head.next);
    return r;
};
```
