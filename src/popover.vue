<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
      :class="{[`position-${position}`]: true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "alenPopover",
    data () {
      return {
        visible: false,
      }
    },
    computed: {
      openEvent() {
        if(this.trigger === 'click') {
          return 'click';
        } else {
          return 'mouseenter';
        }
      },
      closeEvent() {
        if(this.trigger === 'click') {
          return 'click';
        } else {
          return 'mouseleave';
        }
      }
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'right', 'left', 'bottom'].indexOf(value) >= 0;
        },
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) >= 0;
        }
      },
    },
    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick) 
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open);
        this.$refs.popover.addEventListener('mouseleave', this.close);
      }
    },
    beforeDestroy() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick) 
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open);
        this.$refs.popover.removeEventListener('mouseleave', this.close);
      }
    },
    methods: {
      positionContent () {
        const { contentWrapper, triggerWrapper } = this.$refs;
        document.body.appendChild(contentWrapper);
        const { width, height, top, left } = triggerWrapper.getBoundingClientRect();
        const { height: height2 } = contentWrapper.getBoundingClientRect();
        let positions = {
          top: {top: top + window.scrollY, left: left + window.scrollX,},
          bottom: {
            top: top + window.scrollY + height,
            left: left + window.scrollX,
          },
          left: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX,
          },
          right: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX + width,
          },
        };
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'
      },
      onClickDocument (e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return };
        if (this.$refs.contentWrapper && 
          this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target)
        ) { return };
        this.close();
      },
      open () {
        this.visible = true;
        this.$nextTick(() => {
          this.positionContent();
          document.addEventListener('click', this.onClickDocument);
        });
      },
      close () {
        this.visible = false;
        document.removeEventListener('click', this.onClickDocument);
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close();
          } else {
            this.open();
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;
    background: white;
    z-index: 1;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0px;
      height: 0px;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        border-bottom: none;
        left: 10px;
      }
      &::before {
        top: 100%;
        border-top-color: $border-color;
      }
      &::after {
        top: calc(100% - 2px);
        border-top-color: white;
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before {
        border-top: none;
        bottom: 100%;
        border-bottom-color: $border-color;
      }
      &::after {
        border-top: none;
        bottom: calc(100% - 2px);
        border-bottom-color: white;
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        border-right: none;
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-left-color: $border-color;
        left: 100%;
      }
      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        border-left: none;
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-right-color: $border-color;
        right: 100%;
      }
      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
  }
</style>