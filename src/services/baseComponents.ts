import { VueConstructor } from 'vue'
import { withFunctional } from '@/utils/hoc'

// components
import VButton from '@/components/VButton'

export default {
  install(Vue: VueConstructor) {
    Vue.component('VButton', withFunctional(VButton))
  }
}


