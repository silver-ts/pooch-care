import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { LayoutApp } from "../../../../src/layout";
import { useRouter } from "next/router";
import usePetsSingle from "../../../../src/api/queries/pets-single";
import { ComponentCardItem, ComponentErrorScreen, ComponentPetCard } from "../../../../src/component";
import { PoochButton, PoochGrid } from "../../../../src/ui-components";
import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { ButtonSizes } from "../../../../src/ui-components/button";

interface EditButtonProps {
  onClick: () => void;
}

const StyledPetCard = styled.div`
  @media screen and (min-width: 900px) {
    grid-column: 1 / 4;
  }
`;

const EditButton: React.FunctionComponent<EditButtonProps> = ({ onClick }) => (
  <PoochButton onClick={onClick} size={ButtonSizes.Small}>
    <FormattedMessage id="common.edit" />
  </PoochButton>
);

const App: NextPage = () => {
  const router = useRouter();
  const intl = useIntl();

  const { id } = router.query;

  const { pet, petError, refetch } = usePetsSingle(id as string);

  return (
    <>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/Users/ablanik/Projects/Blanik.me/pooch/web-react/pooch-web-react/public/favicon.ico" />
      </Head>

      <LayoutApp
        title={intl.formatMessage({ id: "page.pet.header" })}
        back
        right={<EditButton onClick={() => router.push(`/app/pet/${id}/edit`)} />}
      >
        {pet && (
          <PoochGrid mobile={1}>
            <StyledPetCard>
              <ComponentPetCard {...pet} />
            </StyledPetCard>
            <Link href={`/app/pet/${id}/weight`}>
              <a>
                <ComponentCardItem icon="barbell" value={pet.currentWeight?.formatted ?? "—"} background="orange">
                  <FormattedMessage id="pet.weight" />
                </ComponentCardItem>
              </a>
            </Link>
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
    </>
  );
};

export default App;
