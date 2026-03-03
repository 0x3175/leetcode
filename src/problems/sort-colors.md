---
id: "sort-colors"
title: "Sort Colors"
lang: "golang"
---

# Sort Colors

<h2 id="problem-description">Problem Description</h2>

<p>Given an array <code>nums</code> with <code>n</code> objects colored red, white, or blue, sort them <strong><a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> </strong>so that objects of the same color are adjacent, with the colors in the order red, white, and blue.</p>

<p>We will use the integers <code>0</code>, <code>1</code>, and <code>2</code> to represent the color red, white, and blue, respectively.</p>

<p>You must solve this problem without using the library&#39;s sort function.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,0,2,1,1,0]
<strong>Output:</strong> [0,0,1,1,2,2]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,0,1]
<strong>Output:</strong> [0,1,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 300</code></li>
	<li><code>nums[i]</code> is either <code>0</code>, <code>1</code>, or <code>2</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong>&nbsp;Could you come up with a one-pass algorithm using only&nbsp;constant extra space?</p>


<h2 id="solution">Solution (Go)</h2>

```go
func sortColors(nums []int) {
	var red, white int
	blue := len(nums) - 1
	for white <= blue {
		if nums[white] == 0 {
			nums[red], nums[white] = nums[white], nums[red]
			red += 1
			white += 1
		} else if nums[white] == 1 {
			white += 1
		} else {
			nums[blue], nums[white] = nums[white], nums[blue]
			blue -= 1
		}
	}
}
```
