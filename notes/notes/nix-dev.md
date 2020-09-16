---
title: nix-env Dev Environments
tags: 
  - nix
  - nix-env
emoji: ❄️ 
link: https://nixos.wiki/wiki/Development_environment_with_nix-shell
---

```nix
{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    buildInputs = [ pkgs.ruby_2_3 ];
}
```

then envoke

```shell
nix-shell
```

and you'll be dropped into a `bash` shell with the proper packages
