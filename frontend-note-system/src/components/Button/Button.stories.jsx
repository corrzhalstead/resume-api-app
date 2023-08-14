import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Edit = Template.bind({});
Edit.args = {
  text: "Edit",
};

export const Sort = Template.bind({});
Sort.args = {
  text: "Sort",
};

export const Save = Template.bind({});
Save.args = {
  text: "Save",
};

export const Cancel = Template.bind({});
Cancel.args = {
  text: "Cancel",
};

export const Reset = Template.bind({});
Reset.args = {
  text: "Reset",
};
