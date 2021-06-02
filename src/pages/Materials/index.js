/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Markdown from 'markdown-to-jsx';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
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

const Material = ({ linkFunctions, selectedId = 1 }) => {
  const [markdownWhat, setMarkdownWhat] = useState('');
  const [markdownProgram, setMarkdownProgram] = useState('');
  const [markdownExample, setMarkdownExample] = useState('');
  const [markdownExtras, setMarkdownExtras] = useState('');

  useEffect(() => {
    fetch(what).then((res) =>
      res.text().then((m) => {
        setMarkdownWhat(m);
      })
    );

    fetch(program).then((res) =>
      res.text().then((m) => {
        setMarkdownProgram(m);
      })
    );

    fetch(example).then((res) =>
      res.text().then((m) => {
        setMarkdownExample(m);
      })
    );

    fetch(extras).then((res) =>
      res.text().then((m) => {
        setMarkdownExtras(m);
      })
    );
  });

  return (
    <Container>
      <Markdown
        children={
          [markdownWhat, markdownProgram, markdownExample, markdownExtras][
            selectedId
          ]
        }
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
                  <TextImage
                    style={{ fontSize: 25 }}
                    children={text.children}
                  />
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
            code: {
              component: ({ children }) => (
                <SyntaxHighlighter language="c" style={docco}>
                  {children}
                </SyntaxHighlighter>
              ),
            },
          },
        }}
      />
    </Container>
  );
};

export default Material;
