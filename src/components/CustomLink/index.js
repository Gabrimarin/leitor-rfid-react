import React from 'react';

import { Container } from './styles';

const CustomLink = ({ onClick, children, isCustomFunc }) => {
  return isCustomFunc ? (
    <Container onClick={onClick}>{children}</Container>
  ) : (
    <a href="https://github.com/probablyup/markdown-to-jsx">{children}</a>
  );
};

export default CustomLink;
