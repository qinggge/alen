import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('a-button', Button);
Vue.component('a-icon', Icon);

new Vue({
    el: '#app',
})