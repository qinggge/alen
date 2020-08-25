<template>
  <div>
    <a-layout style="border: 1px solid black;">
      <a-sider style="width: 200px;" close>sider</a-sider>
      <a-layout>
        <a-header style="height: 50px;background: teal; color: white;">header</a-header>
        <a-content style="height: 50px;background: aqua;">content</a-content>
        <a-footer style="height: 50px;background: teal; color: white;">footer</a-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Layout from '../../../src/layout';
import Header from '../../../src/header';
import Footer from '../../../src/footer';
import Content from '../../../src/content';
import Sider from '../../../src/sider';
export default {
  components: {
    'a-layout': Layout,
    'a-header': Header,
    'a-footer': Footer,
    'a-content': Content,
    'a-sider': Sider,
  }
}
</script>