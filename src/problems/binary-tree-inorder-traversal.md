---
id: binary-tree-inorder-traversal
title: Binary Tree Inorder Traversal
sidebar_label: Binary Tree Inorder Traversal
---
## Description
<div class="description">
<p>Given a binary tree, return the <em>inorder</em> traversal of its nodes&#39; values.</p>

<p><strong>Example:</strong></p>

<pre>
<strong>Input:</strong> [1,null,2,3]
   1
    \
     2
    /
   3

<strong>Output:</strong> [1,3,2]</pre>

<p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p>

</div>

## Solution(javascript)
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    function traverse(node, rst) {
        if(node.left) {
            traverse(node.left, rst);
        }
        rst.push(node.val);
        if(node.right) {
            traverse(node.right, rst);
        }
    }
    
    const rst = [];
    if(!root) {
        return rst;
    } else {
        traverse(root, rst);
        return rst;
    }
};
```