---
title: Prepend content to a file
tags:
  - command line
  - bash
  - zsh
emoji: 🔝
link: https://superuser.com/questions/246837/how-do-i-add-text-to-the-beginning-of-a-file-in-bash
---

```shell
echo 'task goes here' | cat - todo.txt > temp && mv temp todo.txt
```

or

```shell
sed -i '1s/^/task goes here\n/' todo.txt
```

> this one ^ is good for multi-line prepends

or

```shell
sed -i '1itask goes here' todo.txt
```
