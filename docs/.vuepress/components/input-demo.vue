<template>
  <div>
    <a-input value="这是value"></a-input>
    <a-input readonly value="只读"></a-input>
    <a-input disabled value="禁用"></a-input>
    <a-input error="error" value="错误"></a-input>
  </div>
</template>
<script>
import Input from '../../../src/input';
export default {
  components: {
    'a-input': Input,
  }
}
</script>