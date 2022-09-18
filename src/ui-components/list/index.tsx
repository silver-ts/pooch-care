import React from "react";
import { PoochText } from "../index";
import styled from "styled-components";
import Sizes, { SizesEnum } from "../../settings/sizes";
import { PoochTextVariant } from "../text";

export interface ListProps {
  items: string[];
  textVariant?: PoochTextVariant;
}

const StyledUl = styled.ul`
  width: 100%;
`;

const StyledLi = styled.li`
  padding: ${Sizes[SizesEnum.Small]}px ${Sizes[SizesEnum.Medium]}px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray};

  &:last-child {
    border-bottom: none;
  }
`;

const List: React.FunctionComponent<ListProps> = ({ items, textVariant }) => (
  <StyledUl>
    {items.map((item, index) => (
      <StyledLi key={index}>
        <PoochText variant={textVariant}>{item}</PoochText>
      </StyledLi>
    ))}
  </StyledUl>
);

export default List;
