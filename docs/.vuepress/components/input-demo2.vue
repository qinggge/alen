<template>
  <div>
    <a-input v-model="value"></a-input>
    <div>value: {{value}}</div>
  </div>
</template>
<script>
import Input from '../../../src/input';
export default {
  components: {
    'a-input': Input,
  },
  data() {
    return {
      value: '支持双向绑定',
    }
  }
}
</script>