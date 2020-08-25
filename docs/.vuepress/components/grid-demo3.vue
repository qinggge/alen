<template>
  <div>
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
  </div>
</template>
<script>
import Col from '../../../src/col';
import Row from '../../../src/row';
export default {
  components: {
    'a-col': Col,
    'a-row': Row,
  }
}
</script>
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