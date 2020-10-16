import styled from 'styled-components';
import fingerPrint from '../assets/wallpaper.png';

export const AppContainer = styled.div`
    background-image: url(${fingerPrint}),
    background-repeat: 'repeat',
    background-size: 'contain',
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "section";

    @media(max-width: 800px) {
      grid-template-columns: 1fr;
      grid-template-areas: "section";
    }
`;
