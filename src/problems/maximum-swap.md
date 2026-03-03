---
id: "maximum-swap"
title: "Maximum Swap"
lang: "golang"
---

# Maximum Swap

<h2 id="problem-description">Problem Description</h2>

<p>You are given an integer <code>num</code>. You can swap two digits at most once to get the maximum valued number.</p>

<p>Return <em>the maximum valued number you can get</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 2736
<strong>Output:</strong> 7236
<strong>Explanation:</strong> Swap the number 2 and the number 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 9973
<strong>Output:</strong> 9973
<strong>Explanation:</strong> No swap.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= num &lt;= 10<sup>8</sup></code></li>
</ul>


<h2 id="solution">Solution (Go)</h2>

```go
func maximumSwap(num int) int {
	l := len(fmt.Sprintf("%d", num))
	numArr := make([]int, l)
	for i := 0; i < l; i++ {
		numArr[i] = num % 10
		num /= 10
	}

	swapIdx := make([]int, 2)
	max, maxIdx := numArr[0], 0
	for i := 1; i < l; i++ {
		if max < numArr[i] {
			max, maxIdx = numArr[i], i
		} else if max > numArr[i] {
			swapIdx[0], swapIdx[1] = maxIdx, i
		}
	}
	numArr[swapIdx[0]], numArr[swapIdx[1]] = numArr[swapIdx[1]], numArr[swapIdx[0]]

	for i := l - 1; i >= 0; i-- {
		num *= 10
		num += numArr[i]
	}
	return num
}

```
