---
title: Tabs 标签页
---
# 标签页

### 基础用法 
<br/>  

<ClientOnly>
  <tabs-demo/>
</ClientOnly>

```vue
  <a-tabs :selected="selected" style="border: 1px solid teal;">
    <a-tabs-head>
      <a-tabs-item name="1">1</a-tabs-item>
      <a-tabs-item name="2">2</a-tabs-item>
    </a-tabs-head>
    <a-tabs-body>
      <a-tabs-pane name="1">content 1</a-tabs-pane>
      <a-tabs-pane name="2">content 2</a-tabs-pane>
    </a-tabs-body>
  </a-tabs>

  <script>
  data() {
    return {
      selected: '2',
    }
  },
  </script>
```

### Attributes
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|selected|默认选中的标签|string|-|-|