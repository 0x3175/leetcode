---
id: "spiral-matrix"
title: "Spiral Matrix"
lang: "rust"
---

# Spiral Matrix

<h2 id="problem-description">Problem Description</h2>

<p>Given an <code>m x n</code> <code>matrix</code>, return <em>all elements of the</em> <code>matrix</code> <em>in spiral order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg" style="width: 242px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> [1,2,3,6,9,8,7,4,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
<strong>Output:</strong> [1,2,3,4,8,12,11,10,9,5,6,7]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10</code></li>
	<li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></li>
</ul>


<h2 id="solution">Solution (Rust)</h2>

```rust
impl Solution {
    pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
        let (m, n) = (matrix.len(), matrix[0].len());
        let mut res = Vec::with_capacity(m * n);

        let (mut top, mut bottom) = (0, m - 1);
        let (mut left, mut right) = (0, n - 1);

        while top <= bottom && left <= right {
            for j in left..=right {
                res.push(matrix[top][j]);
            }
            top += 1;

            for i in top..=bottom {
                res.push(matrix[i][right]);
            }
            if right == 0 { break; }
            right -= 1;

            if top <= bottom {
                for j in (left..=right).rev() {
                    res.push(matrix[bottom][j]);
                }
                if bottom == 0 { break; }
                bottom -= 1;
            }

            if left <= right {
                for i in (top..=bottom).rev() {
                    res.push(matrix[i][left]);
                }
                left += 1;
            }
        }

        res
    }
}
```
