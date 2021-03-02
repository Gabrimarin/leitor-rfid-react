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
  width: 55%;
  @media (max-width: 800px) {
    width: 100%;
  }
  min-width: 200px;
  margin: auto;
`;
