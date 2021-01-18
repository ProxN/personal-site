import styled, { css } from 'styled-components';

interface FlexProps {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse' | 'unset';
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  justify?:
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'center';
  height?: string;
}

const FlexContainer = styled.div<FlexProps>`
  ${({ direction, justify, height, align }) => css`
    flex-direction: ${direction && direction};
    justify-content: ${justify && justify};
    align-items: ${align && align};
    height: ${height || 'auto'};
  `}

  display:flex;
`;

const Flex: React.FC<FlexProps> = (props) => {
  return <FlexContainer {...props} />;
};

Flex.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  align: 'stretch',
};

export default Flex;
