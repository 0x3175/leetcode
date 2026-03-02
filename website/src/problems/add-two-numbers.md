---
id: add-two-numbers
title: Add Two Numbers
sidebar_label: Add Two Numbers
---
## Description
<div class="description">
<p>You are given two <b>non-empty</b> linked lists representing two non-negative integers. The digits are stored in <b>reverse order</b> and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p><b>Example:</b></p>

<pre>
<b>Input:</b> (2 -&gt; 4 -&gt; 3) + (5 -&gt; 6 -&gt; 4)
<b>Output:</b> 7 -&gt; 0 -&gt; 8
<b>Explanation:</b> 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0);
    var tail = head;
    var carryover = 0;
    
    while(l1 != null || l2 != null){
        var sum = (l1 == null ? 0 : l1.val) 
                  + (l2 == null ? 0 : l2.val) 
                  + carryover;
        carryover = Math.floor(sum / 10);
        var nextNode = new ListNode(sum % 10);
        tail.next = nextNode;
        tail = tail.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    if(carryover > 0){
        var nextNode = new ListNode(carryover);
        tail.next = nextNode;
    }
    
    return head.next;
};
```