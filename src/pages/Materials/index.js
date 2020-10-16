/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';

import Markdown from 'markdown-to-jsx';
import { Container } from './styles';
import {
  ContentText,
  ContentTitle,
  Image,
  ImageContainer,
  TextImage,
} from '../../styles';
import md from '../../contents/what.md';
import { images } from '../../contents/images';
import { CustomLink } from '../../components';

const Material = ({ linkFunctions }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(md).then((res) =>
      res.text().then((m) => {
        setMarkdown(m);
      })
    );
  });

  return (
    <Container>
      <Markdown
        children={markdown}
        options={{
          overrides: {
            h1: {
              component: (text) => (
                <ContentTitle size={35} children={text.children} />
              ),
            },
            h2: {
              component: (text) => (
                <ContentTitle size={23} children={text.children} />
              ),
            },
            h3: {
              component: (text) => <TextImage children={text.children} />,
            },
            p: {
              component: (text) => (
                <ContentText size={20} children={text.children} />
              ),
            },
            img: {
              component: (props) => (
                <ImageContainer>
                  <Image src={images[props.source]} />
                </ImageContainer>
              ),
              title: 'YES',
              src: 'a',
            },
            a: {
              component: (props) => (
                <CustomLink
                  isCustomFunc={props.function}
                  children={props.children}
                  onClick={linkFunctions[props.function]}
                />
              ),
            },
          },
        }}
      />
    </Container>
  );
};

export default Material;
