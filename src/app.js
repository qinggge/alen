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
  }
})