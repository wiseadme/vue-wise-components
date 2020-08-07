import './VueChip.scss'

import Vue from 'vue'
import { VNode } from 'vue/types'

import { getSlot } from '@/helpers'

export default Vue.extend({
  name: 'VueChip',
  props: {
    selected: Boolean,
    disabled: Boolean,
    text: String
  },

  computed: {
    inner(): VNode {
      return this.$createElement('div', {
        staticClass: 'vue-chip__inner'
      }, [])
    },

    content(): VNode {
      return this.$createElement('span', {
        staticClass: 'vue-chip__text'
      }, [this.text])
    },

    iconSlot(): VNode {
      return this.$createElement('span', {
        staticClass: 'vue-chip__icon',
        slot: 'icon'
      }, getSlot(this, 'icon'))
    }
  },

  render(h): VNode {
    const content = this.inner
    content.children!.push(this.content)
    if (this.$slots.icon) {
      content.children!.push(this.iconSlot)
    }
    return h('div', {
      staticClass: 'vue-chip',
      class: {
        'vue-chip--default': !this.selected && !this.disabled,
      },
      on: {
        click: () => this.$emit('click', {})
      }
    }, [content])
  }
})
