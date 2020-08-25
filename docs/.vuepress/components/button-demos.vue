<template>
  <div>
    <a-button>默认按钮</a-button>
    <a-button icon="settings">设置</a-button>
    <a-button :loading="true" icon-position="right">加载中</a-button>
    <a-button disabled>禁用</a-button>
  </div>
</template>
<script>
import Button from '../../../src/button';
export default {
  components: {
    'a-button': Button,
  }
}
</script>