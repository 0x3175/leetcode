---
layout: "layout.njk"
title: "Duplicate Emails"
difficulty: ""
tags: 
  - problems
---

# Duplicate Emails

{% if difficulty and difficulty != "" %}
<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>
{% endif %}

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>Write a SQL query to find all duplicate emails in a table named <code>Person</code>.</p>

<pre>
+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
</pre>

<p>For example, your query should return the following for the above table:</p>

<pre>
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
</pre>

<p><strong>Note</strong>: All emails are in lowercase.</p>

</div>

<h2 id="solution">Solution (mysql)</h2>

```mysql
# Write your MySQL query statement below
select Email
from (
    select Email, count(Id) as Count
    from Person
    group by Email
) as EmailCount
where EmailCount.Count > 1;
```
