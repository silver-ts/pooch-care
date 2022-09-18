import React from "react";
import { PoochBox, PoochButton, PoochContainer, PoochText } from "../../ui-components";
import { SizesEnum } from "../../settings/sizes";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { BoxWidth, FlexAlign } from "../../ui-components/box";
import { PoochTextVariant } from "../../ui-components/text";

interface AuthProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Auth: React.FunctionComponent<AuthProps> = ({ children, title, description }) => {
  const router = useRouter();

  return (
    <PoochBox padding={{ y: SizesEnum.Large }}>
      <PoochContainer fullWidth>
        <PoochBox width={BoxWidth.Full} padding={{ y: SizesEnum.Large }}>
          <PoochButton onClick={() => router.push("/")} variant="indigo">
            ⬅ <FormattedMessage id="common.back" />
          </PoochButton>
        </PoochBox>

        <PoochBox
          column
          alignX={FlexAlign.Center}
          width={BoxWidth.Full}
          padding={{ x: SizesEnum.ExtraLarge, y: SizesEnum.Large }}
          background="backgroundSecondary"
        >
          <PoochBox alignX={FlexAlign.Center} padding={{ bottom: SizesEnum.Large }} column>
            <PoochBox padding={{ bottom: SizesEnum.Small }}>
              <PoochText variant={PoochTextVariant.Title1}>
                <FormattedMessage id={title} />
              </PoochText>
            </PoochBox>
            <PoochText variant={PoochTextVariant.Headline}>
              <FormattedMessage id={description} />
            </PoochText>
          </PoochBox>
          <PoochBox alignX={FlexAlign.Center} column>
            {children}
          </PoochBox>
        </PoochBox>
      </PoochContainer>
    </PoochBox>
  );
};

export default Auth;
