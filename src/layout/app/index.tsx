import React from "react";
import { PoochBox, PoochContainer } from "../../ui-components";
import { SizesEnum } from "../../settings/sizes";
import { useRouter } from "next/router";
import { ComponentBottombar } from "../../component";

interface Props {
  children: React.ReactNode;
}

const App: React.FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <PoochBox padding={{ y: SizesEnum.Large }} column>
      <PoochContainer fullWidth>{children}</PoochContainer>
      <ComponentBottombar />
    </PoochBox>
  );
};

export default App;
