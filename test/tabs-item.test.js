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

describe('TabsItem', () => {
  // BDD 行为驱动测试
  
  it('存在.', () => {
    expect(TabsItem).to.be.ok;
  });

  it('接受 name 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      }
    }).$mount();
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx');
  });

  it('接受 disabled 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true,
      }
    }).$mount();
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  });
});