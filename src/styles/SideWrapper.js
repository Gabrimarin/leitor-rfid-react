import styled from 'styled-components';

const SideWrapper = styled.div`
  justify-content: center;
  align-content: center;
  grid-area: side;
  position: fixed;

  @media (max-width: 800px) {
    display: none;
  }
`;

export default SideWrapper;
