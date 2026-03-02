---
id: merge-k-sorted-lists
title: Merge k Sorted Lists
sidebar_label: Merge k Sorted Lists
---
## Description
<div class="description">
<p>Merge <em>k</em> sorted linked lists and return it as one sorted list. Analyze and describe its complexity.</p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input:</strong>
[
&nbsp; 1-&gt;4-&gt;5,
&nbsp; 1-&gt;3-&gt;4,
&nbsp; 2-&gt;6
]
<strong>Output:</strong> 1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
</pre>

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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
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
    
    if(!lists.length) return null;
    if(lists.length === 1) return lists[0];
    lists.push(mergeTwoLists(lists[0], lists[1]));
    lists.splice(0, 2);
    return mergeKLists(lists);
};
```