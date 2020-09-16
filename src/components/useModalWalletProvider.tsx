import React, { useContext, PropsWithChildren, useState } from 'react'
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { Web3Provider } from '@ethersproject/providers'

import ThemeProvider from '../theme'

import { ModalWallet } from './modal-wallet'

interface IModalWalletProvider {
    showWalletModal: () => void
    hideWalletModal: () => void
    useWeb3React: () => Web3ReactContextInterface
}

const ModalWalletContext = React.createContext<IModalWalletProvider>({
    showWalletModal: () => { } /* eslint-disable-line */,
    hideWalletModal: () => { } /* eslint-disable-line */,
    useWeb3React: useWeb3React
})

interface Props { }

export const ModalWalletProvider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
    const [isModalWalletOpen, setIsModalWalletOpen] = useState(false)

    const showWalletModal = () => {
        setIsModalWalletOpen(true)
    }

    const hideWalletModal = () => {
        setIsModalWalletOpen(false)
    }

    const [context, setContext] = useState({
        showWalletModal: showWalletModal,
        hideWalletModal: hideWalletModal,
        useWeb3React: useWeb3React
    })

    return (
        <ThemeProvider>
            <Web3ReactProvider getLibrary={getLibrary}>
                <ModalWalletContext.Provider value={context}>
                    {children}
                    <ModalWallet isOpen={isModalWalletOpen} onClose={hideWalletModal} />
                </ModalWalletContext.Provider>
            </Web3ReactProvider>
        </ThemeProvider>
    )
}

export const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider)
    library.pollingInterval = 15000
    return library
}

export const getModalWalletContext = (): React.Context<IModalWalletProvider> => {
    return ModalWalletContext
}

export const useWalletModal = () => {
    const walletContext = useContext(ModalWalletContext)

    if (walletContext === null) {
        throw new Error(
            'useWalletModal() can only be used inside of <ModalWalletProvider />, ' +
            'please declare it at a higher level.',
        )
    }
    return walletContext
}
