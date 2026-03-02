---
layout: "layout.njk"
title: "Department Top Three Salaries"
difficulty: ""
tags: 
  - problems
---

# Department Top Three Salaries

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>The <code>Employee</code> table holds all employees. Every employee has an Id, and there is also a column for the department Id.</p>

<pre>
+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 85000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
| 5  | Janet | 69000  | 1            |
| 6  | Randy | 85000  | 1            |
| 7  | Will  | 70000  | 1            |
+----+-------+--------+--------------+
</pre>

<p>The <code>Department</code> table holds all departments of the company.</p>

<pre>
+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
</pre>

<p>Write a SQL query to find employees who earn the top three salaries in each of the department. For the above tables, your SQL query should return the following rows (order of rows does not matter).</p>

<pre>
+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Randy    | 85000  |
| IT         | Joe      | 85000  |
| IT         | Will     | 70000  |
| Sales      | Henry    | 80000  |
| Sales      | Sam      | 60000  |
+------------+----------+--------+
</pre>

<p><strong>Explanation:</strong></p>

<p>In IT department, Max earns the highest salary, both Randy and Joe earn the second highest salary, and Will earns the third highest salary. There are only two employees in the Sales department, Henry earns the highest salary while Sam earns the second highest salary.</p>

</div>

<h2 id="solution">Solution (mysql)</h2>

```mysql
# Write your MySQL query statement below
select 
    d.Name as Department,
    e.Name as Employee,
    e.Salary as Salary
from Department d
join Employee e on d.Id = e.DepartmentId
where 3 > (
    select count(distinct Salary)
    from Employee e2
    where e2.DepartmentId = e.DepartmentId
    and e2.Salary > e.Salary
)
```
