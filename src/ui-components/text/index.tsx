import styled from 'styled-components';

const StyledText = styled.p<{ size: number }>`
  font-size: ${(props) => props.size}px;
`;

export enum PoochTextVariant {
  LargeTitle = 'LARGE_TITLE',
  Title1 = 'TITLE_1',
  Title2 = 'TITLE_2',
  Title3 = 'TITLE_3',
  Headline = 'HEADLINE',
  Body = 'BODY',
  Callout = 'CALLOUT',
  Subhead = 'SUBHEAD',
  Footnote = 'FOOTNOTE',
  Caption1 = 'CAPTION_1',
  Caption2 = 'CAPTION_2',
}

const variantSize: {
  [key in PoochTextVariant]: { standard: number; leading: number };
} = {
  [PoochTextVariant.LargeTitle]: { standard: 34, leading: 41 },
  [PoochTextVariant.Title1]: { standard: 28, leading: 34 },
  [PoochTextVariant.Title2]: { standard: 22, leading: 28 },
  [PoochTextVariant.Title3]: { standard: 20, leading: 25 },
  [PoochTextVariant.Headline]: { standard: 17, leading: 22 },
  [PoochTextVariant.Body]: { standard: 17, leading: 22 },
  [PoochTextVariant.Callout]: { standard: 16, leading: 21 },
  [PoochTextVariant.Subhead]: { standard: 15, leading: 20 },
  [PoochTextVariant.Footnote]: { standard: 13, leading: 18 },
  [PoochTextVariant.Caption1]: { standard: 12, leading: 16 },
  [PoochTextVariant.Caption2]: { standard: 11, leading: 13 },
};

interface PoochTextProps {
  children: string;
  variant?: PoochTextVariant;
  leading?: boolean;
}

const Component = ({ children, variant, leading }: PoochTextProps) => {
  const size =
    variantSize[variant || PoochTextVariant.Body][
      leading ? 'leading' : 'standard'
    ];

  return <StyledText size={size}>{children}</StyledText>;
};

Component.defaultProps = {
  variant: PoochTextVariant.Body,
};

export default Component;
