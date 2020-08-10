import { mount } from '@vue/test-utils'
import VueModal from '@/components/VueModal'
// import VueOverlay from '@/components/VueOverlay'

describe('VueModal.ts', () => {
  let vm: any | null = null
  beforeEach(() => {
    vm = mount(VueModal,{
      propsData: {
        overlay: true,
        valid: true
      }
    })
  })
  it('show overlay if passed to true', () => {
    expect(vm.element).toMatchSnapshot()
  })
})
