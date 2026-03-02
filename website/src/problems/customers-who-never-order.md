---
layout: "layout.njk"
title: "Customers Who Never Order"
difficulty: ""
tags: 
  - problems
---

# Customers Who Never Order

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Suppose that a website contains two tables, the <code>Customers</code> table and the <code>Orders</code> table. Write a SQL query to find all customers who never order anything.</p>

<p>Table: <code>Customers</code>.</p>

<pre>
+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
</pre>

<p>Table: <code>Orders</code>.</p>

<pre>
+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
</pre>

<p>Using the above tables as example, return the following:</p>

<pre>
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
</pre>

</div>

<h2 id="solution">Solution (mysql)</h2>

```mysql
# Write your MySQL query statement below
select c.Name as Customers
from Customers c
where 0 = (
    select count(*) 
    from Orders o
    where o.CustomerId = c.Id
)
```
