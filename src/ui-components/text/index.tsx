import styled, { DefaultTheme } from "styled-components";
import Sizes, { SizesEnum } from "../../settings/sizes";
import React from "react";

export enum PoochTextVariant {
  LargeTitle = "LARGE_TITLE",
  Title1 = "TITLE_1",
  Title2 = "TITLE_2",
  Title3 = "TITLE_3",
  Headline = "HEADLINE",
  Body = "BODY",
  Callout = "CALLOUT",
  Subhead = "SUBHEAD",
  Footnote = "FOOTNOTE",
  Caption1 = "CAPTION_1",
  Caption2 = "CAPTION_2",
}

export enum PoochTextWeight {
  Thin = "100",
  UltraLight = "200",
  Light = "300",
  Regular = "400",
  Medium = "500",
  SemiBold = "600",
  Bold = "700",
  Heavy = "800",
  Black = "900",
}

export interface StyledTextProps {
  size: number;
  weight: string;
  color: keyof DefaultTheme["palette"];
  noBottomMargin?: boolean;
}

const StyledText = styled.p<StyledTextProps>`
  margin-bottom: ${({ noBottomMargin }) => (noBottomMargin ? "0" : `${Sizes[SizesEnum.Small]}px`)};
  color: ${({ theme, color }) => theme.palette[color]};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
`;

const variantSize: {
  [key in PoochTextVariant]: { standard: number; leading: number };
} = {
  [PoochTextVariant.LargeTitle]: { standard: 34, leading: 41 },
  [PoochTextVariant.Title1]: { standard: 28, leading: 34 },
  [PoochTextVariant.Title2]: { standard: 22, leading: 28 },
  [PoochTextVariant.Title3]: { standard: 20, leading: 25 },
  [PoochTextVariant.Headline]: { standard: 17, leading: 22 },
  [PoochTextVariant.Body]: { standard: 17, leading: 22 },
  [PoochTextVariant.Callout]: { standard: 16, leading: 21 },
  [PoochTextVariant.Subhead]: { standard: 15, leading: 20 },
  [PoochTextVariant.Footnote]: { standard: 13, leading: 18 },
  [PoochTextVariant.Caption1]: { standard: 12, leading: 16 },
  [PoochTextVariant.Caption2]: { standard: 11, leading: 13 },
};

interface PoochTextProps {
  children: React.ReactNode;
  variant?: PoochTextVariant;
  weight?: PoochTextWeight;
  leading?: boolean;
  noBottomMargin?: boolean;
  color?: keyof DefaultTheme["palette"];
}

const Component = ({ children, variant, leading, weight, color, ...props }: PoochTextProps) => {
  const size = variantSize[variant || PoochTextVariant.Body][leading ? "leading" : "standard"];

  return (
    <StyledText size={size} weight={weight!} color={color!} {...props}>
      {children}
    </StyledText>
  );
};

Component.defaultProps = {
  variant: PoochTextVariant.Body,
  weight: PoochTextWeight.Regular,
  color: "text",
};

export default Component;
