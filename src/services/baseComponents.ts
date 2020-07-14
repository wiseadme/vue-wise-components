import { VueConstructor } from 'vue'
import VButton from '@/components/VButton'

export default {
  install(Vue: VueConstructor) {
    Vue.component('VButton', VButton)
  }
}


// export default function () {
//   // @ts-ignore
//   const requireComponent = require.context('@/components/', true, /\.ts$/)
//
//   requireComponent.keys().forEach((fileName: string) => {
//     let baseComponentConfig = requireComponent(fileName)
//     baseComponentConfig = baseComponentConfig.default || baseComponentConfig
//
//     const baseComponentName: string =
//       baseComponentConfig.name ||
//       fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
//
//     Vue.component(baseComponentName, baseComponentConfig)
//   })
// }

