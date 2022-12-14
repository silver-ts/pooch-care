import styled from "styled-components";
import { PoochBox, PoochButton, PoochContainer, PoochIcon, PoochText } from "../../ui-components";
import { BoxWidth, FlexAlign } from "../../ui-components/box";
import { SizesEnum } from "../../settings/sizes";
import { PoochTextVariant } from "../../ui-components/text";
import { PoochIcons } from "../../ui-components/icon";
import { ButtonSizes } from "../../ui-components/button";

interface ItemProps {
  active: boolean;
  icon: PoochIcons;
  name: string;
}

const StyledBottomBar = styled(PoochBox)`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1090;
`;

const Item = ({ active, icon, name }: ItemProps) => (
  // eslint-disable-next-line no-console
  <PoochButton
    onClick={() => console.warn("Button clicked")}
    variant={active ? "background" : "backgroundSecondary"}
    size={ButtonSizes.Small}
  >
    <PoochBox alignX={FlexAlign.Center} column>
      <PoochBox padding={{ bottom: SizesEnum.Small }}>
        <PoochIcon icon={icon} size={SizesEnum.Large2} color={active ? "blue" : undefined} />
      </PoochBox>
      <PoochText variant={PoochTextVariant.Caption2} noBottomMargin uppercase color={active ? "blue" : undefined}>
        {name}
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
          <Item icon="apps" name="Pets" active={true} />
          <Item icon="book" name="GDPR" active={false} />
          <Item icon="cog" name="Settings" active={false} />
        </PoochBox>
      </PoochContainer>
    </StyledBottomBar>
  );
};

export default Component;
