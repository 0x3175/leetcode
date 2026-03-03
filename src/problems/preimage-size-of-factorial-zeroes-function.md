---
id: "preimage-size-of-factorial-zeroes-function"
title: "Preimage Size of Factorial Zeroes Function"
lang: "golang"
---

# Preimage Size of Factorial Zeroes Function

<h2 id="problem-description">Problem Description</h2>

<p>Let <code>f(x)</code> be the number of zeroes at the end of <code>x!</code>. Recall that <code>x! = 1 * 2 * 3 * ... * x</code> and by convention, <code>0! = 1</code>.</p>

<ul>
	<li>For example, <code>f(3) = 0</code> because <code>3! = 6</code> has no zeroes at the end, while <code>f(11) = 2</code> because <code>11! = 39916800</code> has two zeroes at the end.</li>
</ul>

<p>Given an integer <code>k</code>, return the number of non-negative integers <code>x</code> have the property that <code>f(x) = k</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> k = 0
<strong>Output:</strong> 5
<strong>Explanation:</strong> 0!, 1!, 2!, 3!, and 4! end with k = 0 zeroes.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> k = 5
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no x such that x! ends in k = 5 zeroes.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> k = 3
<strong>Output:</strong> 5
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>


<h2 id="solution">Solution (Go)</h2>

```go
// https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/discuss/117821/Four-binary-search-solutions-based-on-different-ideas
func preimageSizeFZF(k int) int {
	return binarySearch(k) - binarySearch(k-1)
}

func binarySearch(K int) int {
	l := 0
	r := 5 * (K + 1)

	for l <= r {
		m := l + (r-l)/2
		k := numOfTrailingZeros(m)

		if k <= K {
			l = m + 1
		} else {
			r = m - 1
		}
	}

	return r
}

func numOfTrailingZeros(x int) int {
	res := 0

	for ; x > 0; x /= 5 {
		res += x / 5
	}

	return res
}
```
