import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container, ButtonContainer } from './styles';

const FooterButtons = ({ type, onNext, onBack, refProp }) => {
  return (
    <Container ref={refProp}>
      <ButtonContainer display={type !== 'next'} type="back" onClick={onBack}>
        <FaChevronLeft size={10} />
        Voltar
      </ButtonContainer>
      <ButtonContainer display={type !== 'back'} type="next" onClick={onNext}>
        Próximo
        <FaChevronRight size={10} />
      </ButtonContainer>
    </Container>
  );
};

export default FooterButtons;
