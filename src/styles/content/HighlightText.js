import styled from 'styled-components';
import { colors } from '../../constants';

export const HighlightText = styled.div`
  display: flex;
  align-items: center;
  border-bottom-width: 2px;
  border-color: black;
  margin-top: 30px;
  height: 40px;
  color: ${colors.darkBlue};
  &:hover {
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    transition: all 0.2s ease-in;
  }
`;
