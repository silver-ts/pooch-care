import React from "react";
import { PoochBox, PoochButton, PoochIcon, PoochText } from "../../ui-components";
import { SizesEnum } from "../../settings/sizes";
import { FlexAlign } from "../../ui-components/box";
import { PoochTextVariant } from "../../ui-components/text";
import { FormattedMessage } from "react-intl";

interface Props {
  title: string;
  message: string;
  onTryAgain?: () => void;
}

const Component: React.FunctionComponent<Props> = ({ title, message, onTryAgain }) => {
  return (
    <PoochBox alignX={FlexAlign.Center} column>
      <PoochBox padding={{ bottom: SizesEnum.Medium }}>
        <PoochBox alignX={FlexAlign.Center}>
          <PoochIcon icon="warning" size={SizesEnum.ExtraLarge2} />
        </PoochBox>
      </PoochBox>
      <PoochBox>
        <PoochText variant={PoochTextVariant.Title1} leading>
          {title}
        </PoochText>
      </PoochBox>
      <PoochText variant={PoochTextVariant.Headline} leading>
        {message}
      </PoochText>
      {onTryAgain && (
        <PoochBox padding={{ top: SizesEnum.Large }}>
          <PoochButton variant="blue" onClick={onTryAgain}>
            <FormattedMessage id="common.try_again" />
          </PoochButton>
        </PoochBox>
      )}
    </PoochBox>
  );
};

export default Component;
