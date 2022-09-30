import styled from "styled-components";
import { PoochBox, PoochContainer, PoochGrid, PoochText } from "../../ui-components";
import { BoxWidth, FlexAlign } from "../../ui-components/box";
import { SizesEnum } from "../../settings/sizes";
import { PoochTextVariant } from "../../ui-components/text";
import React from "react";
import { GridAlign } from "../../ui-components/grid";
import { sizeMixin } from "../../ui-components/mixins";

interface Props {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const StyledTopBar = styled(PoochBox)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1090;
  min-height: ${sizeMixin(SizesEnum.ExtraLarge2)};
`;

const StyledTopBarLeft = styled.div`
  justify-self: start;
`;

const StyledTopBarRight = styled.div`
  justify-self: end;
`;

const Component: React.FunctionComponent<Props> = ({ title, left, right }) => (
  <StyledTopBar
    alignX={FlexAlign.Center}
    alignY={FlexAlign.Center}
    width={BoxWidth.Full}
    padding={{ y: SizesEnum.Medium }}
    background="backgroundSecondary"
  >
    <PoochContainer fullWidth>
      <PoochGrid mobile={3} desktop={3} alignX={GridAlign.Center} alignY={GridAlign.Center}>
        <StyledTopBarLeft>{left}</StyledTopBarLeft>
        <PoochText variant={PoochTextVariant.Body}>{title}</PoochText>
        <StyledTopBarRight>{right}</StyledTopBarRight>
      </PoochGrid>
    </PoochContainer>
  </StyledTopBar>
);

export default Component;
