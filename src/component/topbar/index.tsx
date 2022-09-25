import styled from "styled-components";
import { PoochBox, PoochButton, PoochContainer, PoochText } from "../../ui-components";
import { BoxWidth, FlexAlign } from "../../ui-components/box";
import { SizesEnum } from "../../settings/sizes";
import { PoochTextVariant } from "../../ui-components/text";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  title: string;
  back?: boolean;
}

const StyledTopBar = styled(PoochBox)`
  position: fixed;
  top: 0;
  left: 0;
`;

const Component: React.FunctionComponent<Props> = ({ title, back }) => {
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
        <PoochBox alignX={FlexAlign.SpaceBetween} alignY={FlexAlign.Center} width={BoxWidth.Full}>
          {back ? (
            <PoochButton onClick={router && router.back} variant="gray6">
              <FormattedMessage id="common.back" />
            </PoochButton>
          ) : (
            <PoochBox></PoochBox>
          )}
          <PoochText variant={PoochTextVariant.Body}>{title}</PoochText>
          <PoochBox></PoochBox>
        </PoochBox>
      </PoochContainer>
    </StyledTopBar>
  );
};

export default Component;
