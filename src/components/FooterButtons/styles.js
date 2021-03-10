import styled from 'styled-components';
import { colors } from '../../constants';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
`;

export const ButtonContainer = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  transition: opacity 0.1s linear;
  opacity: 1;
  ${({ display }) => !display && 'opacity: 0; pointer-events: none;'}

  font-size: 19px;
  color: ${colors.brown};

  &:hover {
    text-decoration: underline;
  }
`;
