import './VueButton.scss'

import Vue from 'vue'
import { VNode, VNodeData } from 'vue/types'

import { getSlot } from '@/helpers'

const buttonTypes: string[] = [
  'primary',
  'success',
  'warning',
  'danger'
]

export default Vue.extend({
  name: 'VueButton',
  props: {
    text: String,
    color: String,
    disabled: Boolean,
    type: {
      type: String,
      validator(value: string): boolean {
        return buttonTypes.includes(value)
      }
    },
  },

  computed: {
    content(): VNode {
      return this.$createElement('span',
        {
          staticClass: 'vue-button__text',
        }, [this.text])
    },

    slotContent(): VNode | null {
      const slotContent = getSlot(this)
      if (slotContent) {
        return this.$createElement('div', {
          staticClass: 'vue-button__content'
        }, slotContent)
      }
      return null
    },

    renderData(): VNodeData {
      return {
        staticClass: 'vue-button',
        class: {
          ...this.classes
        },
        style: {
          backgroundColor: this.color
        },
        on: {
          click: () => {
            if (this.disabled) return
            this.$emit('click')
          }
        }
      }
    },

    classes(): Record<string, boolean> {
      return {
        [`vue-button--${ this.type }`]: !this.color && !this.disabled,
        ['vue-button--disabled']: this.disabled,
        [this.color]: !!this.color
      }
    }
  },

  render(h): VNode {
    const content = [this.content]

    if (this.slotContent) {
      content.push(this.slotContent!)
    }

    return h('button', this.renderData, [content])
  }
})
