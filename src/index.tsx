import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Web3ReactProvider } from '@web3-react/core'
import { ModalWalletProvider } from './components/useWallet'
import { Web3Provider } from '@ethersproject/providers'
import ThemeProvider from './theme';

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 15000
  return library
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ModalWalletProvider>
          <App />
        </ModalWalletProvider>
      </Web3ReactProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
