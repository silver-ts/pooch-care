import type { NextPage } from "next";
import Head from "next/head";
import { PoochBox, PoochButton, PoochContainer, PoochList, PoochText } from "../src/ui-components";
import { PoochTextVariant } from "../src/ui-components/text";
import { SizesEnum } from "../src/settings/sizes";
import { BoxWidth, FlexAlign } from "../src/ui-components/box";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <PoochBox column alignX={FlexAlign.Center}>
          <PoochBox padding={{ y: SizesEnum.ExtraLarge }}>
            <img src="/logo.svg" alt="Pooch logo" width={200} />
          </PoochBox>
          <PoochBox padding={{ bottom: SizesEnum.Large }}>
            <PoochText variant={PoochTextVariant.LargeTitle} leading>
              Hello Hooman!
            </PoochText>
          </PoochBox>
          <PoochText>I am Pooch, your pet companion app. I will help you to take care of your pet.</PoochText>
        </PoochBox>
      </header>

      <main>
        <PoochBox padding={{ top: SizesEnum.Medium, bottom: SizesEnum.ExtraLarge }}>
          <PoochContainer>
            <PoochBox column alignX={FlexAlign.Center} width={BoxWidth.Full}>
              <PoochText noBottomMargin>Current features:</PoochText>
              <PoochBox width={BoxWidth.Full} padding={{ y: SizesEnum.Medium }}>
                <PoochList items={["Weight tracker", "Medication tracker", "Vaccination tracker"]}></PoochList>
              </PoochBox>
              <PoochText noBottomMargin>Planned features:</PoochText>
              <PoochBox width={BoxWidth.Full} padding={{ y: SizesEnum.Medium }}>
                <PoochList
                  items={[
                    "Dog park finder",
                    "Walk tinder",
                    "Dog walk tracking",
                    "AI enhanced features",
                    "and much more…",
                  ]}
                ></PoochList>
              </PoochBox>
              <PoochText variant={PoochTextVariant.Title3}>And all of this is free* and open source*!</PoochText>
              <PoochText variant={PoochTextVariant.Footnote}>
                *during alpha, after that we might introduce some paid features
              </PoochText>
            </PoochBox>
            <PoochBox alignX={FlexAlign.Center} padding={{ top: SizesEnum.Large }}>
              <PoochBox inline padding={{ x: SizesEnum.Small }}>
                <PoochButton onClick={() => router.push("/app/auth/sign-in")}>Sign in</PoochButton>
              </PoochBox>
              <PoochBox inline padding={{ x: SizesEnum.Small }}>
                <PoochButton variant="green" onClick={() => router.push("/app/auth/sign-up")}>
                  Sign up
                </PoochButton>
              </PoochBox>
            </PoochBox>
          </PoochContainer>
        </PoochBox>
      </main>
    </div>
  );
};

export default Home;
