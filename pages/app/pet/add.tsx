import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import React, { useState } from "react";
import { LayoutApp } from "../../../src/layout";
import useConfigPublic from "../../../src/api/queries/config-public";
import { PoochBox, PoochButton, PoochInput, PoochSelect } from "../../../src/ui-components";
import { PetKind } from "../../../src/types/pet-kind.types";
import { InputTypes } from "../../../src/ui-components/input";
import { ComponentPetCard } from "../../../src/component";
import { SizesEnum } from "../../../src/settings/sizes";
import { FlexAlign } from "../../../src/ui-components/box";

const App: NextPage = () => {
  const intl = useIntl();
  const { configPublic, configPublicError, refetch: refetchConfigPublic } = useConfigPublic();

  const [name, setName] = useState("");
  const [kind, setKind] = useState<PetKind>(PetKind.Dog);
  const [breedId, setBreedId] = useState<number>();
  const [microchip, setMicrochip] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const image = configPublic?.breeds.find(({ id }) => id === breedId)?.image;

  const handleAddPet = () => {
    const formData = {
      name,
      kind,
      breedId,
      microchip,
      birthDate,
    };

    // eslint-disable-next-line no-magic-numbers,no-console
    console.debug(formData);
  };

  return (
    <>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutApp title={intl.formatMessage({ id: "page.app.header" })} back>
        {configPublic && (
          <>
            <PoochBox padding={{ bottom: SizesEnum.ExtraLarge }}>
              <ComponentPetCard name={name} birthDate={new Date(birthDate)} microchip={microchip} image={image} />
            </PoochBox>
            <PoochInput value={name} onChange={setName} label={intl.formatMessage({ id: "pet.name" })} />
            <PoochSelect
              value={breedId}
              onChange={(nextValue) => setBreedId(Number(nextValue))}
              label={intl.formatMessage({ id: "pet.breed" })}
              list={configPublic.breeds.map(({ name: label, id }) => ({ id, label }))}
            />
            <PoochInput value={microchip} onChange={setMicrochip} label={intl.formatMessage({ id: "pet.microchip" })} />
            <PoochInput
              value={birthDate}
              onChange={setBirthDate}
              label={intl.formatMessage({ id: "pet.birthday" })}
              type={InputTypes.Date}
            />
            <PoochBox alignX={FlexAlign.Right}>
              <PoochButton onClick={handleAddPet} variant="green">
                <FormattedMessage id="common.add" />
              </PoochButton>
            </PoochBox>
          </>
        )}
      </LayoutApp>
    </>
  );
};

export default App;
