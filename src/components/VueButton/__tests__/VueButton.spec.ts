import { shallowMount } from '@vue/test-utils'
import VueButton from '../VueButton'

describe('VueButton.ts', () => {
  it('renders props.text if it passed', () => {
    const text = 'button'
    const wrapper = shallowMount(VueButton, {
      propsData: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })

  it('renders button type by props.type', () => {
    const type = 'primary'
    const wrapper = shallowMount(VueButton, {
      propsData: { type }
    })
    expect(wrapper.props().type).toEqual(type)
  })

  it('make snapshot', () => {
    const wrapper = shallowMount(VueButton, {
      propsData: {
        type: 'success',
        text: 'send'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

