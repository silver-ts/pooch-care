/* eslint-disable no-magic-numbers */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./index";
import { PoochContainer } from "../../ui-components";

export default {
  title: "UI Components/Grid",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = () => (
  <PoochContainer fullWidth>
    <Component>
      <p>Lorem</p>
      <p>Ipsum</p>
      <p>Dolor</p>
      <p>Sit</p>
      <p>Amet</p>
    </Component>
  </PoochContainer>
);

export const Playground = Template.bind({});
