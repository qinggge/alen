# 快速上手

## 引入组件
你可以引入整个 UI，或是根据需要仅引入部分组件。我们介绍如何引入部分的 UI 组件。CSS 需要单独引入。

```JavaScript
import { Button } from 'alen'
import 'alen/dist/index.css;

export default {
  components: {
    'a-button': Button,
  }
}
```

## 添加 CSS
出于使用习惯考虑，请在 CSS 中开启 border-box。
```CSS
* ,*::before ,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```