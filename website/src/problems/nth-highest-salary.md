---
id: nth-highest-salary
title: Nth Highest Salary
sidebar_label: Nth Highest Salary
---
## Description
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

## Solution(mysql)
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