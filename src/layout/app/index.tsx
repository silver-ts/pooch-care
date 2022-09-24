import React from "react";
import { PoochBox, PoochContainer } from "../../ui-components";
import { SizesEnum } from "../../settings/sizes";
import { useRouter } from "next/router";
import { ComponentBottombar } from "../../component";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledLayout = styled(PoochBox)`
  padding-bottom: 120px;
`;

const App: React.FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <StyledLayout padding={{ y: SizesEnum.Large }} column>
      <PoochContainer fullWidth>{children}</PoochContainer>
      <ComponentBottombar />
    </StyledLayout>
  );
};

export default App;
