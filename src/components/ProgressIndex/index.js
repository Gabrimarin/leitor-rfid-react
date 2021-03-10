import React from 'react';

import { Container, Bar } from './styles';

const Index = ({ progress }) => {
  return (
    <Container>
      <Bar progress={progress} />
    </Container>
  );
};

export default Index;
