<template>
  <div class="wrapper" :class="{ error }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)">
    <template v-if="error">
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import Icon from './icon';
export default {
  components: {Icon},
  name: 'alenInput',
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
}
</script>
<style lang="scss" scoped>
  // --button-height: 32px;
  // --font-size: 14px;
  // --button-bg: white;
  // --button-active-bg: #eee;
  // --border-radius: 4px;
  // --color: #333;
  // --border-color: #999;
  // --border-color-hover: #666;
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $font-size: 12px;
  $box-shadow-color: rgba(0,0,0,0.5);
  $red: #F1453D;
  .wrapper {
    display: inline-flex;
    align-items: center;
    font-size: $font-size;
    display: inline-block;
    > :not(:last-child) {
      margin-right: .5em;
    }
    > input {
      height: 32px;
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;
      outline: none;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
      }
      &:disabled {
        border-color: #aaa;
        color: #aaa;
        cursor: not-allowed;
      }
    }
    &.error {
      > input {
        border-color: $red;
      }
    }
    .errorMessage {
      color: $red;
    }
  }
</style>