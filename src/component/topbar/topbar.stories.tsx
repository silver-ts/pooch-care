/* eslint-disable no-magic-numbers */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./index";
import { FormattedMessage } from "react-intl";
import { PoochButton } from "../../ui-components";

export default {
  title: "Components/Top bar",
  component: Component,
  argTypes: {
    title: { control: "text" },
    back: { control: "boolean" },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (props) => <Component {...props} />;

const TemplateLeft: ComponentStory<typeof Component> = (props) => (
  <Component
    {...props}
    left={
      <PoochButton onClick={() => console.warn("Button clicked")} variant="gray6">
        <FormattedMessage id="common.back" />
      </PoochButton>
    }
  />
);

const TemplateRight: ComponentStory<typeof Component> = (props) => (
  <Component
    {...props}
    right={
      <PoochButton onClick={() => console.warn("Button clicked")} variant="gray6">
        <FormattedMessage id="common.add" />
      </PoochButton>
    }
  />
);

const TemplateBoth: ComponentStory<typeof Component> = (props) => (
  <Component
    {...props}
    left={
      <PoochButton onClick={() => console.warn("Button clicked")} variant="gray6">
        <FormattedMessage id="common.back" />
      </PoochButton>
    }
    right={
      <PoochButton onClick={() => console.warn("Button clicked")} variant="gray6">
        <FormattedMessage id="common.add" />
      </PoochButton>
    }
  />
);

export const Playground = Template.bind({});
export const PlaygroundWithLeftButton = TemplateLeft.bind({});
export const PlaygroundWithRightButton = TemplateRight.bind({});
export const PlaygroundWithBothButtons = TemplateBoth.bind({});

Playground.args = {
  title: "Main",
};

PlaygroundWithLeftButton.args = {
  title: "Main",
};

PlaygroundWithRightButton.args = {
  title: "Main",
};

PlaygroundWithBothButtons.args = {
  title: "Main",
};
