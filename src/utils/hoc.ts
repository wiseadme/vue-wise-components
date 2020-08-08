import { VNode } from 'vue/types'
// import { VNodeCreator } from '@/types'

export const withFunctional = <T>(component: T) => ({
  functional: true,
  name: 'withFunctional',
  render(h: Function, context: any): VNode {
    return h(
      component,
      {
        ...context.data
      },
      context.children
    )
  }
})
