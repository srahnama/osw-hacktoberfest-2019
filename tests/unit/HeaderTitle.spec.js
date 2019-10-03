import { shallowMount } from '@vue/test-utils'
import HeaderTitle from '@/components/HeaderTitle.vue'

describe('HeaderTitle.vue', () => {
  it('Render title', () => {
    const title = 'Awesome Contributors ✨'
    const wrapper = shallowMount(HeaderTitle, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
