import Vue from 'vue'

import VueOverlay from '@/components/VueOverlay'
import { addOnceEventListener } from '@/helpers'

export default Vue.extend({
  name: 'overlayable',

  data() {
    return {
      overlay: null as InstanceType<typeof VueOverlay> | null,
      hideOverlay: false,
    }
  },

  watch: {
    hideOverlay(value: boolean) {
      if (value) {
        this.removeOverlay()
      } else {
        this.genOverlay()
      }
    },
  },

  beforeMount() {
    this.$nextTick(() => this.genOverlay())
  },

  beforeDestroy() {
    this.removeOverlay()
  },

  methods: {
    createOverlay() {
      const overlay = new VueOverlay({})
      overlay.$mount()

      const parent = this.$el.parentNode
      parent && parent.insertBefore(overlay.$el, this.$el)

      this.overlay = overlay

      setTimeout(() => {
        this.overlay!.active = true
      }, 50)
    },

    genOverlay() {
      if (this.hideOverlay) return
      this.createOverlay()
    },

    removeOverlay() {
      if (this.overlay) {
        this.overlay!.hide = true
        this.overlay!.active = false
        addOnceEventListener(
          this.overlay.$el,
          'transitionend',
          () => {

            if (!this.overlay || !this.overlay.$el) return

            this.overlay!.$el.parentNode!.removeChild(this.overlay!.$el)
            this.overlay!.$destroy()
            this.overlay = null
          }
        )
      }
    },
  }
})
