import styled from 'styled-components';
import { colors } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      ${`${colors.darkBlue}ff`}
    ),
    url('/headerimg.jpg');
  background-size: cover;
`;
export const Title = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-weight: bold;
  margin-left: 20px;
  font-size: 55px;
`;

export const ExpandButton = styled.button`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  transition: all 0.2s ease-in;
  cursor: pointer;
  color: white;
  margin-bottom: 10px;
`;

export const AboutContainer = styled.div`
  padding: 30px;
  color: white;
`;

export const Text = styled.p``;
