<template>
  <div>
    <a-button-group>
      <a-button icon="left"></a-button>
      <a-button>默认按钮</a-button>
      <a-button icon="right"></a-button>
    </a-button-group>
  </div>
</template>
<script>
import Button from '../../../src/button';
import ButtonGroup from '../../../src/button-group';
export default {
  components: {
    'a-button': Button,
    'a-button-group': ButtonGroup,
  }
}
</script>