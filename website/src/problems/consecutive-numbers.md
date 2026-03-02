---
layout: "layout.njk"
title: "Consecutive Numbers"
difficulty: ""
tags: 
  - problems
---

# Consecutive Numbers

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Write a SQL query to find all numbers that appear at least three times consecutively.</p>

<pre>
+----+-----+
| Id | Num |
+----+-----+
| 1  |  1  |
| 2  |  1  |
| 3  |  1  |
| 4  |  2  |
| 5  |  1  |
| 6  |  2  |
| 7  |  2  |
+----+-----+
</pre>

<p>For example, given the above <code>Logs</code> table, <code>1</code> is the only number that appears consecutively for at least three times.</p>

<pre>
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
</pre>

</div>

<h2 id="solution">Solution (mysql)</h2>

```mysql
# Write your MySQL query statement below
SELECT DISTINCT
    l1.Num AS ConsecutiveNums
FROM
    Logs l1,
    Logs l2,
    Logs l3
WHERE
    l1.Id = l2.Id - 1
    AND l2.Id = l3.Id - 1
    AND l1.Num = l2.Num
    AND l2.Num = l3.Num
;
```
