---
id: "reverse-nodes-in-k-group"
title: "Reverse Nodes in k-Group"
lang: "javascript"
---

# Reverse Nodes in k-Group

<h2 id="problem-description">Problem Description</h2>

<p>Given the <code>head</code> of a linked list, reverse the nodes of the list <code>k</code> at a time, and return <em>the modified list</em>.</p>

<p><code>k</code> is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of <code>k</code> then left-out nodes, in the end, should remain as it is.</p>

<p>You may not alter the values in the list&#39;s nodes, only nodes themselves may be changed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [2,1,4,3,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 3
<strong>Output:</strong> [3,2,1,4,5]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>n</code>.</li>
	<li><code>1 &lt;= k &lt;= n &lt;= 5000</code></li>
	<li><code>0 &lt;= Node.val &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow-up:</strong> Can you solve the problem in <code>O(1)</code> extra memory space?</p>


<h2 id="solution">Solution (JavaScript)</h2>

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
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
    const swapPairs = function(head) {
        if(!head || !head.next) 
            return head;
        let r = head.next;
        head.next = r.next
        r.next = head;
        head.next = swapPairs(head.next);
        return r;
    };
    
    if(k === 1) return head;
    if(k === 2) return swapPairs(head);
    
    function getLen(head, l) {
        if(!head) return l;
        return getLen(head.next, l+1);
    }
    
    function reverseGroup(h, k, f) {
        if(f === 0) return h;
        
        let l = h;
        let m = l.next;
        let r = m.next;
        for(let i = 0; i < k-2; i++) {
            m.next = l;
            l = m;
            m = r;
            r = r.next;
        }
        m.next = l;
        h.next = reverseGroup(r, k, f-1);
        return m;
    }
    
    return reverseGroup(head, k, Math.floor(getLen(head, 0)/k));
};
```
