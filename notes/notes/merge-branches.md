---
title: Merge git branch into main
tags:
  - git
emoji: 🌴
link: https://stackoverflow.com/questions/5601931/what-is-the-best-and-safest-way-to-merge-a-git-branch-into-master
---

The safest way to do this is below

```shell
git checkout main
git pull origin main
git merge test
git push origin main
```
