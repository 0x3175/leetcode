---
id: "palindromic-substrings"
title: "Palindromic Substrings"
lang: "golang"
---

# Palindromic Substrings

<h2 id="problem-description">Problem Description</h2>

<p>Given a string <code>s</code>, return <em>the number of <strong>palindromic substrings</strong> in it</em>.</p>

<p>A string is a <strong>palindrome</strong> when it reads the same backward as forward.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within the string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abc&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> Three palindromic strings: &quot;a&quot;, &quot;b&quot;, &quot;c&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaa&quot;
<strong>Output:</strong> 6
<strong>Explanation:</strong> Six palindromic strings: &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;aa&quot;, &quot;aa&quot;, &quot;aaa&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


<h2 id="solution">Solution (Go)</h2>

```go
func countSubstrings(s string) int {
	var count int
	for i := 0; i < len(s); i++ {
		var distance int
		for i-distance >= 0 && i+distance < len(s) && s[i-distance] == s[i+distance] {
			count++
			distance++
		}
		distance = 0
		for i-distance >= 0 && i+1+distance < len(s) && s[i-distance] == s[i+1+distance] {
			count++
			distance++
		}
	}
	return count
}
```
