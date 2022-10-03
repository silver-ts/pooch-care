/* eslint-disable no-magic-numbers */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component, { PoochTextWeight, Props } from "./index";
import { PoochTextVariant } from "../text";
import { PoochText } from "../index";
import Theme from "../../settings/theme";

type ComponentType = React.FunctionComponent<Props & { sampleText: string }>;

export default {
  title: "UI-Components/Text",
  component: Component,
  argTypes: {
    variant: { options: PoochTextVariant, control: "select" },
    weight: { options: PoochTextWeight, control: "select" },
    leading: { control: "boolean" },
    uppercase: { control: "boolean" },
    noBottomMargin: { control: "boolean" },
    color: { options: Object.keys(Theme.light.palette), control: "select" },
    sampleText: { control: "text" },
  },
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = ({ sampleText, ...args }) => (
  <Component {...args}>{sampleText}</Component>
);

const TemplateExample: ComponentStory<ComponentType> = ({ sampleText, ...args }) => (
  <table style={{ margin: "24px auto 24px" }}>
    <thead>
      <tr>
        <th>
          <strong style={{ fontWeight: "bold" }}>Variant</strong>
        </th>
        <th>
          <strong style={{ fontWeight: "bold" }}>Default</strong>
        </th>
        <th>
          <strong style={{ fontWeight: "bold" }}>Leading</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(PoochTextVariant).map(([key, value]) => (
        <tr key={key}>
          <td style={{ padding: 8 }}>{key}</td>
          <td style={{ padding: 8 }}>
            <PoochText {...args} variant={value as PoochTextVariant}>
              {sampleText}
            </PoochText>
          </td>
          <td style={{ padding: 8 }}>
            <PoochText variant={value as PoochTextVariant} leading={true}>
              {sampleText}
            </PoochText>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const Playground = Template.bind({});
Playground.args = {
  sampleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae.",
};

export const Example = TemplateExample.bind({});
Example.args = {
  sampleText: "Lorem ipsum dolor sit amet",
};
