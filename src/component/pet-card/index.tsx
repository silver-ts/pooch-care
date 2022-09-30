import { PoochAvatar, PoochBox, PoochText } from "../../ui-components";
import { BoxWidth, FlexAlign } from "../../ui-components/box";
import { SizesEnum } from "../../settings/sizes";
import React from "react";
import { PoochTextVariant } from "../../ui-components/text";
import { FormattedMessage } from "react-intl";
import { pipeAge, pipeDate } from "../../pipe";
import { ThemePalette } from "styled-components";
import { Breed } from "../../types/breed.types";

interface Props {
  name: string;
  microchip: string;
  image?: string;
  birthDate: Date;
  breed?: Breed;
  background?: [ThemePalette, ThemePalette];
}

// const availableBackgrounds: ThemePalette[][] = [
//   ["indigo", "blue"],
//   ["red", "indigo"],
//   ["red", "purple"],
//   ["indigo", "purple"],
//   ["blue", "cyan"],
// ];

const Component: React.FunctionComponent<Props> = ({ name, birthDate, microchip, breed, image, background }) => (
  <PoochBox
    width={BoxWidth.Full}
    padding={{ y: SizesEnum.ExtraLarge, x: SizesEnum.ExtraLarge }}
    background={background ?? ["indigo", "blue"]}
    column
  >
    <PoochBox alignX={FlexAlign.SpaceBetween} padding={{ bottom: SizesEnum.Medium }}>
      <PoochText variant={PoochTextVariant.LargeTitle}>{name}</PoochText>
      <PoochAvatar alt="Avatar" size={SizesEnum.ExtraLarge}>
        {image}
      </PoochAvatar>
    </PoochBox>
    <PoochBox width={BoxWidth.Full} column>
      <PoochText>
        <FormattedMessage id="pet.age" />: {pipeAge(birthDate)}
      </PoochText>
      <PoochText>
        <FormattedMessage id="pet.birthday" />: {pipeDate(birthDate)}
      </PoochText>
      <PoochText>
        <FormattedMessage id="pet.microchip" />: {microchip}
      </PoochText>
      <PoochText>
        <FormattedMessage id="pet.breed" />: {breed?.name ?? <FormattedMessage id="pet.breed.mixed" />}
      </PoochText>
    </PoochBox>
  </PoochBox>
);

export default Component;
