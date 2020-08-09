// Vue constructor
import Vue from 'vue'

// components
import VueOverlay from '@/components/VueOverlay'

// helpers
import { addOnceEventListener } from '@/helpers'

export default Vue.extend({
  name: 'overlayable',

  data() {
    return {
      overlayComponent: null as InstanceType<typeof VueOverlay> | null,
      hideOverlay: false,
    }
  },

  watch: {
    hideOverlay(value: boolean) {
      value && this.removeOverlay()
      !value && this.genOverlay()
    },
  },

  methods: {
    createOverlay() {
      const overlay = new VueOverlay()
      overlay.$mount()

      const parent = this.$el.parentNode
      parent && parent.insertBefore(overlay.$el, parent.firstChild)

      this.overlayComponent = overlay

      setTimeout(() => {
        this.overlayComponent!.active = true
      }, 50)
    },

    genOverlay() {
      if (this.hideOverlay) return
      this.createOverlay()
    },

    removeOverlay() {
      if (this.overlayComponent) {
        this.overlayComponent!.hide = true
        this.overlayComponent!.active = false

        addOnceEventListener(
          this.overlayComponent.$el,
          'transitionend',
          () => {
            if (!this.overlayComponent || !this.overlayComponent.$el) return

            this.overlayComponent!.$el.parentNode!.removeChild(this.overlayComponent!.$el)
            this.overlayComponent!.$destroy()
            this.overlayComponent = null
          }
        )
      }
    },
  }
})
