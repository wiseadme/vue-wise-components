import { VueConstructor } from 'vue'

// components
import VueButton from '@/components/VueButton'
import VueModal from '@/components/VueModal'

const components: object = {
  VueButton,
  VueModal
}

export default {
  install(Vue: VueConstructor) {
    Object.keys(components).forEach(key => {
      // @ts-ignore
      Vue.component(key, components[key])
    })
  }
}


