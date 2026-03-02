---
id: reverse-nodes-in-k-group
title: Reverse Nodes in k-Group
sidebar_label: Reverse Nodes in k-Group
---
## Description
<div class="description">
<p>Given a linked list, reverse the nodes of a linked list <em>k</em> at a time and return its modified list.</p>

<p><em>k</em> is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of <em>k</em> then left-out nodes in the end should remain as it is.</p>

<ul>
</ul>

<p><strong>Example:</strong></p>

<p>Given this linked list: <code>1-&gt;2-&gt;3-&gt;4-&gt;5</code></p>

<p>For <em>k</em> = 2, you should return: <code>2-&gt;1-&gt;4-&gt;3-&gt;5</code></p>

<p>For <em>k</em> = 3, you should return: <code>3-&gt;2-&gt;1-&gt;4-&gt;5</code></p>

<p><strong>Note:</strong></p>

<ul>
	<li>Only constant extra memory is allowed.</li>
	<li>You may not alter the values in the list&#39;s nodes, only nodes itself may be changed.</li>
</ul>

</div>

## Solution(javascript)
```javascript
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