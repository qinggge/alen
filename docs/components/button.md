---
title: Button 按钮
---
# 按钮

### 基础用法 
<br/>  

<ClientOnly>
  <button-demos/>
</ClientOnly>

```html
  <a-button>默认按钮</a-button>
  <a-button icon="settings">设置</a-button>
  <a-button :loading="true" icon-position="right">加载中<a-button>
  <a-button disabled>禁用</a-button>
```

### 按钮组  
<br/>  

<ClientOnly>
  <button-demos2/>
</ClientOnly> 

```html
  <a-button-group>
    <a-button icon="left"></a-button>
    <a-button>默认按钮</a-button>
    <a-button icon="right"></a-button>
  </a-button-group>
```

### Attributes
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|icon|图标|string|-|-|
|loading|是否加载中状态|boolean|true / false|false|
|iconPosition|图标放置位置|string|left / right|left|
|disabled|是否禁用状态|boolean|true / false|false|