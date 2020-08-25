<template>
  <div>
    <a-tabs :selected="selected" style="border: 1px solid teal;">
      <a-tabs-head>
        <a-tabs-item name="1">1</a-tabs-item>
        <a-tabs-item name="2">2</a-tabs-item>
      </a-tabs-head>
      <a-tabs-body>
        <a-tabs-pane name="1">content 1</a-tabs-pane>
        <a-tabs-pane name="2">content 2</a-tabs-pane>
      </a-tabs-body>
    </a-tabs>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs';
import TabsBody from '../../../src/tabs-body';
import TabsHead from '../../../src/tabs-head';
import TabsItem from '../../../src/tabs-item';
import TabsPane from '../../../src/tabs-pane';
export default {
  components: {
    'a-tabs': Tabs,
    'a-tabs-body': TabsBody,
    'a-tabs-head': TabsHead,
    'a-tabs-item': TabsItem,
    'a-tabs-pane': TabsPane,
  },
  data() {
    return {
      selected: '2',
    }
  },
}
</script>
<style lang="scss">
  
</style>