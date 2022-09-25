import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { LayoutApp } from "../../../../src/layout";
import { useRouter } from "next/router";
import usePetsSingle from "../../../../src/api/queries/pets-single";
import { ComponentCardItem, ComponentCsr, ComponentErrorScreen, ComponentPetCard } from "../../../../src/component";
import { PoochGrid, PoochLineChart, PoochList } from "../../../../src/ui-components";
import styled from "styled-components";
import usePetsWeight from "../../../../src/api/queries/pets-weight";
import { pipeDate } from "../../../../src/pipe";
import { createRef } from "react";

const StyledPetCard = styled.div`
  @media screen and (min-width: 900px) {
    grid-column: 1 / 2;
  }
`;

const App: NextPage = () => {
  const router = useRouter();
  const intl = useIntl();

  const { id } = router.query;

  const { pet, petError, refetch: refetchPet } = usePetsSingle(id as string);
  const { petsWeight, petsWeightError, refetch: refetchPetWeight } = usePetsWeight(id as string);

  const handleTryAgain = () => {
    void refetchPet();
    void refetchPetWeight();
  };

  return (
    <ComponentCsr>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/Users/ablanik/Projects/Blanik.me/pooch/web-react/pooch-web-react/public/favicon.ico" />
      </Head>

      <LayoutApp title={intl.formatMessage({ id: "page.pet_weight.header" })} back>
        {pet && petsWeight && (
          <PoochGrid mobile={1} desktop={1}>
            <StyledPetCard>
              <ComponentPetCard {...pet} />
            </StyledPetCard>
            <PoochLineChart
              data={petsWeight.map(({ raw, formatted, date }) => ({ x: date, y: raw, labelY: formatted }))}
            />
            <PoochList label="KG" items={petsWeight.map((weight) => [weight.formatted, pipeDate(weight.date)]) ?? []} />
          </PoochGrid>
        )}
        {(petError || petsWeightError) && (
          <ComponentErrorScreen message={petError?.message} onTryAgain={handleTryAgain} />
        )}
      </LayoutApp>
    </ComponentCsr>
  );
};

export default App;
