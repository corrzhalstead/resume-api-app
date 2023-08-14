import Public from "./Public";

export default {
  title: "Components/Public",
  component: Public,
};

const Template = (args) => <Public {...args} />;

export const Default = Template.bind({});
Default.args = {};
