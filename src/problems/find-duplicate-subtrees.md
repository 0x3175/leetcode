---
id: "find-duplicate-subtrees"
title: "Find Duplicate Subtrees"
lang: "golang"
---

# Find Duplicate Subtrees

<h2 id="problem-description">Problem Description</h2>

<p>Given the <code>root</code>&nbsp;of a binary tree, return all <strong>duplicate subtrees</strong>.</p>

<p>For each kind of duplicate subtrees, you only need to return the root node of any <b>one</b> of them.</p>

<p>Two trees are <strong>duplicate</strong> if they have the <strong>same structure</strong> with the <strong>same node values</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e1.jpg" style="width: 450px; height: 354px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,4,null,2,4,null,null,4]
<strong>Output:</strong> [[2,4],[4]]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e2.jpg" style="width: 321px; height: 201px;" />
<pre>
<strong>Input:</strong> root = [2,1,1]
<strong>Output:</strong> [[1]]
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/16/e33.jpg" style="width: 450px; height: 303px;" />
<pre>
<strong>Input:</strong> root = [2,2,2,3,null,3,null]
<strong>Output:</strong> [[2,3],[3]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of the nodes in the tree will be in the range <code>[1, 5000]</code></li>
	<li><code>-200 &lt;= Node.val &lt;= 200</code></li>
</ul>


<h2 id="solution">Solution (Go)</h2>

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findDuplicateSubtrees(root *TreeNode) []*TreeNode {
	dups := make(map[string][]*TreeNode)
	constructDupsMap(root, dups)
	var res []*TreeNode
	for _, l := range dups {
		if len(l) > 1 {
			res = append(res, l[0])
		}
	}
	return res
}

func constructDupsMap(root *TreeNode, dups map[string][]*TreeNode) string {
	if root == nil {
		return "#"
	}
	subtree := strconv.Itoa(root.Val)
	subtree += ";" + constructDupsMap(root.Left, dups) + ";" + constructDupsMap(root.Right, dups)
	addToDups(dups, subtree, root)
	return subtree
}

func addToDups(dups map[string][]*TreeNode, subtree string, root *TreeNode) {
	l, _ := dups[subtree]
	l = append(l, root)
	dups[subtree] = l
}
```
