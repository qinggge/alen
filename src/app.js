import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Sider from './sider';
import Toast from './toast';
import plugin from './plugin';

Vue.component('a-button', Button);
Vue.component('a-icon', Icon);
Vue.component('a-button-group', ButtonGroup);
Vue.component('a-input', Input);
Vue.component('a-row', Row);
Vue.component('a-col', Col);
Vue.component('a-layout', Layout);
Vue.component('a-header', Header);
Vue.component('a-footer', Footer);
Vue.component('a-content', Content);
Vue.component('a-sider', Sider);
Vue.component('a-toast', Toast);
Vue.use(plugin);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);
    },
    showToast() {
      this.$toast('我是一个 toast');
    }
  }
})