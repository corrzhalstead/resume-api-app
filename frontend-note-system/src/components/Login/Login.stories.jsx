import { Login } from "./Login";

export default {
  title: "Components/Login",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
