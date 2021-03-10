import React from 'react';
import { Container } from './styles';
import NavButton from './NavButton';

function Navigator({ selectedID, setSelected, refProp, fixed, items }) {
  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <Container ref={refProp} fixed={fixed}>
      {items.map((item, id) => (
        <NavButton
          selected={selectedID === id}
          onClick={() => handleClick(id)}
          text={item}
          key={item}
        />
      ))}
    </Container>
  );
}

export default Navigator;
