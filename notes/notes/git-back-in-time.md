---
title: How to go back in git time
tags:
  - git
emoji: 🕰️
link: https://ohshitgit.com/
---

```shell
git reflog
git reset HEAD@{index}
```

when you envoke `git reflog`, you will see a list of every thing you've done in git, across all branches! each one has an index `HEAD@{index}`
