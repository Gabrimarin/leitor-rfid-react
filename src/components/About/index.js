import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FaChevronDown } from 'react-icons/fa';
import {
  Container,
  BackgroundImage,
  ExpandButton,
  AboutContainer,
  Text,
  Title,
} from './styles';

const About = ({ refProp }) => {
  const [expanded, setExpanded] = useState(false);
  const chevronStyle = {
    transform: `rotate(${expanded ? 180 : 0}deg)`,
    transitionDuration: '250ms',
    display: 'inline-block',
  };

  return (
    <Container ref={refProp}>
      <BackgroundImage>
        <Title>Módulo RFID</Title>
        <AnimateHeight duration={500} height={expanded ? 'auto' : 0}>
          <AboutContainer>
            <Text>
              Um dos grandes feitos da tecnologia é a simplificação. Por que
              abrir uma porta com uma chave quando eu posso usar apenas um
              cartão? Com o leitor RFID isto é possível! A segurança e a
              eficiência que a nossa tão dinâmica sociedade pede no dia-a-dia
              são bem alimentadas quando nos aprofundamos em um aparelho que nos
              permite fazer muitas coisas sem ao menos precisar tocá-las. Este
              ambiente virtual tem o propósito de apresentar o que é o leitor
              RFID, como ele funciona, para quê ele serve, como usá-lo, como
              programá-lo e suas principais aplicações.
            </Text>
          </AboutContainer>
        </AnimateHeight>
        <ExpandButton
          onClick={() => setExpanded(!expanded)}
          expanded={expanded}
        >
          Saiba mais
          <FaChevronDown
            cursor="pointer"
            color="white"
            size={20}
            style={chevronStyle}
          />
        </ExpandButton>
      </BackgroundImage>
    </Container>
  );
};

export default About;
