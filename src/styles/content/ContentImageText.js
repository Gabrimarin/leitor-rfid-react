import styled from 'styled-components';

export const TextImage = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Image = styled.img`
  width: 35%;
  @media (max-width: 300px) {
    width: 70%;
  }
  min-width: 200px;
  margin: auto;
`;
