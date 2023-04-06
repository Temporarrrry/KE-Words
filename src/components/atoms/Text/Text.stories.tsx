import { Story } from "@storybook/react";
import Text, { TextProps } from "./index";

export default {
	title: "Text",
	component: Text,
};

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Blue = Template.bind({});

Blue.args = {
	color: "blue",
};

export const Pink = Template.bind({});

Pink.args = {
	color: "pink",
};
