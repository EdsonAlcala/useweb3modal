import React from 'react'
import ReactDom from 'react-dom'

import { ModalWalletProvider, useWalletModal } from './components'

const App: React.FC = () => {
    const { showWalletModal } = useWalletModal()

    return (
        <React.Fragment>
            <button
                onClick={() => {
                    showWalletModal()
                }}>
                Connect to a wallet
            </button>
        </React.Fragment>
    )
}

ReactDom.render(
    <ModalWalletProvider>
        <App />
    </ModalWalletProvider>,
    document.getElementById('root'),
)
