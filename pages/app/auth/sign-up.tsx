import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage } from "react-intl";

const SignUp: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FormattedMessage id="common.soon" />
      </main>
    </div>
  );
};

export default SignUp;
