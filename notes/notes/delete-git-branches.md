---
title: Delete Git Branches
tags:
  - git
  - GitHub
emoji: 🌳
link: https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely
---

### If you want to delete a branch both locally and remotely

```shell
git push -d <remote_name> <branch_name> && git branch -d <branch_name>
```

Then, if the remote is `origin`, you'll need the following:

```shell
git push -d origin <branch_name>
```
