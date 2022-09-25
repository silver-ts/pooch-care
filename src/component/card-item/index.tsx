import { PoochBox, PoochIcon, PoochText } from "../../ui-components";
import { BoxWidth, FlexAlign } from "../../ui-components/box";
import { SizesEnum } from "../../settings/sizes";
import React from "react";
import { PoochTextVariant } from "../../ui-components/text";
import styled, { ThemePalette } from "styled-components";
import { PoochIcons } from "../../ui-components/icon";

interface Props {
  children: React.ReactNode | string;
  icon: PoochIcons;
  value: number | string;
  background: ThemePalette | ThemePalette[];
}

const StyledLabels = styled(PoochBox)`
  overflow: hidden;
`;

const Component: React.FunctionComponent<Props> = ({ children, icon, value, background }) => {
  return (
    <PoochBox
      width={BoxWidth.Full}
      padding={{ y: SizesEnum.ExtraLarge, x: SizesEnum.ExtraLarge }}
      background={background}
      column
    >
      <PoochBox alignX={FlexAlign.Left} padding={{ bottom: SizesEnum.Large }}>
        <PoochIcon icon={icon} size={SizesEnum.ExtraLarge2} />
      </PoochBox>
      <StyledLabels alignX={FlexAlign.Right} alignY={FlexAlign.Bottom} width={BoxWidth.Full}>
        <PoochText noBottomMargin>{children}</PoochText>&nbsp;&nbsp;
        <PoochText variant={PoochTextVariant.LargeTitle} noBottomMargin>
          {value}
        </PoochText>
      </StyledLabels>
    </PoochBox>
  );
};

export default Component;
