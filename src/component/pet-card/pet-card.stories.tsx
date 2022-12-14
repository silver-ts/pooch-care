/* eslint-disable no-magic-numbers */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Component from "./index";
import styled from "styled-components";
import { PetKind } from "../../types/pet-kind.types";

export default {
  title: "Components/Pet card",
  component: Component,
  argTypes: {
    id: { control: "text" },
    name: { control: "text" },
    kind: { options: PetKind, control: "select" },
    microchip: { control: "text" },
    image: { control: "text" },
    createdAt: { control: "date" },
    currentWeight: { control: "object" },
    birthDate: { control: "date" },
    vaccinations: { control: "number" },
    medicines: { control: "number" },
    breed: { control: "object" },
    updatedAt: { control: "date" },
  },
} as ComponentMeta<typeof Component>;

const StyledWrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
`;

const Template: ComponentStory<typeof Component> = (props) => (
  <StyledWrapper>
    <Component {...props} />
  </StyledWrapper>
);

export const Playground = Template.bind({});
Playground.args = {
  name: "Testie",
  microchip: "123456789",
  image: "https://placedog.net/1920?random",
  birthDate: new Date("2020-02-12"),
  breed: {
    id: 1,
    name: "Standard Schnauzer",
    group: "Working",
    section: "Gundogs",
    provisional: "No",
    country: "Germany",
    url: "https://en.wikipedia.org/wiki/Standard_Schnauzer",
    image: "https://images.dog.ceo/breeds/schnauzer-standard/n02097298_1003.jpg",
    pdf: "https://en.wikipedia.org/wiki/Standard_Schnauzer",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};
