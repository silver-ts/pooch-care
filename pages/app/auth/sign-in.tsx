import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import { LayoutAuth } from "../../../src/layout";
import { PoochBox, PoochButton, PoochCheckbox, PoochInput, PoochModal } from "../../../src/ui-components";
import useSignIn from "../../../src/api/queries/sign-in";
import { useEffect, useState } from "react";
import { ApiStatesTypes } from "../../../src/types/api-states.types";
import { ComponentErrorScreen } from "../../../src/component";
import { useRouter } from "next/router";

const SignIn: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignIn, setKeepSignIn] = useState(false);

  const { accessToken, refreshToken, mutate, isLoading, status, errorMessage } = useSignIn();

  const [errorModalVisible, setErrorModalVisible] = useState(false);

  useEffect(() => {
    switch (status) {
      case ApiStatesTypes.Error:
        setErrorModalVisible(true);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        break;
      case ApiStatesTypes.Success:
        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
        } else {
          localStorage.removeItem("accessToken");
        }

        if (refreshToken) {
          localStorage.setItem("refreshToken", refreshToken);
        } else {
          localStorage.removeItem("refreshToken");
        }
        router.push("/app");
      default:
        setErrorModalVisible(false);
    }
  }, [status, accessToken, refreshToken]);

  return (
    <div>
      <Head>
        <title>Pooch - Your pet companion app</title>
        <meta name="description" content="Pet companion app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutAuth title="page.sign_in.header" description="page.sign_in.description">
        <PoochBox column>
          <PoochInput
            label="E-mail"
            placeholder="joe.doe@pooch.rocks"
            type="email"
            value={username}
            onChange={setUsername}
          />
          <PoochInput label="Password" type="password" value={password} onChange={setPassword} />
          <PoochCheckbox label="Keep me signed in" value={keepSignIn} onChange={setKeepSignIn} />
        </PoochBox>
        <PoochButton onClick={() => mutate({ username, password, keepSignIn })} disabled={isLoading}>
          <FormattedMessage id="common.sign_in" />
        </PoochButton>
        {errorModalVisible && (
          <PoochModal onClose={() => setErrorModalVisible(false)}>
            <ComponentErrorScreen
              title={intl.formatMessage({ id: "common.error_header" })}
              message={errorMessage || intl.formatMessage({ id: "common.error_message" })}
              onTryAgain={() => mutate({ username, password, keepSignIn })}
            />
          </PoochModal>
        )}
      </LayoutAuth>
    </div>
  );
};

export default SignIn;
