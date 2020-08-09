// styles
import './VueModal.scss'

// Types
import { VNode } from 'vue/types'

// Helpers
import Vue from 'vue'
import { getSlot } from '@/helpers'

// Mixins
import Overlayable from '@/mixins/Overlayable'

type VueExtendable = typeof Overlayable

// @ts-ignore
export default Vue.extend<VueExtendable>().extend({
  name: 'VueModal',

  mixins: [Overlayable],

  props: {
    transition: String,
    overlay: Boolean,
    value: Boolean
  },

  beforeMount() {
    this.overlay && this.$nextTick(() => {
      this.genOverlay()
    })
  },

  beforeDestroy() {
    this.overlay && this.removeOverlay()
  },

  watch: {
    value() {
      this.overlay && this.toggleOverlay()
      console.log('v modale watch')
    },
  },

  methods: {
    toggleOverlay() {
      this.hideOverlay = !this.hideOverlay
    },

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
        ],
        ref: 'modal'
      }, [])
    },

    modal(): VNode {
      return this.$createElement('div', {
        staticClass: 'vue-modal',
      }, [])
    }
  },

  render(h): VNode {
    this.modal.children = this.genContent()

    this.container.children!.push(this.modal)

    return h('transition', {}, [
      this.genTransition(this.container)
    ])
  }
})
