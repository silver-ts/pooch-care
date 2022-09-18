import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage } from "react-intl";
import { LayoutAuth } from "../../../src/layout";
import { PoochBox, PoochButton, PoochInput } from "../../../src/ui-components";

const SignIn: NextPage = () => {
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
        <PoochButton onClick={() => console.debug("Sign in")}>
          <FormattedMessage id="common.sign_in" />
        </PoochButton>
      </LayoutAuth>
    </div>
  );
};

export default SignIn;
