import styled, {DefaultTheme} from 'styled-components';
import type React from 'react';
import Sizes, { SizesEnum } from '../../settings/sizes';
import type { Padding } from '../types/padding';
import { paddingMixin } from '../mixins';

interface StyledViewProps {
  background?: keyof DefaultTheme;
  borderRadius?: number;
  padding?: Padding;
  inline?: boolean;
}

const StyledView = styled.div<StyledViewProps>`
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
  ${({ padding }) => padding && `${paddingMixin(padding)}`};

  ${({ theme, background }) =>
    background && `background: ${theme[background]}`}};
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px`};
`;

interface PoochBoxProps {
  children: React.ReactNode;
  background?: keyof DefaultTheme;
  border?: SizesEnum;
  padding?: Padding;
  inline?: boolean;
}

const Component = ({
  children,
    border,
  ...props
}: PoochBoxProps) => {
  return (
    <StyledView
      borderRadius={Sizes[border!]}
      {...props}
    >
      {children}
    </StyledView>
  );
};

Component.defaultProps = {
  border: SizesEnum.Small,
  padding: { x: SizesEnum.Medium, y: SizesEnum.Small },
};

export default Component;
