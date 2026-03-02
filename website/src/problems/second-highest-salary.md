---
id: second-highest-salary
title: Second Highest Salary
sidebar_label: Second Highest Salary
---
## Description
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

## Solution(mysql)
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