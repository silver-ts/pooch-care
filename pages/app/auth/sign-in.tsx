import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage } from "react-intl";
import { LayoutAuth } from "../../../src/layout";
import { PoochBox, PoochButton, PoochInput, PoochText } from "../../../src/ui-components";
import useSignIn from "../../../src/api/queries/sign-in";
import { useEffect } from "react";
import { BoxWidth } from "../../../src/ui-components/box";

const SignIn: NextPage = () => {
  const { accessToken, refreshToken, mutate, status, errorMessage } = useSignIn();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.debug(accessToken, refreshToken);
  });

  return (
    <div>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutAuth title="page.sign_in.header" description="page.sign_in.description">
        <PoochBox column>
          <PoochInput label="E-mail" placeholder="joe.doe@pooch.rocks" type="email" errors={["Wrong e-mail format"]} />
          <PoochInput
            label="Password"
            type="password"
            errors={["Passwords are not the same", "Password do not pass requirements"]}
          />
        </PoochBox>
        {/* eslint-disable-next-line no-console */}
        <PoochButton onClick={() => mutate({ username: "amadeusz@blanik.me", password: "Passw0rd!1" })}>
          <FormattedMessage id="common.sign_in" />
        </PoochButton>
        <PoochBox width={BoxWidth.Full} background="purple" column>
          <PoochText>{status}</PoochText>
          <PoochText>{accessToken}</PoochText>
          <PoochText>{refreshToken}</PoochText>
          <PoochText>{errorMessage}</PoochText>
        </PoochBox>
      </LayoutAuth>
    </div>
  );
};

export default SignIn;
