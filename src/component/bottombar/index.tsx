import styled from "styled-components";
import { PoochBox, PoochButton, PoochContainer, PoochIcon, PoochText } from "../../ui-components";
import { BoxWidth, FlexAlign } from "../../ui-components/box";
import { SizesEnum } from "../../settings/sizes";
import { PoochTextVariant } from "../../ui-components/text";

const StyledBottomBar = styled(PoochBox)`
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Item = () => (
  // eslint-disable-next-line no-console
  <PoochButton onClick={() => console.debug("Button clicked")} variant="blue">
    <PoochBox alignX={FlexAlign.Center} column>
      <PoochBox padding={{ bottom: SizesEnum.Small }}>
        <PoochIcon icon="close-circle" size={SizesEnum.Large2} />
      </PoochBox>
      <PoochText variant={PoochTextVariant.Caption2} noBottomMargin>
        Pets
      </PoochText>
    </PoochBox>
  </PoochButton>
);

const Component = () => {
  return (
    <StyledBottomBar
      alignX={FlexAlign.Center}
      alignY={FlexAlign.Center}
      width={BoxWidth.Full}
      padding={{ y: SizesEnum.Medium }}
      background="backgroundSecondary"
    >
      <PoochContainer fullWidth>
        <PoochBox alignX={FlexAlign.SpaceBetween} width={BoxWidth.Full}>
          <Item />
          <Item />
          <Item />
          <Item />
        </PoochBox>
      </PoochContainer>
    </StyledBottomBar>
  );
};

export default Component;
