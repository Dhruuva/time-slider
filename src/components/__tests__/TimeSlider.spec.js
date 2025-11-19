import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TimeSlider from '../TimeSlider.vue'

describe('TimeSlider', () => {
  it('renders properly', () => {
    const wrapper = mount(TimeSlider, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello TimeSlider')
  })
})
