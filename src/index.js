import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'components/App';
import { GlobalStyle } from './styles/GlobalStyle';
import { persistor, store } from './redux/store.js';

const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
    tomato: '#FF6347',
    green: '#90EE90',
    violet: '#EE82EE',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
