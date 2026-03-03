---
id: "range-addition-ii"
title: "Range Addition II"
lang: "golang"
---

# Range Addition II

<h2 id="problem-description">Problem Description</h2>

<p>You are given an <code>m x n</code> matrix <code>M</code> initialized with all <code>0</code>&#39;s and an array of operations <code>ops</code>, where <code>ops[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> means <code>M[x][y]</code> should be incremented by one for all <code>0 &lt;= x &lt; a<sub>i</sub></code> and <code>0 &lt;= y &lt; b<sub>i</sub></code>.</p>

<p>Count and return <em>the number of maximum integers in the matrix after performing all the operations</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/ex1.jpg" style="width: 750px; height: 176px;" />
<pre>
<strong>Input:</strong> m = 3, n = 3, ops = [[2,2],[3,3]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The maximum integer in M is 2, and there are four of it in M. So return 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> m = 3, n = 3, ops = []
<strong>Output:</strong> 9
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m, n &lt;= 4 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= ops.length &lt;= 10<sup>4</sup></code></li>
	<li><code>ops[i].length == 2</code></li>
	<li><code>1 &lt;= a<sub>i</sub> &lt;= m</code></li>
	<li><code>1 &lt;= b<sub>i</sub> &lt;= n</code></li>
</ul>


<h2 id="solution">Solution (Go)</h2>

```go
func maxCount(m int, n int, ops [][]int) int {
    if len(ops) == 0 {
        return m * n
    }
    minA, minB := math.MaxInt32, math.MaxInt32
    for _, op := range(ops) {
        if op[0] < minA {
            minA = op[0]
        }
        if op[1] < minB {
            minB = op[1]
        }
    }
    return minA * minB
}
```
