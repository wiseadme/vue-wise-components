import { shallowMount } from '@vue/test-utils'
import VueButton from '../VueButton'

describe('VueButton.ts', () => {
  test('отрисовывает props.text, если они переданы', () => {
    const text = 'button'
    const wrapper = shallowMount(VueButton, {
      propsData: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })
})

