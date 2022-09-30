import React from "react";
import { PoochBox, PoochButton, PoochContainer } from "../../ui-components";
import { SizesEnum } from "../../settings/sizes";
import { ComponentBottombar, ComponentTopbar } from "../../component";
import styled from "styled-components";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

interface Props {
  children: React.ReactNode;
  title: string;
  back?: boolean;
  right?: React.ReactNode;
}

const StyledLayout = styled(PoochBox)`
  padding-top: 80px;
  padding-bottom: 120px;
`;

const AppBackButton: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <PoochButton onClick={router.back}>
      <FormattedMessage id="common.back" />
    </PoochButton>
  );
};

const App: React.FunctionComponent<Props> = ({ children, title, back, right }) => {
  return (
    <>
      <StyledLayout padding={{ y: SizesEnum.Large }} column>
        <ComponentTopbar title={title} left={back && <AppBackButton />} right={right} />
        <PoochContainer fullWidth>{children}</PoochContainer>
        <ComponentBottombar />
      </StyledLayout>
    </>
  );
};

export default App;
