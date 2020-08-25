<template>
  <div>
    <a-button @click="$toast('点击弹出提示')">上方弹出</a-button>
    <a-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</a-button>
    <a-button @click="$toast(`<h3>支持HTML</h3>`, {position:'bottom', enableHtml: true})">支持HTML</a-button>
  </div>
</template>
<script>
import plugin from '../../../src/plugin';
import Button from '../../../src/button';
import Vue from 'vue';
Vue.use(plugin);
export default {
  components: {
    'a-button': Button,
  },
}
</script>