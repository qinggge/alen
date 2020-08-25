---
title: Popover 弹出框
---
# 弹出框

### 基础用法 
<br/>  

<ClientOnly>
  <popover-demo/>
</ClientOnly>

```vue
  <a-popover>
    <a-button>上方弹出</a-button>
    <template slot="content">
      弹出层
      <a-button>支持HTML</a-button>
    </template>
  </a-popover>
  <a-popover position="bottom">
    <a-button>下方弹出</a-button>
    <template slot="content">
      弹出内容
    </template>
  </a-popover>
  <a-popover position="left">
    <a-button>左边弹出</a-button>
    <template slot="content">
      弹出内容
    </template>
  </a-popover>
  <a-popover position="right">
    <a-button>右边弹出</a-button>
    <template slot="content">
      弹出内容
    </template>
  </a-popover>
```

### hover 触发 
<br/>  

<ClientOnly>
  <popover-demo2/>
</ClientOnly>

```vue
  <a-popover trigger="hover">
    <a-button>上方弹出</a-button>
    <template slot="content">
      弹出内容
    </template>
  </a-popover>
  <a-popover position="bottom" trigger="hover">
    <a-button>下方弹出</a-button>
    <template slot="content">
      弹出内容
    </template>
  </a-popover>
  <a-popover position="left" trigger="hover">
    <a-button>左边弹出</a-button>
    <template slot="content">
      弹出内容
    </template>
  </a-popover>
  <a-popover position="right" trigger="hover">
    <a-button>右边弹出</a-button>
    <template slot="content">
      弹出内容
    </template>
  </a-popover>
```

### Attributes
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|position|弹出位置|string|left / right / top / bottom|top|
|trigger|触发方式|string|click / hover|hover|