import { VueConstructor } from 'vue'
import { withFunctional } from '@/utils/hoc'

// components
import VButton from '@/components/VButton'

const components: object = {
  VButton
}

export default {
  install(Vue: VueConstructor) {
    Object.keys(components).forEach(key => {
      // @ts-ignore
      Vue.component(key, withFunctional(components[key]))
    })
  }
}


