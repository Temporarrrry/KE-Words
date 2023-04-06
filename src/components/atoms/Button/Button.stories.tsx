import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
	title: "Button",
	component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Bg = Template.bind({});

Bg.args = {
	buttonType: "bg",
};

export const Border = Template.bind({});

Border.args = {
	buttonType: "border",
};
