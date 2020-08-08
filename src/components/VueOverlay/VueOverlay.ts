import './VueOverlay.scss'

import Vue from 'vue'

export default Vue.extend({
  name: 'VueOverlay',

  props: {
    hide: {
      type: Boolean,
      default: () => false
    },
    active: Boolean
  },

  render(h) {
    return h('div', {
      staticClass: 'vue-overlay',
      class: {
        'vue-overlay--hidden': this.hide,
        'vue-overlay--active': this.active,
      }
    }, this.$slots.default)
  }
})
