---
title: Layout 布局
---
# 布局

### 基础用法 
<br/>  

<ClientOnly>
  <layout-demo/>
</ClientOnly>

```vue
  <a-layout style="border: 1px solid black;">
    <a-header style="height: 50px;background: teal; color: white;">header</a-header>
    <a-content style="height: 50px;background: aqua;">content</a-content>
    <a-footer style="height: 50px;background: teal; color: white;">footer</a-footer>
  </a-layout>
```

### 中间层分割布局 
<br/>  

<ClientOnly>
  <layout-demo2/>
</ClientOnly>  

```vue
  <a-layout style="border: 1px solid black;">
    <a-header style="height: 50px;background: teal; color: white;">header</a-header>
    <a-layout>
      <a-sider style="width: 100px;">sider</a-sider>
      <a-content style="height: 50px;background: aqua;">content</a-content>
    </a-layout>
    <a-footer style="height: 50px;background: teal; color: white;">footer</a-footer>
  </a-layout>
```

### 侧边栏可关闭 
<br/>  

<ClientOnly>
  <layout-demo3/>
</ClientOnly>  

```vue
  <a-layout style="border: 1px solid black;">
    <a-sider style="width: 200px;" close>sider</a-sider>
    <a-layout>
      <a-header style="height: 50px;background: teal; color: white;">header</a-header>
      <a-content style="height: 50px;background: aqua;">content</a-content>
      <a-footer style="height: 50px;background: teal; color: white;">footer</a-footer>
    </a-layout>
  </a-layout>
```

### Sider Attributes
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|close|是否可关闭|boolean|true / false|false|

注意：当开启 close 属性时，请设置 `.slide-enter, .slide-leave-to` 的 `margin-left` 值为负的 `sider` 组件的 `width`，否则会有动画出错的问题（例：当`sider` 组件的宽度为 `300px` 设置如下）。  
```css
.slide-enter, .slide-leave-to {
  margin-left: -300px;
}
```