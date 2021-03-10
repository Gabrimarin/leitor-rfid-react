import styled from 'styled-components';
import { colors } from '../../constants';

const ContentTitle = styled.p`
  align-self: flex-start;
  color: ${colors.brown};
  font-size: ${({ size }) => size || 35}px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin: ${({ margin }) => margin || 10};
`;

export default ContentTitle;
