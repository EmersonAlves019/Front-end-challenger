import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { useStore } from '../../context/hooks/storeContext';

const Styles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    background-color: #F3F3F4;
    max-width: 100%;
    height: 100%;
    font-family: Quicksand, sans-serif;
    overflow:${({ modalOpen }) => (modalOpen ? 'hidden' : 'auto')} ;
  }
`;

function GlobalStyles() {
  const { modalOpen } = useStore();

  return <Styles modalOpen={modalOpen} />;
}

export default GlobalStyles;
