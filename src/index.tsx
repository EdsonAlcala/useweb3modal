import React from 'react';
import ReactDOM from 'react-dom';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import { ModalWalletProvider } from './components'
import ThemeProvider from './theme';
import App from './App';

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
)