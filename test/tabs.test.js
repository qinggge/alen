const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsItem from '../src/tabs-item';
import TabsBody from '../src/tabs-body';
import TabsPane from '../src/tabs-pane';
import TabsHead from '../src/tabs-head';

Vue.component('a-tabs', Tabs);
Vue.component('a-tabs-item', TabsItem);
Vue.component('a-tabs-body', TabsBody);
Vue.component('a-tabs-pane', TabsPane);
Vue.component('a-tabs-head', TabsHead);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  // BDD 行为驱动测试
  
  it('存在.', () => {
    expect(Tabs).to.be.ok;
  });

  it('接受 selected 属性', (done) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
      <a-tabs selected="finance">
        <a-tabs-head>
          <a-tabs-item name="women"> 美女 </a-tabs-item>
          <a-tabs-item name="finance"> 财经 </a-tabs-item>
          <a-tabs-item name="sports"> 体育 </a-tabs-item>
        </a-tabs-head>
        <a-tabs-body>
          <a-tabs-pane name="women"> 美女相关资讯 </a-tabs-pane>
          <a-tabs-pane name="finance"> 财经相关资讯 </a-tabs-pane>
          <a-tabs-pane name="sports"> 体育相关资讯 </a-tabs-pane>
        </a-tabs-body>
      </a-tabs>
    `
    let vm = new Vue({
      el: div
    });
    vm.$nextTick(() => {
      let x = vm.$el.querySelector('.tabs-item[data-name=finance]')
      expect(x.classList.contains('active')).to.be.true;
      done();
    })
  });
  
  it('可以接受 direction 属性', () => {

  })
});