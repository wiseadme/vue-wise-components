import { VNode } from 'vue/types'
import { VNodeCreator } from '@/Types'

export const withFunctional = <T>(component: T) => ({
  functional: true,
  name: 'withFunctional',
  render(h: VNodeCreator<(...arg: any[]) => VNode>, context: any): VNode {
    return h(
      component,
      {
        ...context.data
      },
      context.children
    )
  }
})
