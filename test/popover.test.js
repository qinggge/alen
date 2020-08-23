const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  // BDD 行为驱动测试
  
  it('存在.', () => {
    expect(Popover).to.be.ok
  })

  it('可以设置position.', (done) => {
    Vue.component('a-popover', Popover);
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
      <a-popover position="bottom" ref="a">
        <template slot="content">
        弹出内容
        </template>
        <button>点我</button>
      </a-popover>
    `
    const vm = new Vue({
      el: div
    });
    vm.$el.querySelector('button').click();
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.a.$refs;
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true;
      done();
    });
  });

  it('可以设置 trigger', (done) => {
    Vue.component('a-popover', Popover);
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
      <a-popover trigger="hover" ref="a">
        <template slot="content">
        弹出内容
        </template>
        <button>点我</button>
      </a-popover>
    `
    const vm = new Vue({
      el: div
    });
    let event = new Event('mouseenter');
    vm.$el.dispatchEvent(event);
    const triggerWrapper = document.querySelector('.content-wrapper');
    vm.$nextTick(() => {
      expect(triggerWrapper).to.exist;
      done();
    })
  })
})