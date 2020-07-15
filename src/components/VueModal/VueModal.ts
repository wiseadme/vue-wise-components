import './VueModal.scss'

import Vue from 'vue'
import { VNode, VNodeData } from 'vue/types'

import { getSlot } from '@/helpers'

export default Vue.extend({
  name: 'VueModal',

  methods: {
    createVNode(
      tag: string,
      dataObject: VNodeData,
      children: any = null
    ): VNode | null {
      if (children) {
        return this.$createElement(tag, dataObject, children)
      }
      return null
    }
  },

  computed: {
    body(): VNode | null {
      return this.createVNode('div', {
        staticClass: 'vue-modal__body',
        slot: 'body'
      }, getSlot(this, 'body'))
    },

    footer(): VNode | null {
      return this.createVNode('div', {
        staticClass: 'vue-modal__footer',
        slot: 'footer'
      }, getSlot(this, 'footer'))
    }
  },

  render(h): VNode {
    const content: VNode[] = [
      this.body!,
      this.footer!
    ]
    return h('div', {
      staticClass: 'vue-modal'
    }, content)
  }
})
