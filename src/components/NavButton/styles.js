import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.button`
  flex-grow: 1;
  border-width: 0px;
  height: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all .1s ease-in;
  color: white;
  border-style: ${({ selected }) => selected ? 'solid' : 'none'};
  background: ${({ selected }) => selected ? colors.orange : colors.darkBlue};
  ${({ selected }) => selected &&
    `border-bottom-width: 3px;
    border-color: ${colors.yellow};
    border-style: solid;`
  }

  &:hover {
    background: ${colors.yellow};
    border-bottom-width: 3px;
    border-color: ${colors.orange};
    border-style: solid;
  }
  
`;

export const Text = styled.p`
  font-size: 10px;
`;