import type { NextPage } from "next";
import Head from "next/head";
import { LayoutApp } from "../../src/layout";
import usePetsMy from "../../src/api/queries/pets-my";
import { PoochGrid, PoochLoader } from "../../src/ui-components";
import { SizesEnum } from "../../src/settings/sizes";
import { ComponentCsr, ComponentErrorScreen, ComponentPetCard } from "../../src/component";
import Link from "next/link";

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
        <ComponentCsr>
          {isLoading && <PoochLoader fullScreen size={SizesEnum.ExtraLarge} />}
          {myPets && (
            <PoochGrid>
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
        </ComponentCsr>
      </LayoutApp>
    </div>
  );
};

export default App;
