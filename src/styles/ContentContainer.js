import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => props.paddingTop}px;
  padding-left: 150px;
  padding-right: 150px;
  padding-bottom: 50px;
  background: white;

  @media (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export default ContentContainer;
