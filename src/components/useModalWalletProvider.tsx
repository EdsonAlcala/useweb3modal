import React, { useContext, PropsWithChildren, useState } from 'react'

import { ModalWallet } from './modal-wallet'

interface IModalWalletProvider {
    showWalletModal: () => void
    hideWalletModal: () => void
}

const ModalWalletContext = React.createContext<IModalWalletProvider>({
    showWalletModal: () => {} /* eslint-disable-line */,
    hideWalletModal: () => {} /* eslint-disable-line */,
})

interface Props {}

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
    })

    return (
        <ModalWalletContext.Provider value={context}>
            {children}
            <ModalWallet isOpen={isModalWalletOpen} onClose={hideWalletModal} />
        </ModalWalletContext.Provider>
    )
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
