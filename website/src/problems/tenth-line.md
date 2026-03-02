---
layout: "layout.njk"
title: "Tenth Line"
difficulty: ""
tags: 
  - problems
---

# Tenth Line

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a text file&nbsp;<code>file.txt</code>, print&nbsp;just the 10th line of the&nbsp;file.</p>

<p><strong>Example:</strong></p>

<p>Assume that <code>file.txt</code> has the following content:</p>

<pre>
Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10
</pre>

<p>Your script should output the tenth line, which is:</p>

<pre>
Line 10
</pre>

<div class="spoilers"><b>Note:</b><br />
1. If the file contains less than 10 lines, what should you output?<br />
2. There&#39;s at least three different solutions. Try to explore all possibilities.</div>

</div>

<h2 id="solution">Solution (bash)</h2>

```bash
# Read from the file file.txt and output the tenth line to stdout.
tail -n+10 file.txt | head -1
```
