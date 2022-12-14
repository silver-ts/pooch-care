import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import usePetsSingle from "../../../../../src/api/queries/pets-single";
import usePetsWeight from "../../../../../src/api/queries/pets-weight";
import { ComponentAddWeight, ComponentErrorScreen, ComponentPetCard } from "../../../../../src/component";
import { LayoutApp } from "../../../../../src/layout";
import { PoochButton, PoochGrid, PoochLineChart, PoochList } from "../../../../../src/ui-components";
import { pipeDate } from "../../../../../src/pipe";
import useConfigPrivate from "../../../../../src/api/queries/config-private";
import usePetWeightAdd from "../../../../../src/api/queries/pet-weight-add";
import { ApiStatesTypes } from "../../../../../src/types/api-states.types";
import { ButtonSizes } from "../../../../../src/ui-components/button";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FunctionComponent<AddButtonProps> = ({ onClick }) => (
  <PoochButton onClick={onClick} size={ButtonSizes.Small}>
    <FormattedMessage id="common.add" />
  </PoochButton>
);

const App: NextPage = () => {
  const router = useRouter();
  const intl = useIntl();

  const { id } = router.query;

  const [containerWidth, setContainerWidth] = useState<number>();
  const [isOpenAddWeight, setIsOpenAddWeight] = useState(false);

  const { pet, petError, refetch: refetchPet } = usePetsSingle(id as string);
  const { petsWeight, petsWeightError, refetch: refetchPetWeight } = usePetsWeight(id as string);
  const { configPrivate, configPrivateError, refetch: refetchConfigPrivate } = useConfigPrivate();
  const { mutate: mutatePetWeightAdd, status: petWeightAddStatus } = usePetWeightAdd(String(id));

  const handleChangeContainerWidth = ({ width }: { width: number }) => {
    setContainerWidth(width);
  };

  const handleTryAgain = () => {
    void refetchPet();
    void refetchPetWeight();
    void refetchConfigPrivate();
  };

  useEffect(() => {
    switch (petWeightAddStatus) {
      case ApiStatesTypes.Success:
        setIsOpenAddWeight(false);
        void refetchPetWeight();
    }
  }, [petWeightAddStatus]);

  const isFetchedData = pet && petsWeight && configPrivate;
  const isError = !isFetchedData || petError || petsWeightError || configPrivateError;

  return (
    <>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/Users/ablanik/Projects/Blanik.me/pooch/web-react/pooch-web-react/public/favicon.ico" />
      </Head>

      <LayoutApp
        title={intl.formatMessage({ id: "page.pet_weight.header" })}
        back
        right={<AddButton onClick={() => setIsOpenAddWeight(true)} />}
      >
        {!isError ? (
          <>
            <PoochGrid mobile={1} desktop={1} onSizeChange={handleChangeContainerWidth}>
              <ComponentPetCard {...pet} />
              <PoochLineChart width={containerWidth} data={petsWeight.map(({ raw, date }) => ({ x: date, y: raw }))} />
              <PoochList
                label={configPrivate.weightUnits}
                items={petsWeight.map((weight) => [weight.formatted, pipeDate(weight.date)]) ?? []}
              />
            </PoochGrid>
            {isOpenAddWeight && (
              <ComponentAddWeight
                onClose={() => setIsOpenAddWeight(false)}
                onAdd={(body) => mutatePetWeightAdd(body)}
                unit={configPrivate.weightUnits}
              />
            )}
          </>
        ) : (
          <ComponentErrorScreen message={petError?.message} onTryAgain={handleTryAgain} />
        )}
      </LayoutApp>
    </>
  );
};

export default App;
