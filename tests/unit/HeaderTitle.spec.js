import { shallowMount } from '@vue/test-utils'
import HeaderTitle from '@/views/Home/HeaderTitle.vue'

describe('HeaderTitle.vue', () => {
  it('Render title', () => {
    const msg = 'Awesome Contributors ✨'
    const wrapper = shallowMount(HeaderTitle, {})
    expect(wrapper.text()).toMatch(msg)
  })
})
