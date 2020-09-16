import React from 'react'
import ReactDom from 'react-dom'

import { ModalWalletProvider, useWalletModal } from './components'
import ThemeProvider from './theme'

const App: React.FC<{}> = () => {
    const { showWalletModal } = useWalletModal()
    return (
        <React.Fragment>
            <button onClick={() => {
                console.log("clicked")
                showWalletModal()
            }}>Connect to a wallet</button>
        </React.Fragment >
    )
}

ReactDom.render(<ThemeProvider>
    <ModalWalletProvider>
        <App />
    </ModalWalletProvider>
</ThemeProvider >, document.getElementById('root'))