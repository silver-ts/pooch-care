/* eslint-disable no-magic-numbers */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./index";
import { PoochTextVariant } from "../text";
import { PoochBox } from "../index";
import { BoxWidth } from "../box";
import { SizesEnum } from "../../settings/sizes";

export default {
  title: "UI-Components/Sheet",
  component: Component,
  argTypes: {
    onClose: { action: "onClose()" },
    title: { control: "text" },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>
    <PoochBox width={BoxWidth.Full} padding={SizesEnum.Large2} background="indigo" />
  </Component>
);

export const Playground = Template.bind({});
Playground.args = {
  title: "Weight",
};
