import { VueConstructor } from 'vue'

// components
import VueButton from '@/components/VueButton'
import VueModal from '@/components/VueModal'
import VueChips from '@/components/VueChip/VueChip'

const components: object = {
  VueButton,
  VueModal,
  VueChip: VueChips
}

export default {
  install(Vue: VueConstructor) {
    Object.keys(components).forEach(key => {
      // @ts-ignore
      Vue.component(key, components[key])
    })
  }
}


