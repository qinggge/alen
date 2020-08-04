import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input';

Vue.component('a-button', Button);
Vue.component('a-icon', Icon);
Vue.component('a-button-group', ButtonGroup);
Vue.component('a-input', Input);

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