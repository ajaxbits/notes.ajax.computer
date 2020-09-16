---
title: Change Git Master to Main
tags:
  - git
emoji: 👍
link: https://www.hanselman.com/blog/EasilyRenameYourGitDefaultBranchFromMasterToMain.aspx
---

# Configuring git natively

Add the following to your git config (either `~/.config/git/config` or `~/.gitconfig`):

```shell
[init]
    templateDir = ~/.config/git/template/
```

which will point git to look at `~/.config/git/template` when evoking `git init`.

Now, create a new file at `~/.config/git/template/HEAD` with the following text, which will rename the default branch to `main`:

```shell
ref:refs/heads/main
```

# Changing existing repos

```shell
git branch -m master main && git push -u origin main && git push -d origin master
```

# Changing new repos

```shell
git init
git checkout -b trunk
```

[via stackoverflow](https://stackoverflow.com/questions/42871542/how-to-create-a-git-repository-with-the-default-branch-name-other-than-master/50880622#50880622)
