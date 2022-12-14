import React from "react";
import styled from "styled-components";
import Container from "../container";
import Box, { BoxWidth } from "../box";
import { SizesEnum } from "../../settings/sizes";
import Button from "../button";
import { firstElement, toRgba } from "bme-utils";
import Grid, { GridAlign } from "../grid";
import { PoochText } from "../index";
import { PoochTextVariant } from "../text";
import { FormattedMessage } from "react-intl";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
  right?: React.ReactNode;
}

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => toRgba(theme.palette.background, theme.modalBackgroundOpacity)};
  backdrop-filter: blur(5px);
`;

const StyledModalWindow = styled(Box)`
  max-width: 100%;
  height: 95vh;
`;

const StyledTopBar = styled(Grid)`
  width: 100%;
`;

const StyledTopBarLeft = styled.div`
  justify-self: start;
`;

const StyledTopBarRight = styled.div`
  justify-self: end;
`;

const MIN_SWIPE_DISTANCE = 30;

const Component: React.FunctionComponent<Props> = ({ children, onClose, title, right }) => {
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(firstElement(Array.from(event.touches))?.clientX ?? null);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(firstElement(Array.from(event.touches))?.clientX ?? null);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return;
    }

    const distance = touchEnd - touchStart;
    const isSwipeDown = distance > MIN_SWIPE_DISTANCE;

    if (!isSwipeDown) {
      return;
    }

    onClose();
  };

  return (
    <StyledModalBackdrop onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <Container fullWidth>
        <StyledModalWindow
          width={BoxWidth.Full}
          padding={{ x: SizesEnum.Medium, y: SizesEnum.Large }}
          background="backgroundSecondary"
          column
        >
          <Box width={BoxWidth.Full} padding={{ top: SizesEnum.Medium, bottom: SizesEnum.Large }}>
            <StyledTopBar mobile={3} desktop={3} alignX={GridAlign.Center} alignY={GridAlign.Center}>
              <StyledTopBarLeft>
                <Button onClick={onClose}>
                  <FormattedMessage id="common.cancel" />
                </Button>
              </StyledTopBarLeft>
              <PoochText variant={PoochTextVariant.Body}>{title}</PoochText>
              <StyledTopBarRight>{right}</StyledTopBarRight>
            </StyledTopBar>
          </Box>
          {children}
        </StyledModalWindow>
      </Container>
    </StyledModalBackdrop>
  );
};

export default Component;
