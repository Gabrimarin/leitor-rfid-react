import styled from 'styled-components';
import { colors } from '../../../constants';

export const Text = styled.p`
  font-size: 15px;
  color: white;
  align-self: center;
  transition: all 0.1s ease-in;
`;

export const Container = styled.button`
  flex-grow: 1;
  border-width: 0px;
  height: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in;
  outline: none;
  color: white;
  border-style: ${({ selected }) => (selected ? 'solid' : 'none')};
  background: ${({ selected }) => (selected ? colors.orange : colors.darkBlue)};

  ${({ selected }) =>
    selected &&
    `${Text} {
      font-size: 16px;
      font-weight: 600;
    }
    border-bottom-width: 3px;
    border-color: ${colors.yellow};
    `}

  &:hover {
    background: ${colors.yellow};
    border-bottom-width: 3px;
    border-color: ${colors.orange};
    border-style: solid;
  }
`;
