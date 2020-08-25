<template>
  <div>
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
  </div>
</template>
<script>
import Collapse from '../../../src/collapse';
import CollapseItem from '../../../src/collapse-item';
export default {
  components: {
    'a-collapse': Collapse,
    'a-collapse-item': CollapseItem,
  },
  data() {
    return {
      selectedTab: ['1','2'],
    }
  },
}
</script>
<style lang="scss">
  
</style>