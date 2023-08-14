import { Layouts } from "./Layouts";

export default {
  title: "Components/Layouts",
  component: Layouts,
};

const Template = (args) => <Layouts {...args} />;

export const Default = Template.bind({});
Default.args = {};
