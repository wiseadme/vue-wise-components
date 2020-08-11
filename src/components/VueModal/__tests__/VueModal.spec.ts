import { mount } from '@vue/test-utils'
import VueModal from '@/components/VueModal'
// import VueOverlay from '@/components/VueOverlay'

describe('VueModal.ts', () => {
  let vm: any | null = null
  beforeEach(() => {
    vm = mount(VueModal, {
      propsData: {
        overlay: true,
        valid: true
      }
    })
  })
  it('has overlay component', () => {
    expect(!!vm.findComponent(VueModal)).toBe(true)
  })

  it('show overlay if passed to true', () => {
    expect(vm.element).toMatchSnapshot()
  })
})
