import React from 'react';

import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { useWalletModal } from './components/useWallet'

const App = () => {
  const { active, account, connector, activate, error } = useWeb3React()
  const { showWalletModal, hideWalletModal } = useWalletModal()

  return (
    <React.Fragment>
      <button onClick={showWalletModal}>Open Modal</button>
      <button onClick={hideWalletModal}>Close Modal</button>
    </React.Fragment>
  );
}

export default App;
