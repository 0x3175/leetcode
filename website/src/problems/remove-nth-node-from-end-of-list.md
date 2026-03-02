---
layout: "layout.njk"
title: "Remove Nth Node From End of List"
difficulty: "Migrated"
tags: 
  - problems
---

# Remove Nth Node From End of List

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a linked list, remove the <em>n</em>-th node from the end of list and return its head.</p>

<p><strong>Example:</strong></p>

<pre>
Given linked list: <strong>1-&gt;2-&gt;3-&gt;4-&gt;5</strong>, and <strong><em>n</em> = 2</strong>.

After removing the second node from the end, the linked list becomes <strong>1-&gt;2-&gt;3-&gt;5</strong>.
</pre>

<p><strong>Note:</strong></p>

<p>Given <em>n</em> will always be valid.</p>

<p><strong>Follow up:</strong></p>

<p>Could you do this in one pass?</p>

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    function getNode(h, m) {
        var rst = h;
        while(m > 0) {
            rst = rst.next;
            m--;
        }
        return rst;
    }
    
    var l = head;
    var r = getNode(head, n);
    if (!r) return head.next;
    
    while(r.next) {
        r = r.next;
        l = l.next;
    }
    l.next = l.next.next;
    
    return head;
};
```
