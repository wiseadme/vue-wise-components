import Vue from 'vue'
import { VNode } from 'vue/types'
import './VButton.scss'

// import { mixins } from '@/utils/mixins'

export default Vue.extend({
  name: 'VButton',
  props: {
    text: String,
    type: String
  },

  computed: {
    __content(): VNode {
      return this.$createElement('span', {
        staticClass: 'v-button__text',
        attrs: {
          id: 'button'
        }
      }, this.text)
    }
  },

  render(h): VNode {
    return h('button',
      {
        staticClass: 'v-button'
      },
      [this.__content]
    )
  }
})