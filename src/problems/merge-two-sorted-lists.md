---
id: merge-two-sorted-lists
title: Merge Two Sorted Lists
sidebar_label: Merge Two Sorted Lists
---
## Description
<div class="description">
<p>Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.</p>

<p><b>Example:</b>
<pre>
<b>Input:</b> 1->2->4, 1->3->4
<b>Output:</b> 1->1->2->3->4->4
</pre>
</p>
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let mergedList = new ListNode(0);
    let p = mergedList;
    
    while(l1 && l2) {
        if(l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if(l1) p.next = l1;
    if(l2) p.next = l2;
    
    return mergedList.next;
};
```