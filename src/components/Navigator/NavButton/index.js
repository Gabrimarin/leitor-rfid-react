import React from 'react';
import { Container, Text } from './styles';

function NavButton({ selected = false, text, onClick }) {
  return (
    <Container selected={selected} onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
}

export default NavButton;
