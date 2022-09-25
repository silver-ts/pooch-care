import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage } from "react-intl";
import { LayoutApp } from "../../../src/layout";
import { useRouter } from "next/router";
import usePetsSingle from "../../../src/api/queries/pets-single";
import { ComponentCardItem, ComponentCsr, ComponentErrorScreen, ComponentPetCard } from "../../../src/component";
import { PoochGrid } from "../../../src/ui-components";
import styled from "styled-components";

const StyledPetCard = styled.div`
  @media screen and (min-width: 900px) {
    grid-column: 1 / 4;
  }
`;

const App: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { pet, petError, refetch } = usePetsSingle(id as string);

  return (
    <ComponentCsr>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutApp>
        {pet && (
          <PoochGrid mobile={1}>
            <StyledPetCard>
              <ComponentPetCard {...pet} />
            </StyledPetCard>
            <ComponentCardItem icon="barbell" value={pet.currentWeight?.formatted ?? "—"} background="orange">
              <FormattedMessage id="pet.weight" />
            </ComponentCardItem>
            <ComponentCardItem icon="medical" value={pet.vaccinations ?? "—"} background="blue">
              <FormattedMessage id="pet.vaccinations" />
            </ComponentCardItem>
            <ComponentCardItem icon="medkit" value={pet.medicines ?? "—"} background="green">
              <FormattedMessage id="pet.medications" />
            </ComponentCardItem>
          </PoochGrid>
        )}
        {petError && <ComponentErrorScreen message={petError?.message} onTryAgain={refetch} />}
      </LayoutApp>
    </ComponentCsr>
  );
};

export default App;