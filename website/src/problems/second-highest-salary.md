---
layout: "layout.njk"
title: "Second Highest Salary"
difficulty: ""
tags: 
  - problems
---

# Second Highest Salary

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Write a SQL query to get the second highest salary from the <code>Employee</code> table.</p>

<pre>
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
</pre>

<p>For example, given the above Employee table, the query should return <code>200</code> as the second highest salary. If there is no second highest salary, then the query should return <code>null</code>.</p>

<pre>
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
</pre>

</div>

<h2 id="solution">Solution (mysql)</h2>

```mysql
# Write your MySQL query statement below
select (
    select distinct Salary 
    from Employee 
    order by Salary desc
    limit 1
    offset 1
) as SecondHighestSalary;
```
