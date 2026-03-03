---
id: "valid-phone-numbers"
title: "Valid Phone Numbers"
lang: "bash"
---

# Valid Phone Numbers

<h2 id="problem-description">Problem Description</h2>

<p>Given a text file <code>file.txt</code> that contains a list of phone numbers (one per line), write a one-liner bash script to print all valid phone numbers.</p>

<p>You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)</p>

<p>You may also assume each line in the text file must not contain leading or trailing white spaces.</p>

<p><strong class="example">Example:</strong></p>

<p>Assume that <code>file.txt</code> has the following content:</p>

<pre>
987-123-4567
123 456 7890
(123) 456-7890
</pre>

<p>Your script should output the following valid phone numbers:</p>

<pre>
987-123-4567
(123) 456-7890
</pre>


<h2 id="solution">Solution (Bash)</h2>

```bash
# Read from the file file.txt and output all valid phone numbers to stdout.
grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt
```
