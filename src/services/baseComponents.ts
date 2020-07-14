import { VueConstructor } from 'vue'
import VButton from '@/components/VButton'
import { withFunctional } from '@/utils/hoc'

export default {
  install(Vue: VueConstructor) {
    const func = withFunctional(VButton)
    console.log(func)
    Vue.component('VButton', withFunctional(VButton))
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

