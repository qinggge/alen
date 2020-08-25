---
title: Toast 弹出提示
---
# 弹出提示

### 基础用法 
<br/>  

<ClientOnly>
  <toast-demo/>
</ClientOnly>

```vue
<template>
  <div>
    <a-button @click="$toast('点击弹出提示')">上方弹出</a-button>
    <a-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</a-button>
    <a-button @click="$toast(`<h3>支持HTML</h3>`, {position:'bottom', enableHtml: true})">下方弹出</a-button>
  </div>
</template>

<script>
import plugin from '../../../src/plugin';
import Button from '../../../src/button';
import Vue from 'vue';
Vue.use(plugin);
export default {
  components: {
    'a-button': Button,
  },
}
</script>
```

### Attributes
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|position|弹出位置|string|top / middle / bottom|top|
|enableHtml|是否支持HTML|boolean|true / false|false|
|closeButton|是否按钮关闭|object|text, callback|text: '关闭', callback: undefined|
|autoClose|是否自动关闭|boolean / number|-|5|