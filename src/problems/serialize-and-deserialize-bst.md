---
id: "serialize-and-deserialize-bst"
title: "Serialize and Deserialize BST"
lang: "golang"
---

# Serialize and Deserialize BST

<h2 id="problem-description">Problem Description</h2>

<p>Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.</p>

<p>Design an algorithm to serialize and deserialize a <b>binary search tree</b>. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.</p>

<p><b>The encoded string should be as compact as possible.</b></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> root = [2,1,3]
<strong>Output:</strong> [2,1,3]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> root = []
<strong>Output:</strong> []
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
	<li>The input tree is <strong>guaranteed</strong> to be a binary search tree.</li>
</ul>


<h2 id="solution">Solution (Go)</h2>

```go
type Codec struct {
	cur *list.Element
}

func Constructor() Codec {
	return Codec{}
}

// Serializes a tree to a single string.
func (this *Codec) serialize(root *TreeNode) string {
	if root == nil {
		return ""
	}
	return fmt.Sprintf("%d,%s%s", root.Val, this.serialize(root.Left), this.serialize(root.Right))
}

// Deserializes your encoded data to tree.
func (this *Codec) deserialize(data string) *TreeNode {
	arr := strings.Split(data, ",")
	l := list.New()
	for _, v := range arr {
		if v != "" {
			l.PushBack(v)
		}
	}
	this.cur = l.Front()
	return this.deserializeList(0, math.MaxUint16)
}

// Deserializes your list to tree.
func (this *Codec) deserializeList(lower, upper int) *TreeNode {
	if this.cur == nil {
		return nil
	}
	valInt, _ := strconv.Atoi(this.cur.Value.(string))
	if valInt < lower || valInt > upper {
		return nil
	}
	node := &TreeNode{valInt, nil, nil}
	this.cur = this.cur.Next()
	node.Left = this.deserializeList(lower, valInt)
	node.Right = this.deserializeList(valInt, upper)
	return node
}
```
