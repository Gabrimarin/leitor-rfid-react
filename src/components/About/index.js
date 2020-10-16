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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              semper scelerisque fermentum. Aliquam sit amet ipsum erat. Morbi
              vel leo ornare, vestibulum lectus id, dictum massa. Aenean varius
              vehicula sagittis. In pellentesque leo nisi, eget pretium augue
              dapibus non. Sed id porttitor ex. Suspendisse laoreet vestibulum
              ligula, a condimentum purus imperdiet non. Aenean neque urna,
              tincidunt et ultricies id, dictum quis nunc. Vivamus sollicitudin
              ut neque ut pellentesque. Sed convallis laoreet nisl, at maximus
              orci varius eget. Nam et fermentum libero. Nullam in orci sed elit
              dictum aliquam. Suspendiss
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
