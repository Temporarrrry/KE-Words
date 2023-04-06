import { Story } from "@storybook/react";
import Input, { InputProps } from "./index";

export default {
	title: "Input",
	component: Input,
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Blue = Template.bind({});

Blue.args = {
	color: "blue",
};

export const Pink = Template.bind({});

Pink.args = {
	color: "pink",
};
