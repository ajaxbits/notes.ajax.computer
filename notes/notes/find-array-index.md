---
title: Find the index of an array item
tags: 
  - javascript
emoji: 📇
---

Use `.findIndex()`!

```javascript
const kaitIndex = names.findIndex((name) => {
  if (name === `alex`) {
    return true;
  } else {
    return false;
  }
});
```

The more consice way to write it, using implicit return, would be:

```javascript
const kaitIndex = names.findIndex((name) => name === `alex`);
```
