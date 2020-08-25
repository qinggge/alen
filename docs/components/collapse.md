---
title: Collapse 折叠面板
---
# 折叠面板

### 基础用法 
<br/>  

<ClientOnly>
  <collapse-demo/>
</ClientOnly>

```vue
  <a-collapse :selected.sync="selectedTab">
    <a-collapse-item title="1" name="1">
      第一层
    </a-collapse-item>
    <a-collapse-item title="2" name="2">
      第二层
    </a-collapse-item>
    <a-collapse-item title="3" name="3">
      第三层
    </a-collapse-item>
    <a-collapse-item title="4" name="4">
      第四层
    </a-collapse-item>
  </a-collapse>

  <script>
  data() {
    return {
      selected: ['1','2'],
    }
  },
  </script>
```

### Attributes
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|single|是否只允许单开|boolean|true / false|false|
|selected|默认开启的面板|array|-|-|