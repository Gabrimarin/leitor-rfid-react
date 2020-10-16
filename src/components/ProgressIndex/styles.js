import styled from 'styled-components';
import { colors } from '../../constants';

export const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  flex-direction: row;
  width: 100%;
  height: 15px;
  background: ${colors.darkBlue};
`;

export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  flex-direction: row;
  width: ${({ progress }) => progress}%;
  height: 15px;
  background: ${colors.orange};
`;

export const SectionButton = styled.button`
  flex: 1;
  flex-direction: row;
  height: 8px;
  background: none;
  z-index: 1;
  height: 100%;
  width: ${({ width }) => width || 10}%;
`;
