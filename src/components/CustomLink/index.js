import React from 'react';

import { Container } from './styles';

const CustomLink = ({ onClick, children, isCustomFunc, href }) => {
  return isCustomFunc ? (
    <Container onClick={onClick}>{children}</Container>
  ) : (
    <a href={href}>{children}</a>
  );
};

export default CustomLink;
