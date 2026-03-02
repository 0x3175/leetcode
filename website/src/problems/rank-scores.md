---
layout: "layout.njk"
title: "Rank Scores"
difficulty: ""
tags: 
  - problems
---

# Rank Scores

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Write a SQL query to rank scores. If there is a tie between two scores, both should have the same ranking. Note that after a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no &quot;holes&quot; between ranks.</p>

<pre>
+----+-------+
| Id | Score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+
</pre>

<p>For example, given the above <code>Scores</code> table, your query should generate the following report (order by highest score):</p>

<pre>
+-------+------+
| Score | Rank |
+-------+------+
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
|&nbsp;3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |
+-------+------+
</pre>

</div>

<h2 id="solution">Solution (mysql)</h2>

```mysql
# Write your MySQL query statement below
select Score,
    (select count(distinct Score) from Scores where Score >= s.Score) as Rank
from Scores s
order by Score desc;
```
