import { VueConstructor } from 'vue'

// components
import VueButton from '@/components/VueButton'
import VueChip from '@/components/VueChip'
import VueOverlay from '@/components/VueOverlay'
import  VueModal from '@/components/VueModal'
import {
  VueCard,
  VueCardTitle,
  VueCardActions,
  VueCardContent,
  VueCardSubtitle
} from '@/components/VueCard'

const components: { [key: string]: any } = {
  VueButton,
  VueModal,
  VueChip,
  VueOverlay,
  VueCard,
  VueCardTitle,
  VueCardActions,
  VueCardContent,
  VueCardSubtitle
}

export default {
  install(Vue: VueConstructor) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })
  }
}


