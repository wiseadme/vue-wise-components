import { VueConstructor } from 'vue'

// components
import VueButton from '@/components/VueButton'
import VueModal from '@/components/VueModal'
import VueChip from '@/components/VueChip'
import VueOverlay from '@/components/VueOverlay'

const components: { [key: string]: any } = {
  VueButton,
  VueModal,
  VueChip,
  VueOverlay
}

export default {
  install(Vue: VueConstructor) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })
  }
}


