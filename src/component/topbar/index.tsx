import styled from "styled-components";
import { PoochBox, PoochButton, PoochContainer, PoochGrid, PoochText } from "../../ui-components";
import { BoxWidth, FlexAlign } from "../../ui-components/box";
import { SizesEnum } from "../../settings/sizes";
import { PoochTextVariant } from "../../ui-components/text";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import React from "react";
import { GridAlign } from "../../ui-components/grid";

interface Props {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const StyledTopBar = styled(PoochBox)`
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledTopBarLeft = styled.div`
  justify-self: start;
`;

const StyledTopBarRight = styled.div`
  justify-self: end;
`;

const Component: React.FunctionComponent<Props> = ({ title, left, right }) => {
  const router = useRouter();

  return (
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
};

export default Component;
