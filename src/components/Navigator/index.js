import React from 'react';
import { Container, Text } from './styles';
import NavButton from '../NavButton';
function Navigator() {
    return (
      <Container>
        <NavButton selected></NavButton>
        <NavButton ></NavButton>
        <NavButton></NavButton>
        <NavButton></NavButton>
        <NavButton></NavButton>
      </Container>
    );
  }
  
  export default Navigator;