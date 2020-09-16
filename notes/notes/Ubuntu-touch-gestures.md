---
title: How to get touchpad gestures working under Ubuntu
tags:
  - linux
  - pop_os
  - ubuntu
emoji: 👇
link: https://github.com/iberianpig/fusuma
---

Use [fusuma](https://github.com/iberianpig/fusuma)!

### Installation

```bash
sudo gpasswd -a $USER input
sudo apt-get install libinput-tools
sudo apt-get install ruby
sudo gem install fusuma
sudo apt-get install xdotool
gsettings set org.gnome.desktop.peripherals.touchpad send-events enabled
```

Envoke using

```bash
fusuma
```

Update using 

```bash
sudo gem update fusuma
```

### Configuration

```bash
mkdir -p ~/.config/fusuma #gotta create this
vim ~/.config/fusuma/config.yml
```

Example Ubuntu config:

```yaml
swipe:
  3:
    left:
      command: "xdotool key alt+Right" # History forward 
    right:
      command: "xdotool key alt+Left" # History back
    up:
      command: "xdotool key super" # Activity
    down:
      command: "xdotool key super" # Activity
  4:
    left:
      command: "xdotool key ctrl+alt+Down" # Switch to next workspace
    right:
      command: "xdotool key ctrl+alt+Up" # Switch to previous workspace
    up:
      command: "xdotool key ctrl+alt+Down" # Switch to next workspace
    down:
      command: "xdotool key ctrl+alt+Up" # Switch to previous workspace
pinch:
  in:
    command: "xdotool keydown ctrl click 4 keyup ctrl" # Zoom in
  out:
    command: "xdotool keydown ctrl click 5 keyup ctrl" # Zoom out
```

