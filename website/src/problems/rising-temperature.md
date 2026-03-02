---
layout: "layout.njk"
title: "Rising Temperature"
difficulty: "Migrated"
tags: 
  - problems
---

# Rising Temperature

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Given a <code>Weather</code> table, write a SQL query to find all dates&#39; Ids with higher temperature compared to its previous (yesterday&#39;s) dates.</p>

<pre>
+---------+------------------+------------------+
| Id(INT) | RecordDate(DATE) | Temperature(INT) |
+---------+------------------+------------------+
|       1 |       2015-01-01 |               10 |
|       2 |       2015-01-02 |               25 |
|       3 |       2015-01-03 |               20 |
|       4 |       2015-01-04 |               30 |
+---------+------------------+------------------+
</pre>

<p>For example, return the following Ids for the above <code>Weather</code> table:</p>

<pre>
+----+
| Id |
+----+
|  2 |
|  4 |
+----+
</pre>

</div>

<h2 id="solution">Solution (mysql)</h2>

```mysql
# Write your MySQL query statement below
select w1.Id as Id
from Weather w1
join Weather w2 
on datediff(w1.RecordDate, w2.RecordDate) = 1
and w1.Temperature > w2.Temperature;
```
