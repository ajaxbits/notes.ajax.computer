---
title: Vertical Centering in CSS
tags:
  - CSS
emoji: ↕
---

> more to come...

For single-line text blocks, they'll always be centered inside their line height, so this will work:

```CSS
h1 {
  font-size: 1.4em;
  line-height: 2em;
}
```

and if you're a scrub you can do this:

```CSS
div {
  display: table-cell;
  vertical-align: middle;
}
```
