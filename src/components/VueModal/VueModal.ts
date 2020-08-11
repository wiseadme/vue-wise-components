// Styles
import './VueModal.scss'

// Types
import { VNode } from 'vue/types'
import { mixins } from '@/utils/mixins'

// Mixins
import Overlayable from '@/mixins/Overlayable'

export default mixins(Overlayable).extend({
  name: 'VueModal',

  props: {
    transition: String,
    overlay: Boolean,
    value: Boolean,
    width: [String, Number],
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
        style: { maxWidth: this.width + 'px' },
      }, this.$slots.default)
    }
  },

  render(h): VNode {
    this.container.children!.push(this.modal)

    return h('transition', {}, [
      this.genTransition(this.container)
    ])
  }
})
