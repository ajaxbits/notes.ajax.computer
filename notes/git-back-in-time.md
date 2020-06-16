---
title: How to go back in git time
tags:
  - git
  - GitHub
emoji: 🕰️
link: https://ohshitgit.com/
---

```shell
git reflog
# you will see a list of every thing you've
# done in git, across all branches!
# each one has an index HEAD@{index}
# find the one before you broke everything
git reset HEAD@{index}
# magic time machine
```
