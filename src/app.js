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
import Tabs from './tabs';
import TabsItem from './tabs-item';
import TabsBody from './tabs-body';
import TabsPane from './tabs-pane';
import TabsHead from './tabs-head';
import Popover from './popover';
import Collapse from './collapse';
import CollapseItem from './collapse-item';

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
Vue.component('a-tabs', Tabs);
Vue.component('a-tabs-item', TabsItem);
Vue.component('a-tabs-body', TabsBody);
Vue.component('a-tabs-pane', TabsPane);
Vue.component('a-tabs-head', TabsHead);
Vue.component('a-popover', Popover);
Vue.component('a-collapse', Collapse);
Vue.component('a-collapse-item', CollapseItem);
Vue.use(plugin);

new Vue({
  el: '#app',
  data: {
    selectedTab: 'sports',
  },
  created() {
  },
  methods: {
    yyy(){
      console.log('yyy')
    },
    showToast1() {this.showToast('top')},
    showToast2() {this.showToast('middle')},
    showToast3() {this.showToast('bottom')},
    showToast(position) {
      this.$toast(`你的智商目前为${parseInt(Math.random() * 100)}`, {
        position,
        closeButton: {
          text: '关闭',
          callback(toast) {
            console.log('用户说他知道了');
          },
        },
        enableHtml: true,
        autoClose: 3,
      });
    },
  }
})