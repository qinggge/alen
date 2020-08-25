---
title: Input 输入框
---
# 输入框

### 基础用法 
<br/>  

<ClientOnly>
  <input-demo/>
</ClientOnly>

```vue
  <a-input value="这是value"></a-input>
  <a-input readonly value="只读"></a-input>
  <a-input disabled value="禁用"></a-input>
  <a-input error="error" value="错误"></a-input>
```

### 双向绑定 
<br/>  

<ClientOnly>
  <input-demo2/>
</ClientOnly>
  
```vue
  data() {
    return {
      value: '支持双向绑定',
    }
  }

  <a-input v-model="value"></a-input>
  <div>value: {{value}}</div>
```  

### Attributes
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|value / v-model|绑定值|string / number|-|-|
|disabled|是否禁用状态|boolean|true / false|false|
|readonly|是否只读状态|boolean|true / false|false|
|error|是否提示错误状态|string|-|-|