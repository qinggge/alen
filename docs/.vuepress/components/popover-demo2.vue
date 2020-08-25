<template>
  <div>
    <a-popover trigger="hover">
      <a-button>上方弹出</a-button>
      <template slot="content">
        弹出内容
      </template>
    </a-popover>
    <a-popover position="bottom" trigger="hover">
      <a-button>下方弹出</a-button>
      <template slot="content">
        弹出内容
      </template>
    </a-popover>
    <a-popover position="left" trigger="hover">
      <a-button>左边弹出</a-button>
      <template slot="content">
        弹出内容
      </template>
    </a-popover>
    <a-popover position="right" trigger="hover">
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