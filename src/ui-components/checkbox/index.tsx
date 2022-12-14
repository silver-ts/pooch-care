import React from "react";
import styled from "styled-components";
import { paddingMixin } from "../mixins";
import Sizes, { SizesEnum } from "../../settings/sizes";
import Box from "../box";
import { PoochIcon, PoochText } from "../index";
import { PoochTextVariant } from "../text";

interface StyledInputProps {
  checked: boolean;
}

interface Props {
  value: boolean;
  onChange: (nextValue: boolean) => void;
  label: string;
  errors?: string[];
}

const StyledInputNative = styled.input`
  display: none;
`;
const StyledInput = styled.div<StyledInputProps>`
  display: inline-block;
  width: ${Sizes[SizesEnum.Large2]}px;
  height: ${Sizes[SizesEnum.Large2]}px;
  margin-right: ${Sizes[SizesEnum.Medium]}px;
  ${paddingMixin(SizesEnum.Small)};
  background: ${({ theme, checked }) => theme.palette[checked ? "green" : "gray"]};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const Component: React.FunctionComponent<Props> = ({ label, errors, value, onChange }) => (
  <Box padding={{ bottom: SizesEnum.Medium }} column>
    <StyledLabel>
      <StyledInputNative
        type="checkbox"
        checked={value}
        onChange={({ target: { checked: nextValue } }) => onChange(nextValue)}
      />
      <StyledInput checked={value}>{value && <PoochIcon icon="checkmark" />}</StyledInput>
      <PoochText variant={PoochTextVariant.Callout}>{label}</PoochText>
    </StyledLabel>
    <Box padding={{ bottom: SizesEnum.Medium }}>
      <PoochText color="red" variant={PoochTextVariant.Caption1}>
        {(errors || []).map((error) => error).join(", ")}
      </PoochText>
    </Box>
  </Box>
);

export default Component;
