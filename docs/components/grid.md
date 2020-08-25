---
title: Grid 网格
---
# 网格

### 基础用法 
<br/>
  
<ClientOnly>
  <grid-demo/>
</ClientOnly>

```vue
  <a-row class="demo-row">
    <a-col span="8">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="8">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="8">
      <div class="demo-col"></div>
    </a-col>
  </a-row>
  <a-row class="demo-row">
    <a-col span="6">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="6">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="6">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="6">
      <div class="demo-col"></div>
    </a-col>
  </a-row>
  <a-row class="demo-row">
    <a-col span="4">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="4">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="4">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="4">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="4">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="4">
      <div class="demo-col"></div>
    </a-col>
  </a-row>
  <a-row class="demo-row">
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
  </a-row>

  <style lang="scss">
  .demo-row {
    margin-bottom: 5px;
    .demo-col {
      height: 50px;
      border: 1px solid #000;
      background: #99a9bf;
    }
  }
  </style>
```

### 间隙网格 
<br/>
  
<ClientOnly>
  <grid-demo2/>
</ClientOnly>

```vue
  <a-row class="demo-row" gutter="5">
    <a-col span="8">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="8">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="8">
      <div class="demo-col"></div>
    </a-col>
  </a-row>
  <a-row class="demo-row" gutter="3">
    <a-col span="6">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="6">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="6">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="6">
      <div class="demo-col"></div>
    </a-col>
  </a-row>

  <style lang="scss">
    * { 
      box-sizing: border-box;
    }
    .demo-row {
      margin-bottom: 5px;
      .demo-col {
        height: 50px;
        background: #99a9bf;
      }
    }
  </style>
```
### 空隙网格 
<br/>
  
<ClientOnly>
  <grid-demo3/>
</ClientOnly>


```vue
  <a-row class="demo-row">
    <a-col span="8">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="8" offset="8">
      <div class="demo-col"></div>
    </a-col>
  </a-row>
  <a-row class="demo-row">
    <a-col span="6" offset="6">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="6" offset="6">
      <div class="demo-col"></div>
    </a-col>
  </a-row>
  <a-row class="demo-row">
    <a-col span="4">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="4" offset="4">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="4" offset="8">
      <div class="demo-col"></div>
    </a-col>
  </a-row>
  <a-row class="demo-row">
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2" offset="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2" offset="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2" offset="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2">
      <div class="demo-col"></div>
    </a-col>
    <a-col span="2" offset="2">
      <div class="demo-col"></div>
    </a-col>
  </a-row>

  <style lang="scss">
    * { 
      box-sizing: border-box;
    }
    .demo-row {
      margin-bottom: 5px;
      .demo-col {
        height: 50px;
        background: #99a9bf;
      }
    }
  </style>
```

### Row Attributes
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|gutter|空隙|string / number|-|-|
|align|文字对齐状态|string|left / right / center|-|  
  
### Col Attributes
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|span|占用份额，默认1row = 24span|string / number|-|-|
|offset|偏移量|string / number|-|-|