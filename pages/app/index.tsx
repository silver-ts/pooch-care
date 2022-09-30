import type { NextPage } from "next";
import Head from "next/head";
import { LayoutApp } from "../../src/layout";
import usePetsMy from "../../src/api/queries/pets-my";
import { PoochButton, PoochGrid, PoochLoader } from "../../src/ui-components";
import { SizesEnum } from "../../src/settings/sizes";
import { ComponentErrorScreen, ComponentPetCard } from "../../src/component";
import Link from "next/link";
import { FormattedMessage, useIntl } from "react-intl";
import React from "react";
import { useRouter } from "next/router";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FunctionComponent<AddButtonProps> = ({ onClick }) => (
  <PoochButton onClick={onClick}>
    <FormattedMessage id="common.add" />
  </PoochButton>
);

const App: NextPage = () => {
  const router = useRouter();
  const intl = useIntl();

  const { myPets, myPetsError, refetch, isLoading } = usePetsMy();

  return (
    <>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutApp
        title={intl.formatMessage({ id: "page.app.header" })}
        right={<AddButton onClick={() => router.push("/app/pet/add")} />}
      >
        {isLoading && <PoochLoader fullScreen size={SizesEnum.ExtraLarge} />}
        {myPets && (
          <PoochGrid mobile={1} desktop={2}>
            {myPets.map((pet) => (
              <Link href={`/app/pet/${pet.id}`} key={pet.id}>
                <a>
                  <ComponentPetCard {...pet} />
                </a>
              </Link>
            ))}
          </PoochGrid>
        )}
        {myPetsError && <ComponentErrorScreen message={myPetsError.message} onTryAgain={refetch} />}
      </LayoutApp>
    </>
  );
};

export default App;
