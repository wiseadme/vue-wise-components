// Styles
import './VueOverlay.scss'

// Constructor
import Vue from 'vue'
import { VNode } from 'vue/types'

export default Vue.extend({
  name: 'VueOverlay',
  props: {
    hide: Boolean,
    active: Boolean
  },

  computed: {
    classes(): Record<string, boolean> {
      return {
        ['vue-overlay--hidden']: this.hide,
        ['vue-overlay--active']: this.active,
      }
    }
  },

  render(h): VNode {
    return h('div', {
      staticClass: 'vue-overlay',
      class: {
        ...this.classes
      }
    }, this.$slots.default)
  }
})
