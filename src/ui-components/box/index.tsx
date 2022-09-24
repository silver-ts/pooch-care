import styled, { ThemePalette } from "styled-components";
import type React from "react";
import Sizes, { SizesEnum } from "../../settings/sizes";
import type { Padding } from "../types/padding";
import { backgroundMixin, colorTextMixin, paddingMixin } from "../mixins";

export enum FlexAlign {
  Left = "flex-start",
  Right = "flex-end",
  Center = "center",
  SpaceBetween = "space-between",
  SpaceAround = "space-around",
  SpaceEvenly = "space-evenly",
}

export enum BoxWidth {
  Full = "100%",
}

interface StyledViewProps {
  background?: ThemePalette | ThemePalette[];
  borderRadius?: number;
  width?: string;
  padding?: Padding;
  inline?: boolean;
  column?: boolean;
  justifyContent?: FlexAlign;
  alignItems?: FlexAlign;
}

const StyledView = styled.div<StyledViewProps>`
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent}` : "")};
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : "")};
  ${({ width }) => width && `width: ${width}`};
  ${({ padding }) => padding && `${paddingMixin(padding)}`};
  ${({ background }) => background && colorTextMixin(background)};
  ${({ background }) => background && backgroundMixin(background)};
  border-radius: ${({ borderRadius }) => (borderRadius ? ` ${borderRadius}px` : "0")};
`;

interface PoochBoxProps {
  children?: React.ReactNode;
  background?: ThemePalette | ThemePalette[];
  border?: SizesEnum;
  padding?: Padding;
  width?: BoxWidth;
  inline?: boolean;
  column?: boolean;
  alignX?: FlexAlign;
  alignY?: FlexAlign;
}

const Component = ({ children, border, column, alignX, alignY, ...props }: PoochBoxProps) => {
  const justifyContent = column ? alignY : alignX;
  const alignItems = column ? alignX : alignY;

  return (
    <StyledView
      borderRadius={Sizes[border!]}
      justifyContent={justifyContent}
      alignItems={alignItems}
      column={column}
      {...props}
    >
      {children}
    </StyledView>
  );
};

Component.defaultProps = {
  border: SizesEnum.Small,
  padding: { x: SizesEnum.Medium, y: SizesEnum.Small },
};

export default Component;
