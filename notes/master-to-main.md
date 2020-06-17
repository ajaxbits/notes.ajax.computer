---
title: Change Git Master to Main
tags:
  - git
emoji: 👍
link: https://www.hanselman.com/blog/EasilyRenameYourGitDefaultBranchFromMasterToMain.aspx
---

# For existing repos

```shell
git branch -m master main && git push -u origin main
```

# For new repos

```shell
git init
git checkout -b trunk
```

[via stackoverflow](https://stackoverflow.com/questions/42871542/how-to-create-a-git-repository-with-the-default-branch-name-other-than-master/50880622#50880622)
