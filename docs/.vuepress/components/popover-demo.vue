<template>
  <div>
    <a-popover>
      <a-button>上方弹出</a-button>
      <template slot="content">
        弹出层
        <a-button>支持HTML</a-button>
      </template>
    </a-popover>
    <a-popover position="bottom">
      <a-button>下方弹出</a-button>
      <template slot="content">
        弹出内容
      </template>
    </a-popover>
    <a-popover position="left">
      <a-button>左边弹出</a-button>
      <template slot="content">
        弹出内容
      </template>
    </a-popover>
    <a-popover position="right">
      <a-button>右边弹出</a-button>
      <template slot="content">
        弹出内容
      </template>
    </a-popover>
  </div>
</template>
<script>
import Button from '../../../src/button';
import Popover from '../../../src/popover';
export default {
  components: {
    'a-popover': Popover,
    'a-button': Button,
  }
}
</script>