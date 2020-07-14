import Vue from 'vue'
import { VNode, VNodeData } from 'vue/types'
import './VButton.scss'

export default Vue.extend({
  name: 'VButton',
  props: {
    text: String,
    type: String,
    color: String,
    actionButton: Boolean
  },

  computed: {
    content(): VNode {
      return this.$createElement('span',
        {
          staticClass: 'v-button__text',
        },
        this.text
      )
    },

    renderData(): VNodeData {
      return {
        staticClass: 'v-button',
        class: {
          ...this.classes
        },
        style: {
          backgroundColor: this.color
        }
      }
    },

    classes(): object {
      const classes: Record<string, boolean> = {
        'v-button--action': this.actionButton,
        'v-button--default': !this.actionButton,
      }
      return classes
    }
  },

  render(h): VNode {
    const content = [this.content]
    for (let key in this.$slots) {
      // @ts-ignore
      content.push(this.$slots[key])
    }
    return h('button', this.renderData, content)
  }
})
