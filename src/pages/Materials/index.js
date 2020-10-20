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
  HighlightText,
} from '../../styles';
import what from '../../contents/what.md';
import program from '../../contents/program.md';
import example from '../../contents/example.md';
import extras from '../../contents/extras.md';
import { images } from '../../contents/images';
import { CustomLink } from '../../components';

const Material = ({ linkFunctions }) => {
  const [markdown, setMarkdown] = useState('');
  const [markdown2, setMarkdown2] = useState('');
  const [markdown3, setMarkdown3] = useState('');
  const [markdown4, setMarkdown4] = useState('');

  useEffect(() => {
    fetch(what).then((res) =>
      res.text().then((m) => {
        setMarkdown(m);
      })
    );

    fetch(program).then((res) =>
      res.text().then((m) => {
        setMarkdown2(m);
      })
    );

    fetch(example).then((res) =>
      res.text().then((m) => {
        setMarkdown3(m);
      })
    );

    fetch(extras).then((res) =>
      res.text().then((m) => {
        setMarkdown4(m);
      })
    );
  });

  return (
    <Container>
      <Markdown
        children={markdown4}
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
            h4: {
              component: (text) => (
                <HighlightText>
                  <TextImage children={text.children} />
                </HighlightText>
              ),
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
                  href={props.href}
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
