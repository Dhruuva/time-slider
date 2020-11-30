// "sideEffects": false

import { shallowMount } from "@vue/test-utils";
import TimeSlider from "@/components/TimeSlider.vue";

describe("TimeSlider.vue", () => {
  it("has svg", () => {
    const wrapper = shallowMount(TimeSlider);
    expect(wrapper.contains("svg")).toBe(true);
  });

  it("renders props.tickCount when passed", () => {
    const tickCount = "16";
    const wrapper = shallowMount(TimeSlider, {
      propsData: { tickCount }
    });
    expect(wrapper.text()).toMatch(tickCount);
  });
});
