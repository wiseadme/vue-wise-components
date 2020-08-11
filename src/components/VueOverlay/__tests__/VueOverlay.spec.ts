import { shallowMount } from '@vue/test-utils'
import VueOverlay from '../VueOverlay'

describe('VueOverlay.ts', () => {
  const color = 'teal--darken-1'
  const opacity = .9
  let wrapper: any = null

  beforeEach(() => {
    wrapper = shallowMount(VueOverlay, {
      propsData: {
        color,
        opacity
      }
    })
  })

  it('change overlay color by props value', () => {
    expect(wrapper.find(`.${ color }`).element).toBeInstanceOf(HTMLElement)
  })

  it('contains the color class', () => {
    expect(wrapper.find(`.${ color }`).element).toMatchSnapshot()
  })
})
