import React from 'react'
import styled from 'styled-components';
import { useWeb3React, UnsupportedChainIdError, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'

import ThemeProvider from '../../theme'

import { WalletProviderGrid } from './WalletProviderGrid';

export interface IWalletProps {
  trigger: () => void
  testId: string
}

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg2};
  padding: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${({ theme }) => theme.mediaWidth.upToMedium`padding: 1rem`};
`

interface ModalErrorProps {
  error: Error
}

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 15000
  return library
}

const ModalErrorView: React.FC<ModalErrorProps> = ({ error }) => {
  return (
    <React.Fragment>
      {error instanceof UnsupportedChainIdError ? (
        <h5>Please connect to the appropriate Ethereum network.</h5>
      ) : (
          'Error connecting. Try refreshing the page.'
        )
      }
    </React.Fragment>
  )
}

export const Wallet = () => {
  const { error } = useWeb3React()

  return (
    <ThemeProvider>
      <ContentWrapper>
        <Web3ReactProvider getLibrary={getLibrary}>
          {error && <ModalErrorView error={error} />}
          {!error && <WalletProviderGrid />}
        </Web3ReactProvider>
      </ContentWrapper>
    </ThemeProvider>)
}
