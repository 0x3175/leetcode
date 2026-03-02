---
layout: "layout.njk"
title: "Classes More Than 5 Students"
difficulty: "Migrated"
tags: 
  - problems
---

# Classes More Than 5 Students

<div class="badge" style="background-color: {{ difficulty | difficultyColor }}22; color: {{ difficulty | difficultyColor }}; border: 1px solid {{ difficulty | difficultyColor }}44;">
  {{ difficulty }}
</div>

<h2 id="problem-description">Problem Description</h2>

<div class="description">
<p>There is a table <code>courses</code> with columns: <b>student</b> and <b>class</b></p>

<p>Please list out all classes which have more than or equal to 5 students.</p>

<p>For example, the table:</p>

<pre>
+---------+------------+
| student | class      |
+---------+------------+
| A       | Math       |
| B       | English    |
| C       | Math       |
| D       | Biology    |
| E       | Math       |
| F       | Computer   |
| G       | Math       |
| H       | Math       |
| I       | Math       |
+---------+------------+
</pre>

<p>Should output:</p>

<pre>
+---------+
| class   |
+---------+
| Math    |
+---------+
</pre>

<p>&nbsp;</p>

<p><b>Note:</b><br />
The students should not be counted duplicate in each course.</p>

</div>

<h2 id="solution">Solution (mysql)</h2>

```mysql
SELECT
    class
FROM
    courses
GROUP BY class
HAVING COUNT(DISTINCT student) >= 5
;
```
