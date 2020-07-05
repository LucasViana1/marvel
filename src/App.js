// @flow
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
      <GlobalStyle />
    </>
  );
}

export default App;
