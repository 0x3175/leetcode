---
id: "add-binary"
title: "Add Binary"
lang: "golang"
---

# Add Binary

<h2 id="problem-description">Problem Description</h2>

<p>Given two binary strings <code>a</code> and <code>b</code>, return <em>their sum as a binary string</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> a = "11", b = "1"
<strong>Output:</strong> "100"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> a = "1010", b = "1011"
<strong>Output:</strong> "10101"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= a.length, b.length &lt;= 10<sup>4</sup></code></li>
	<li><code>a</code> and <code>b</code> consist&nbsp;only of <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code> characters.</li>
	<li>Each string does not contain leading zeros except for the zero itself.</li>
</ul>


<h2 id="solution">Solution (Go)</h2>

```go
func addBinary(a string, b string) string {
    maxLen := len(a)
	if len(b) > maxLen {
		maxLen = len(b)
		a = fmt.Sprintf("%0*s", maxLen, a)
	} else {
		b = fmt.Sprintf("%0*s", maxLen, b)
	}
    
	c := make([]byte, maxLen+1)
    carry := 0
	for i := maxLen - 1; i >= 0; i-- {
		if a[i] == '1' && b[i] == '1' {
			if carry == 1 {
				c[i+1] = '1'
			} else {
				c[i+1] = '0'
				carry = 1
			}
		} else if a[i] == '0' && b[i] == '0' {
			if carry == 1 {
				c[i+1] = '1'
				carry = 0
			} else {
				c[i+1] = '0'
			}
		} else {
			if carry == 1 {
				c[i+1] = '0'
			} else {
				c[i+1] = '1'
			}
		}
	}

	if carry == 1 {
		c[0] = '1'
	} else {
		c = c[1:]
	}
	return string(c)
}
```
