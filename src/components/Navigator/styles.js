import styled from 'styled-components';
import { metrics } from '../../constants/metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  height: ${metrics.headerHeight}px;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({ fixed }) => (fixed ? 'position: fixed; top: 0;' : '')};
`;
