import React from 'react'
// import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
// import styled, { ThemeProvider } from 'styled-components';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import styled from 'styled-components';

import Modal from '../../Modal'

import { WalletProviderGrid } from './WalletProviderGrid';
import { Wallet } from './Wallet';

interface IModalWalletProps {
    isOpen: boolean
    onClose: () => void
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  width: 100%;
`

export const ModalWallet: React.FC<IModalWalletProps> = ({ isOpen, onClose }) => {
    const { active, account, connector, activate, error } = useWeb3React()
    return (
        <Modal
            isOpen={isOpen}
            onDismiss={onClose}
            minHeight={false}
            maxHeight={90}>
            <Wrapper>
                <Wallet />
            </Wrapper>
        </Modal>
    )
}
