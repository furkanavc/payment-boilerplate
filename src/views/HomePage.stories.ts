import HomePage from "./HomePage.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Forms/Home Page",
  decorators: [() => ({ template: "<div class='m-5'><story/></div>" })],
  argTypes: {
    colorBg: { control: "color" },
  },
};

const Template: Story = (args) => ({
  components: { HomePage },
  setup() {
    return { args };
  },

  template: "<HomePage v-bind='args'/>",
});

export const Primary = Template.bind({});
Primary.args = {
  addButtonText: "deneme",
};
