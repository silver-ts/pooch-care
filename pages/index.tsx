import type { NextPage } from "next";
import Head from "next/head";
import { PoochBox, PoochButton, PoochContainer, PoochList, PoochText } from "../src/ui-components";
import { PoochTextVariant } from "../src/ui-components/text";
import { SizesEnum } from "../src/settings/sizes";
import { BoxWidth, FlexAlign } from "../src/ui-components/box";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { useSignedIn } from "../src/hooks";

const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();
  const signedIn = useSignedIn();

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
              <FormattedMessage id="page.home.head.title" />
            </PoochText>
          </PoochBox>
          <PoochText>
            <FormattedMessage id="page.home.head.description" />
          </PoochText>
        </PoochBox>
      </header>

      <main>
        <PoochBox padding={{ top: SizesEnum.Medium, bottom: SizesEnum.ExtraLarge }}>
          <PoochContainer>
            <PoochBox column alignX={FlexAlign.Center} width={BoxWidth.Full}>
              <PoochText noBottomMargin>
                <FormattedMessage id="page.home.main.current_features" />
              </PoochText>
              <PoochBox width={BoxWidth.Full} padding={{ y: SizesEnum.Medium }}>
                <PoochList
                  items={[
                    intl.formatMessage({ id: "page.home.main.features_list.weight" }),
                    intl.formatMessage({ id: "page.home.main.features_list.medications" }),
                    intl.formatMessage({ id: "page.home.main.features_list.vaccination" }),
                  ]}
                ></PoochList>
              </PoochBox>
              <PoochText noBottomMargin>
                <FormattedMessage id="page.home.main.planned_features_list" />
              </PoochText>
              <PoochBox width={BoxWidth.Full} padding={{ y: SizesEnum.Medium }}>
                <PoochList
                  items={[
                    intl.formatMessage({ id: "page.home.main.features_list.dog_park" }),
                    intl.formatMessage({ id: "page.home.main.features_list.walk_tinder" }),
                    intl.formatMessage({ id: "page.home.main.features_list.dog_walk_tracking" }),
                    intl.formatMessage({ id: "page.home.main.features_list.ai_enhanced" }),
                    intl.formatMessage({ id: "page.home.main.features_list.more" }),
                  ]}
                ></PoochList>
              </PoochBox>
              <PoochText variant={PoochTextVariant.Title3}>
                <FormattedMessage id="page.home.main.price" />
              </PoochText>
              <PoochText variant={PoochTextVariant.Footnote}>
                <FormattedMessage id="page.home.main.price_details" />
              </PoochText>
            </PoochBox>
            <PoochBox alignX={FlexAlign.Center} padding={{ top: SizesEnum.Large }}>
              {signedIn ? (
                <PoochButton onClick={() => router.push("/app")}>
                  <FormattedMessage id="common.open_app" />
                </PoochButton>
              ) : (
                <>
                  <PoochBox inline padding={{ x: SizesEnum.Small }}>
                    <PoochButton onClick={() => router.push("/app/auth/sign-in")}>
                      <FormattedMessage id="common.sign_in" />
                    </PoochButton>
                  </PoochBox>
                  <PoochBox inline padding={{ x: SizesEnum.Small }}>
                    <PoochButton variant="green" onClick={() => router.push("/app/auth/sign-up")}>
                      <FormattedMessage id="common.sign_up" />
                    </PoochButton>
                  </PoochBox>
                </>
              )}
            </PoochBox>
          </PoochContainer>
        </PoochBox>
      </main>
    </div>
  );
};

export default Home;
