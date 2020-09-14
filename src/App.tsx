import React from 'react';

import { useWalletModal } from './components/useWallet'

const App = () => {
  const { showWalletModal, hideWalletModal } = useWalletModal()

  return (
    <React.Fragment>
      <button onClick={showWalletModal}>Open Modal</button>
      <button onClick={hideWalletModal}>Close Modal</button>
    </React.Fragment>
  );
}

export default App;
