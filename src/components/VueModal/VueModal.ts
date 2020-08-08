// styles
import './VueModal.scss'

// Vue and vue types
import Vue from 'vue'
import { VNode } from 'vue/types'

//helpers
import { getSlot } from '@/helpers'

// mixins
import Overlayable from '@/mixins/Overlayable'


type VueExtendable = typeof Overlayable

//@ts-ignore
export default Vue.extend<VueExtendable>().extend({
  name: 'VueModal',

  mixins: [Overlayable],

  props: {
    closeButton: Boolean,
    transition: String,
    overlayShow: Boolean,
    value: Boolean
  },

  watch: {
    value() {
      this.hideOverlay = !this.hideOverlay
    }
  },

  methods: {
    genTransition(content: VNode | VNode[]): VNode | null {
      if (!this.transition) return content as VNode
      return this.$createElement('transition', {
        props: {
          name: this.transition,
          appear: true,
        }
      }, [content])
    },

    genContent(): VNode[] {
      const children: VNode[] = []
      const keys = Object.keys(this.$slots)

      if (this.closeButton) {
        children.push(this.close)
      }

      for (const key of keys) {
        if (this.$slots[key]) {
          const vnode = this.$createElement('div', {
            slot: key,
            staticClass: `vue-modal__${ key }`
          }, getSlot(this, key))
          children.push(vnode!)
        }
      }

      return children
    },
  },

  computed: {

    container(): VNode {
      return this.$createElement('div', {
        staticClass: 'vue-modal-container',
        directives: [
          {
            name: 'show',
            value: this.value
          }
        ]
      }, [])
    },

    modal(): VNode {
      return this.$createElement('div', {
        staticClass: 'vue-modal',
      }, [])
    },

    close(): VNode {
      return this.$createElement('span', {
        staticClass: 'vue-modal__close',
        on: {
          click: () => {
            this.hideOverlay = true
          }
        }
      }, 'close')
    }
  },

  render(h): VNode {
    if (!this.container.children!.length) {
      this.modal.children = this.genContent()

      this.container.children!.push(this.modal)
    }

    return h('transition', {}, [
      this.genTransition(this.container)
    ])
  }
})
