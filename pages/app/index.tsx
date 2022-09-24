import type { NextPage } from "next";
import Head from "next/head";
import { LayoutApp } from "../../src/layout";
import usePetsMy from "../../src/api/queries/pets-my";
import PetCardGrid from "../../src/component/pet-card-grid";
import ErrorScreen from "../../src/component/error-screen";
import { PoochLoader } from "../../src/ui-components";
import { SizesEnum } from "../../src/settings/sizes";

const App: NextPage = () => {
  const { myPets, myPetsError, refetch, isLoading } = usePetsMy();

  return (
    <div>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutApp>
        {isLoading && <PoochLoader fullScreen size={SizesEnum.ExtraLarge} />}
        {myPets && <PetCardGrid pets={myPets} />}
        {myPetsError && <ErrorScreen message={myPetsError.message} onTryAgain={refetch} />}
      </LayoutApp>
    </div>
  );
};

export default App;
