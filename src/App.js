/* eslint-disable no-undef */
import React, { useState, useRef, useLayoutEffect } from 'react';
import { Navigator, FooterButtons, ProgressIndex, About } from './components';
import { ContentContainer, Wrapper, AppContainer } from './styles';
import { metrics } from './constants';
import Materials from './pages/Materials';

// const scrollToRef = (ref) => window.scrollTo(0, ref?.current?.offsetTop);

function App() {
  const [selectedID, setSelectedStateID] = useState(0);
  const [scrollPosition, setPosition] = useState(0);
  const [headerFixed, setHeaderFixed] = useState(false);
  const lastRef = useRef(null);

  const aboutRef = useRef(null);
  const titles = ['O que é?', 'Programação', 'Aplicação', 'Extras'];
  const getFooterButtonsType = () => {
    if (selectedID === 0) return 'next';
    if (selectedID === titles.length - 1) return 'back';
    return 'both';
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const setSelectedID = (id) => {
    scrollToTop();
    setSelectedStateID(id);
  };

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
      setHeaderFixed(
        window.pageYOffset >=
          aboutRef?.current?.offsetTop + aboutRef?.current?.offsetHeight
      );
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <AppContainer>
      <Wrapper>
        <About refProp={aboutRef} />
        <Navigator
          setSelected={setSelectedID}
          selectedID={selectedID}
          fixed={headerFixed}
          items={titles}
        />
        <ContentContainer
          paddingTop={headerFixed ? metrics.headerHeight + 20 : 20}
        >
          <Materials
            linkFunctions={{ goto3: () => setSelectedID(3) }}
            selectedId={selectedID}
          />
          <FooterButtons
            type={getFooterButtonsType()}
            onBack={() => setSelectedID(selectedID - 1)}
            onNext={() => setSelectedID(selectedID + 1)}
            refProp={lastRef}
          />
        </ContentContainer>
      </Wrapper>
      <ProgressIndex
        progress={
          (scrollPosition * 100) /
          (window.document.body.offsetHeight - window.innerHeight)
        }
      />
    </AppContainer>
  );
}

export default App;
