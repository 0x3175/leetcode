---
layout: "layout.njk"
title: "Nth Highest Salary"
difficulty: ""
tags: 
  - problems
---

# Nth Highest Salary

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Write a SQL query to get the <em>n</em><sup>th</sup> highest salary from the <code>Employee</code> table.</p>

<pre>
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
</pre>

<p>For example, given the above Employee table, the <em>n</em><sup>th</sup> highest salary where <em>n</em> = 2 is <code>200</code>. If there is no <em>n</em><sup>th</sup> highest salary, then the query should return <code>null</code>.</p>

<pre>
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
</pre>

</div>

<h2 id="solution">Solution (mysql)</h2>

```mysql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE M INT;
  SET M=N-1;
  RETURN (
      # Write your MySQL query statement below.
      select distinct Salary from Employee
      order by Salary desc
      limit M, 1
  );
END
```
