// Styles
import './VueCard.scss'

// Constructor
import Vue from 'vue'

// Types
import { VNode } from 'vue/types'

export default Vue.extend({
  name: 'VueCard',
  props: {
    width: [String, Number]
  },

  render(h): VNode {
    return h('div', {
      staticClass: 'vue-card',
      style: { maxWidth: this.width + 'px' },
    }, this.$slots.default)
  }
})
