import styled from "styled-components";
import { PoochBox, PoochButton, PoochContainer, PoochIcon, PoochText } from "../../ui-components";
import { BoxWidth, FlexAlign } from "../../ui-components/box";
import { SizesEnum } from "../../settings/sizes";
import { PoochTextVariant } from "../../ui-components/text";
import { PoochIcons } from "../../ui-components/icon";

interface ItemProps {
  active: boolean;
  icon: PoochIcons;
  name: string;
  disabled?: boolean;
}

const StyledBottomBar = styled(PoochBox)`
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Item = ({ active, icon, name, disabled }: ItemProps) => (
  // eslint-disable-next-line no-console
  <PoochButton
    onClick={() => console.warn("Button clicked")}
    variant={active ? "background" : "backgroundSecondary"}
    disabled={disabled}
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
          <Item icon="book" name="GDPR" active={false} disabled />
          <Item icon="cog" name="Settings" active={false} disabled />
        </PoochBox>
      </PoochContainer>
    </StyledBottomBar>
  );
};

export default Component;
