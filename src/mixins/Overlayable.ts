// Vue constructor
import Vue from 'vue'

// Components
import VueOverlay from '@/components/VueOverlay'

// Helpers
import { addOnceEventListener } from '@/helpers'

export default Vue.extend({
  name: 'overlayable',
  props: {
    overlayOpacity: [Number, String],
    overlayColor: {
      type: String,
      default: () => {
        return 'white--base'
      }
    }
  },

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
        this.overlayComponent!.opacity = this.overlayOpacity
        this.overlayComponent!.color = this.overlayColor
      }, 50)
    },

    genOverlay() {
      if (this.hideOverlay && this.overlayComponent) return
      this.createOverlay()
    },

    removeOverlay() {
      if (this.overlayComponent) {
        this.overlayComponent!.hide = true
        this.overlayComponent!.active = false
        this.overlayComponent!.opacity = ''

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
